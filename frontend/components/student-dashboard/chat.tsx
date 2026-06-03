import React, { useState, useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';
import { baseUrl } from '@/lib/baseUrl';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import SendIcon from '@mui/icons-material/Send';
import PersonIcon from '@mui/icons-material/Person';
import CheckIcon from '@mui/icons-material/Check';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { v4 as uuidv4 } from 'uuid';

interface ChatMessage {
  _id?: string;
  clientMessageId?: string;
  senderType: 'student' | 'counselor';
  senderEmail: string;
  senderName: string;
  consultationRequest: string;
  message: string;
  createdAt: Date;
  read?: boolean;
  delivered?: boolean;
  pending?: boolean;
  error?: boolean;
}

interface ChatProps {
  userData: any;
  activeTab: string;
}

const Chat: React.FC<ChatProps> = ({ userData, activeTab }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [socket, setSocket] = useState<Socket | null>(null);
  const [connected, setConnected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isInitialRender, setIsInitialRender] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const socketRef = useRef<Socket | null>(null);
  const pendingMessagesRef = useRef<Set<string>>(new Set());
  const [showMessageMenu, setShowMessageMenu] = useState<string | null>(null);
  const [showMessageDeleteDialog, setShowMessageDeleteDialog] = useState(false);
  const [messageToDelete, setMessageToDelete] = useState<string | null>(null);
  const [usePolling, setUsePolling] = useState(false);
  const pollingIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Set initial render flag to false after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialRender(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Polling functions for fallback when Socket.IO is not available
  const startPolling = () => {
    console.log('Starting polling for messages');
    setUsePolling(true);
    
    // Poll for new messages every 2 seconds
    pollingIntervalRef.current = setInterval(async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/chat/poll/${userData._id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token') || sessionStorage.getItem('token')}`
          }
        });
        
        if (response.data.success && response.data.messages) {
          setMessages(prevMessages => {
            const newMessages = response.data.messages.filter((newMsg: any) => 
              !prevMessages.some(existingMsg => existingMsg._id === newMsg._id)
            );
            return [...prevMessages, ...newMessages];
          });
        }
      } catch (error) {
        console.error('Polling error:', error);
      }
    }, 2000);
  };

  const stopPolling = () => {
    if (pollingIntervalRef.current) {
      clearInterval(pollingIntervalRef.current);
      pollingIntervalRef.current = null;
    }
    setUsePolling(false);
  };

  // Cleanup polling on unmount
  useEffect(() => {
    return () => {
      stopPolling();
    };
  }, []);

  // Socket.IO connection with fallback to polling
  useEffect(() => {
    if (userData ) {
      const token = localStorage.getItem('token') || sessionStorage.getItem('token'); 
      
      if (token) {

        
        // Try Socket.IO connection first
        const newSocket = io(baseUrl, {
          auth: {
            token: token
          },
          query: {
            userId: userData._id,
            userType: 'student',
            userRole: userData.role || 'registered-student'
          },
          timeout: 5000, // 5 second timeout
          reconnection: false // Disable reconnection to fail fast
        });

        newSocket.on('connect', () => {
          console.log('Student connected to chat server');
          setConnected(true);
        });

        newSocket.on('disconnect', () => {
          console.log('Student disconnected from chat server');
          setConnected(false);
        });

        newSocket.on('connect_error', (error) => {
          console.error('Student connection error:', error);
          console.error('Token being used:', token);
          
          // If Socket.IO fails, fall back to polling
          if (error.message.includes('404') || error.message.includes('Not Found')) {
            console.log('Socket.IO not available, falling back to polling');
            setConnected(false);
            newSocket.disconnect();
            startPolling();
          } else {
            toast.error(`Connection failed: ${error.message}`);
          }
        });

        newSocket.on('receive_message', (messageData) => {
          console.log('Student received message:', messageData);
          // Only add message if it's not from the current user (to avoid duplicates)
          if (messageData.senderType !== 'student') {
            setMessages(prevMessages => [...prevMessages, messageData]);
          }
        });

        newSocket.on('message_delivered', (data) => {
          console.log('Student message delivered:', data);
          setMessages(prevMessages => 
            prevMessages.map(msg => 
              msg.clientMessageId === data.clientMessageId 
                ? { ...msg, pending: false, delivered: true, _id: data.messageId }
                : msg
            )
          );
          pendingMessagesRef.current.delete(data.clientMessageId);
        });

        newSocket.on('message_error', (data) => {
          console.error('Student message error:', data);
          setMessages(prevMessages => 
            prevMessages.map(msg => 
              msg.clientMessageId === data.clientMessageId 
                ? { ...msg, pending: false, error: true }
                : msg
            )
          );
          pendingMessagesRef.current.delete(data.clientMessageId);
        });

        setSocket(newSocket);
        socketRef.current = newSocket;

        return () => {
          newSocket.close();
        };
      }
    }
  }, [userData]);

  // Join room when consultation request is available
  useEffect(() => {
    if (userData && socketRef.current) {
      socketRef.current.emit('join_room', userData._id);
    }
  }, [userData]);

  // Load chat history
  useEffect(() => {
    if (userData) {
      const fetchChatHistory = async () => {
        try {
          const token = localStorage.getItem('token') || sessionStorage.getItem('token');
          
          const response = await axios.get(`${baseUrl}/api/chat/user/${userData._id}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          
          if (response.data.success) {
            setMessages(response.data.data);
          }
        } catch (error) {
          console.error('Error fetching chat history:', error);
        }
      };

      fetchChatHistory();
    }
  }, [userData]);

  

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !userData) return;

    // Check if we have a connection (Socket.IO or polling)
    if (!socketRef.current && !usePolling) {
      toast.error('Not connected to chat server');
      return;
    }

    const clientMessageId = uuidv4();
    
    const newMsg: ChatMessage = {
      senderType: 'student',
      senderEmail: userData?.email || 'student@edurizon.com',
      senderName: userData?.name || 'Student',
      consultationRequest: userData._id,
      message: newMessage.trim(),
      createdAt: new Date(),
      clientMessageId,
      pending: true
    };

    setMessages(prev => [...prev, newMsg]);
    setNewMessage('');
    
    pendingMessagesRef.current.add(clientMessageId);

    try {
      if (usePolling) {
        // Send message via polling API
        const response = await axios.post(`${baseUrl}/api/chat/send`, {
          consultationRequest: userData._id,
          message: newMessage.trim(),
          senderType: 'student',
          senderId: userData._id
        }, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token') || sessionStorage.getItem('token')}`
          }
        });

        if (response.data.success) {
          // Update the message with the server response
          setMessages(prev => prev.map(msg => 
            msg.clientMessageId === clientMessageId 
              ? { ...msg, _id: response.data.message._id, pending: false }
              : msg
          ));
          pendingMessagesRef.current.delete(clientMessageId);
        }
      } else if (socketRef.current) {
        // Send message via Socket.IO
        socketRef.current.emit('send_message', {
          senderType: 'student',
          senderId: userData._id,
          receiverId: 'counselor', // Will be replaced with actual counselor ID
          senderEmail: userData?.email || 'student@edurizon.com',
          senderName: userData?.name || 'Student',
          consultationRequest: userData._id,
          message: newMessage.trim(),
          clientMessageId
        });

        // Mark messages as read
        socketRef.current.emit('mark_read', {
          consultationRequest: userData._id,
          userType: 'student'
        });
      }
    } catch (error) {
      console.error('Student message error:', error);
      toast.error('Failed to send message');
    }

    // Timeout for message delivery
    setTimeout(() => {
      if (pendingMessagesRef.current.has(clientMessageId)) {
        setMessages(prevMessages => prevMessages.map(msg => {
          if (msg.clientMessageId === clientMessageId) {
            return { ...msg, pending: false, error: true };
          }
          return msg;
        }));
        
        toast.error('Message may not have been delivered. Please try again.');
      }
    }, 5000);
  };

  const handleDeleteMessage = async (messageId: string) => {
    if (!messageId) return;

    try {
      const token = localStorage.getItem('token') || sessionStorage.getItem('token');
      
      const response = await axios.delete(`${baseUrl}/api/chat/delete/${messageId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.data.success) {
        // Remove message from local state
        setMessages(prev => prev.filter(msg => msg._id !== messageId));
        toast.success('Message deleted successfully');
        setShowMessageDeleteDialog(false);
        setMessageToDelete(null);
      }
    } catch (error) {
      console.error('Error deleting message:', error);
      toast.error('Failed to delete message');
    }
  };

  const handleDeleteMessageClick = (messageId: string) => {
    setMessageToDelete(messageId);
    setShowMessageDeleteDialog(true);
    setShowMessageMenu(null);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.message-menu-container')) {
        setShowMessageMenu(null);
      }
    };

    if (showMessageMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMessageMenu]);

  if (activeTab !== 'chat-support') {
    return null;
  }

  return (
    <div className="flex flex-col h-full bg-white max-h-screen rounded-[1vw] shadow-[.5vw_.5vw_3vw_.5vw_rgba(0,_0,_0,_0.08)]">
      <Toaster />
      
      {/* Chat Header */}
      <div className="p-[2vw] flex items-center justify-between bg-[#FF7500]">
        <div className="flex items-center gap-[1vw]">
          <div className="w-[3vw] h-[3vw] rounded-full bg-white/20 flex items-center justify-center">
            <PersonIcon className="w-[1.5vw] h-[1.5vw] text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-white text-[1.2vw]">Team Edurizon</h3>
            <p className="text-white/80 text-[0.9vw]">
              {connected ? 'Online' : 'Offline'}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-[0.5vw]">
          <div className={`w-[0.8vw] h-[0.8vw] rounded-full ${connected ? 'bg-green-400' : usePolling ? 'bg-yellow-400' : 'bg-red-400'}`}></div>
          <span className="text-white/80 text-[0.8vw]">
            {connected ? 'Connected' : usePolling ? 'Polling Mode' : 'Disconnected'}
          </span>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-[2vw] bg-[#FFD7C3]/20 flex flex-col max-h-[calc(100vh-200px)]">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="w-[4vw] h-[4vw] bg-[#FF7500]/20 rounded-full flex items-center justify-center mx-auto mb-[1vw]">
                <PersonIcon className="w-[2vw] h-[2vw] text-[#FF7500]" />
              </div>
              <h3 className="text-[1.2vw] font-semibold text-gray-900 mb-[0.5vw]">Start a conversation</h3>
              <p className="text-gray-500 text-[0.9vw]">Send a message to your counselor</p>
            </div>
          </div>
        ) : (
          <div className="space-y-[1vw]">
            {messages.map((message) => {
              const isOutgoing = message.senderType === 'student';
              const timestamp = message.createdAt 
                ? new Date(message.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                : '00:00';
              
              return (
                <div
                  key={message._id || message.clientMessageId}
                  className={`flex ${isOutgoing ? 'justify-end' : 'justify-start'} group`}
                >
                  <div className="relative">
                    <div
                      className={`max-w-[20vw] px-[1vw] py-[0.8vw] rounded-[0.8vw] ${
                        isOutgoing
                          ? 'bg-[#FF7500] text-white'
                          : 'bg-white text-gray-900 border border-gray-200 shadow-sm'
                      } ${message.pending ? 'opacity-70' : ''} ${message.error ? 'border-red-300 bg-red-50' : ''}`}
                    >
                      <p className="text-[0.9vw] leading-relaxed">{message.message}</p>
                      <div className="flex items-center justify-between mt-[0.2vw]">
                        <div className="flex items-center gap-[0.5vw]">
                          <span className="text-[0.7vw] opacity-70">{timestamp}</span>
                          {isOutgoing && (
                            <div className="flex items-center gap-1">
                              {message.error ? (
                                <span className="text-red-300 text-[0.7vw] font-bold">!</span>
                              ) : message.pending ? (
                                <span className="text-white/70 text-[0.7vw] animate-pulse">...</span>
                              ) : message.read ? (
                                <DoneAllIcon className="w-[0.8vw] h-[0.8vw] text-white/70" />
                              ) : (
                                <CheckIcon className="w-[0.8vw] h-[0.8vw] text-white/70" />
                              )}
                            </div>
                          )}
                        </div>
                        {isOutgoing && message._id && (
                          <div className="relative message-menu-container">
                            <button
                              onClick={() => setShowMessageMenu(showMessageMenu === message._id ? null : (message._id || null))}
                              className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-[0.3vw] hover:bg-white/20 rounded-full"
                            >
                              <MoreVertIcon className="w-[1vw] h-[1vw]" />
                            </button>
                            {showMessageMenu === message._id && (
                              <div className="absolute right-0 top-[1.5vw] bg-white rounded-[0.5vw] shadow-lg border border-gray-200 py-[0.5vw] z-10 min-w-[8vw]">
                                <button
                                  onClick={() => handleDeleteMessageClick(message._id!)}
                                  className="w-full px-[0.8vw] py-[0.5vw] text-left text-red-600 hover:bg-red-50 flex items-center gap-[0.5vw] text-[0.8vw]"
                                >
                                  <DeleteIcon className="w-[1vw] h-[1vw]" />
                                  Delete
                                </button>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Message Input */}
      <div className="bg-white border-t border-gray-200 p-[1.5vw]">
        <div className="flex items-center gap-[1vw]">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type your message..."
            className="flex-1 px-[1.5vw] py-[1vw] border border-gray-300 rounded-[1vw] focus:ring-2 focus:ring-[#FF7500] focus:border-transparent text-[0.9vw]"
            disabled={!connected}
          />
          <button
            onClick={handleSendMessage}
            disabled={loading || !newMessage.trim() || !connected}
            className="p-[1vw] bg-[#FF7500] text-white rounded-[1vw] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:bg-[#E66A00]"
          >
            <SendIcon className="w-[1.2vw] h-[1.2vw]" />
          </button>
        </div>
      </div>

      {/* Delete Message Confirmation Dialog */}
      {showMessageDeleteDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-[1vw] p-[2vw] max-w-md w-full mx-4">
            <div className="flex items-center gap-[1vw] mb-[1vw]">
              <div className="w-[2.5vw] h-[2.5vw] bg-red-100 rounded-full flex items-center justify-center">
                <DeleteIcon className="w-[1.2vw] h-[1.2vw] text-red-500" />
              </div>
              <h3 className="text-[1.2vw] font-semibold text-gray-900">Delete Message</h3>
            </div>
            <p className="text-gray-600 mb-[1.5vw] text-[0.9vw]">
              Are you sure you want to delete this message? This action cannot be undone.
            </p>
            <div className="flex gap-[1vw] justify-end">
              <button
                onClick={() => {
                  setShowMessageDeleteDialog(false);
                  setMessageToDelete(null);
                }}
                className="px-[1.5vw] py-[0.8vw] text-gray-600 border border-gray-300 rounded-[0.5vw] hover:bg-gray-50 transition-colors text-[0.9vw]"
              >
                Cancel
              </button>
              <button
                onClick={() => messageToDelete && handleDeleteMessage(messageToDelete)}
                className="px-[1.5vw] py-[0.8vw] bg-red-500 text-white rounded-[0.5vw] hover:bg-red-600 transition-colors text-[0.9vw]"
              >
                Delete Message
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
