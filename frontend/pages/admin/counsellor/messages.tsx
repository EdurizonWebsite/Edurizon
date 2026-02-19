import Layout from '@/components/admin/DocumentLayout';
import { useState, useEffect, useRef } from 'react';
import { baseUrl } from '@/lib/baseUrl';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import GridViewIcon from '@mui/icons-material/GridView';
import CallIcon from '@mui/icons-material/Call';
import MessageIcon from '@mui/icons-material/Message';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SendIcon from '@mui/icons-material/Send';
import PersonIcon from '@mui/icons-material/Person';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState as useStateMenu } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { io, Socket } from 'socket.io-client';
import { v4 as uuidv4 } from 'uuid';

const navItems = [
  {
    href: "/admin/counsellor",
    icon: <GridViewIcon />,
    label: "Overview",
  },
{
  href: "/admin/counsellor/calling-records",
  icon: <CallIcon />,
  label: "Calling Records",
},
{
  href: "/admin/counsellor/messages",
  icon: <MessageIcon />,
  label: "Messages",
},
// {
//   href: "/admin/counsellor/view-sessions",
//   icon: <ArrowForwardIosIcon />,
//   label: "View Sessions",
// },
];

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
  id?: string;
  sender?: string;
  timestamp?: string;
  isRead?: boolean;
  type?: 'incoming' | 'outgoing';
}

interface Conversation {
  id: string;
  studentName: string;
  studentId: string;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  lastSeen: string;
}

const Messages = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [adminData, setAdminData] = useState<any>(null);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConversation, setSelectedConversation] = useState<string>('');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [assignedStudents, setAssignedStudents] = useState<any[]>([]);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [connected, setConnected] = useState(false);
  const [reconnecting, setReconnecting] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const socketRef = useRef<Socket | null>(null);
  const pendingMessagesRef = useRef<Set<string>>(new Set());
  const [showMenu, setShowMenu] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showMessageMenu, setShowMessageMenu] = useState<string | null>(null);
  const [showMessageDeleteDialog, setShowMessageDeleteDialog] = useState(false);
  const [messageToDelete, setMessageToDelete] = useState<string | null>(null);
  const [usePolling, setUsePolling] = useState(false);
  const pollingIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Polling functions for fallback when Socket.IO is not available
  const startPolling = () => {
    setUsePolling(true);
    
    // Poll for new messages every 2 seconds
    pollingIntervalRef.current = setInterval(async () => {
      try {
        if (selectedConversation) {
          const response = await axios.get(`${baseUrl}/api/admin/chat/user/${selectedConversation}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('adminToken') || sessionStorage.getItem('adminToken')}`
            }
          });
          
          if (response.data.success && response.data.messages) {
            setChatMessages(prevMessages => {
              const newMessages = response.data.messages.filter((newMsg: any) => 
                !prevMessages.some((existingMsg: any) => existingMsg._id === newMsg._id)
              );
              return [...prevMessages, ...newMessages];
            });
          }
        }
      } catch (error) {
        console.error('Admin polling error:', error);
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

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.menu-container')) {
        setShowMenu(false);
      }
      if (!target.closest('.message-menu-container')) {
        setShowMessageMenu(null);
      }
    };

    if (showMenu || showMessageMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu, showMessageMenu]);

  useEffect(() => {
    if(sessionStorage.getItem('adminData')){
      const value = sessionStorage.getItem('adminData');
      const parsedValue = JSON.parse(value || '{}');
      setAdminData(parsedValue);
    }
    else{
      const value = localStorage.getItem('adminData');
      const parsedValue = JSON.parse(value || '{}');
      setAdminData(parsedValue);
    }
  }, []);

  // Socket.IO connection with fallback to polling
  useEffect(() => {
    if (adminData && adminData._id) {
      const token = localStorage.getItem('adminToken') || sessionStorage.getItem('adminToken');
      
      if (token) {

        const newSocket = io(baseUrl, {
          auth: {
            token: token
          },
          query: {
            userId: adminData._id,
            userType: 'counselor',
            adminRole: adminData.role || 'counsellor'
          },
          timeout: 5000, // 5 second timeout
          reconnection: false // Disable reconnection to fail fast
        });

        newSocket.on('connect', () => {
          console.log('Connected to chat server');
          setConnected(true);
          setReconnecting(false);
        });

        newSocket.on('disconnect', () => {
          console.log('Disconnected from chat server');
          setConnected(false);
        });

        newSocket.on('connect_error', (error) => {
          console.error('Connection error:', error);
          console.error('Token being used:', token);
          
          // If Socket.IO fails, fall back to polling
          if (error.message.includes('404') || error.message.includes('Not Found')) {
            console.log('Socket.IO not available, falling back to polling');
            setConnected(false);
            newSocket.disconnect();
            startPolling();
          } else {
            setReconnecting(true);
            toast.error(`Connection failed: ${error.message}`);
          }
        });

        newSocket.on('receive_message', (messageData) => {
          // Only add message if it's not from the current user (to avoid duplicates)
          if (messageData.senderType !== 'counselor') {
            setChatMessages(prevMessages => [...prevMessages, messageData]);
            
            // Update last seen for the sender
            const now = new Date();
            const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const dateString = now.toLocaleDateString() === new Date().toLocaleDateString() ? 'Today' : now.toLocaleDateString();
            
            setConversations(prev => prev.map(conv => 
              conv.id === messageData.senderId || conv.id === messageData.receiverId
                ? { ...conv, lastSeen: dateString, timestamp: timeString }
                : conv
            ));
          }
        });

        newSocket.on('message_delivered', (data) => {
          setChatMessages(prevMessages => 
            prevMessages.map(msg => 
              msg.clientMessageId === data.clientMessageId 
                ? { ...msg, pending: false, delivered: true, _id: data.messageId }
                : msg
            )
          );
          pendingMessagesRef.current.delete(data.clientMessageId);
          
          // Update last seen for current user
          const now = new Date();
          const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          const dateString = now.toLocaleDateString() === new Date().toLocaleDateString() ? 'Today' : now.toLocaleDateString();
          
          setConversations(prev => prev.map(conv => 
            conv.id === selectedConversation
              ? { ...conv, lastSeen: dateString, timestamp: timeString }
              : conv
          ));
        });

        newSocket.on('message_error', (data) => {
          console.error('Message error:', data);
          setChatMessages(prevMessages => 
            prevMessages.map(msg => 
              msg.clientMessageId === data.clientMessageId 
                ? { ...msg, pending: false, error: true }
                : msg
            )
          );
          pendingMessagesRef.current.delete(data.clientMessageId);
        });

        newSocket.on('messages_read', (data) => {
          setChatMessages(prevMessages => 
            prevMessages.map(msg => 
              msg.consultationRequest === data.consultationRequest && 
              msg.senderType !== 'counselor'
                ? { ...msg, read: true }
                : msg
            )
          );
        });

        setSocket(newSocket);
        socketRef.current = newSocket;

        return () => {
          newSocket.close();
        };
      }
    }
  }, [adminData]);

  // Fetch assigned students from backend
  useEffect(() => {
    const fetchAssignedStudents = async () => {
      try {
        // For super-admin, get all students; for counsellor, get assigned students
        const endpoint =  `${baseUrl}/api/registered-students/get-by-counsellor/${adminData._id}`;
          
        const response = await axios.get(endpoint, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('adminToken') || sessionStorage.getItem('adminToken')}`
          }
        });
        
        if (response.data.success) {
          setAssignedStudents(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching assigned students:', error);
        toast.error('Failed to fetch assigned students');
      }
    };

    if (adminData && adminData._id) {
      fetchAssignedStudents();
    }
  }, [adminData]);

  // Generate conversations from assigned students
  useEffect(() => {
    if (assignedStudents.length > 0) {
      const studentConversations: Conversation[] = assignedStudents.map((student, index) => ({
        id: student._id,
        studentName: student.name,
        studentId: student._id,
        lastMessage: 'No messages yet',
        timestamp: '00:00',
        unreadCount: 0,
        lastSeen: 'Never'
      }));

      setConversations(studentConversations);
    }
  }, [assignedStudents]);

  // Load chat messages when conversation is selected
  useEffect(() => {
    if (selectedConversation) {
      const fetchChatHistory = async () => {
        try {
          const response = await axios.get(`${baseUrl}/api/admin/chat/user/${selectedConversation}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('adminToken') || sessionStorage.getItem('adminToken')}`
            }
          });
          
          if (response.data.success) {
            setChatMessages(response.data.data);
            
            // Update last message in conversations
            if (response.data.data && response.data.data.length > 0) {
              const lastMessage = response.data.data[response.data.data.length - 1];
              const lastMessageTime = new Date(lastMessage.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
              
              setConversations(prev => prev.map(conv => 
                conv.id === selectedConversation 
                  ? { 
                      ...conv, 
                      lastMessage: lastMessage.message, 
                      timestamp: lastMessageTime,
                      lastSeen: new Date(lastMessage.createdAt).toLocaleDateString() === new Date().toLocaleDateString() 
                        ? 'Today' 
                        : new Date(lastMessage.createdAt).toLocaleDateString()
                    }
                  : conv
              ));
            }
          }
        } catch (error) {
          console.error('Error fetching chat history:', error);
          toast.error('Failed to load chat history');
        }
      };

      fetchChatHistory();
    }
  }, [selectedConversation]);

  // Join room when conversation is selected
  useEffect(() => {
    if (selectedConversation && socketRef.current) {
      socketRef.current.emit('join_room', selectedConversation);
    }
  }, [selectedConversation]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages]);

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !selectedConversation) return;

    if (!socketRef.current) {
      toast.error('Not connected to chat server');
      return;
    }

    const clientMessageId = uuidv4();
    
    const newMsg: ChatMessage = {
      senderType: 'counselor',
      senderEmail: adminData?.email || 'counselor@edurizon.com',
      senderName: adminData?.firstName + ' ' + adminData?.lastName || 'Counselor',
      consultationRequest: selectedConversation,
      message: newMessage.trim(),
      createdAt: new Date(),
      clientMessageId,
      pending: true
    };

    setChatMessages(prev => [...prev, newMsg]);
    setNewMessage('');
    
    pendingMessagesRef.current.add(clientMessageId);

    socketRef.current.emit('send_message', {
      senderType: 'counselor',
      senderId: adminData._id,
      receiverId: selectedConversation,
      senderEmail: adminData?.email || 'counselor@edurizon.com',
      senderName: adminData?.firstName + ' ' + adminData?.lastName || 'Counselor',
      consultationRequest: selectedConversation,
      message: newMessage.trim(),
      clientMessageId
    });

    // Mark messages as read
    socketRef.current.emit('mark_read', {
      consultationRequest: selectedConversation,
      userType: 'counselor'
    });

    // Timeout for message delivery
    setTimeout(() => {
      if (pendingMessagesRef.current.has(clientMessageId)) {
        setChatMessages(prevMessages => prevMessages.map(msg => {
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
      const token = localStorage.getItem('adminToken') || sessionStorage.getItem('adminToken');
      
      const response = await axios.delete(`${baseUrl}/api/admin/chat/delete/${messageId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.data.success) {
        // Remove message from local state
        setChatMessages(prev => prev.filter(msg => msg._id !== messageId));
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

  const handleDeleteChat = async () => {
    if (!selectedConversation) return;

    try {
      const token = localStorage.getItem('adminToken') || sessionStorage.getItem('adminToken');
      
      // Delete all messages in this conversation
      const response = await axios.delete(`${baseUrl}/api/admin/chat/delete-conversation/${selectedConversation}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.data.success) {
        setChatMessages([]);
        toast.success('Chat deleted successfully');
        setShowDeleteDialog(false);
        setShowMenu(false);
      }
    } catch (error) {
      console.error('Error deleting chat:', error);
      toast.error('Failed to delete chat');
    }
  };

  const filteredConversations = conversations.filter(conv => 
    conv.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conv.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedConv = conversations.find(conv => conv.id === selectedConversation);

  return (
    <Layout navItems={navItems} >
      <Toaster />
      <div className="flex h-screen bg-[#F4F5F7]">
        {/* Left Panel - Conversations List */}
        <div className="w-1/3 bg-white border-r border-gray-200 flex flex-col shadow-sm">
          {/* Search Bar */}
          <div className="p-6 border-b border-gray-200 bg-white">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search conversations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white transition-all duration-200"
              />
            </div>
          </div>

          {/* Conversations List */}
          <div className="flex-1 overflow-y-auto">
            {filteredConversations.map((conversation) => (
              <div
                key={conversation.id}
                onClick={() => setSelectedConversation(conversation.id)}
                className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-all duration-200 ${
                  selectedConversation === conversation.id ? 'bg-teal-50 border-l-4 border-l-teal-500' : ''
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center">
                      <PersonIcon className="w-6 h-6 text-white" />
                    </div>
                    {conversation.unreadCount > 0 && (
                      <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                        {conversation.unreadCount}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-gray-900 truncate">
                        {conversation.studentName}
                      </h3>
                      <span className="text-sm text-gray-500">{conversation.timestamp}</span>
                    </div>
                    <p className="text-sm text-gray-600 truncate">
                      {conversation.lastMessage}
                    </p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs text-gray-400">Last seen: {conversation.lastSeen}</span>
                      {conversation.unreadCount > 0 && (
                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel - Chat Window */}
        <div className="flex-1 flex flex-col bg-white shadow-sm">
          {selectedConversation ? (
            <>
              {/* Chat Header */}
              <div className="bg-teal-600 text-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <PersonIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-xl">{selectedConv?.studentName}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-teal-100 text-sm">
                          Last seen: {selectedConv?.lastSeen}
                        </span>
                        {adminData?.role && (
                          <span className="px-3 py-1 bg-white/20 text-white text-xs rounded-full font-medium">
                            {adminData.role === 'super-admin' ? 'Super Admin' : 'Counselor'}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="relative menu-container">
                    <button 
                      onClick={() => setShowMenu(!showMenu)}
                      className="p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
                    >
                      <MoreVertIcon className="w-6 h-6" />
                    </button>
                    {showMenu && (
                      <div className="absolute right-0 top-12 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10 min-w-[160px]">
                        <button
                          onClick={() => {
                            setShowDeleteDialog(true);
                            setShowMenu(false);
                          }}
                          className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50 flex items-center gap-2"
                        >
                          <DeleteIcon className="w-4 h-4" />
                          Delete Chat
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-6 bg-[#F4F5F7] flex flex-col max-h-[calc(100vh-200px)]">
                {/* Date Separator */}
                <div className="flex items-center justify-center my-6">
                  <div className="bg-gray-300 h-px flex-1"></div>
                  <span className="px-4 py-2 bg-white text-gray-600 text-sm rounded-full shadow-sm border border-gray-200">Today</span>
                  <div className="bg-gray-300 h-px flex-1"></div>
                </div>

                {/* Messages */}
                <div className="space-y-4">
                  {chatMessages.map((message) => {
                    const isOutgoing = message.senderType === 'counselor';
                    const timestamp = message.createdAt 
                      ? new Date(message.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                      : message.timestamp || '00:00';
                    
                    return (
                      <div
                        key={message._id || message.id || message.clientMessageId}
                        className={`flex ${isOutgoing ? 'justify-end' : 'justify-start'} group`}
                      >
                        <div className="relative">
                          <div
                            className={`max-w-md px-4 py-3 rounded-lg ${
                              isOutgoing
                                ? 'bg-teal-500 text-white'
                                : 'bg-white text-gray-900 border border-gray-200 shadow-sm'
                            } ${message.pending ? 'opacity-70' : ''} ${message.error ? 'border-red-300 bg-red-50' : ''}`}
                          >
                            <p className="text-sm leading-relaxed">{message.message}</p>
                            <div className="flex items-center justify-between mt-1">
                              <div className="flex items-center gap-2">
                                <span className="text-xs opacity-70">{timestamp}</span>
                                {isOutgoing && (
                                  <div className="flex items-center gap-1">
                                    {message.error ? (
                                      <span className="text-red-300 text-xs font-bold">!</span>
                                    ) : message.pending ? (
                                      <span className="text-teal-200 text-xs animate-pulse">...</span>
                                    ) : message.read ? (
                                      <DoneAllIcon className="w-3 h-3 text-teal-200" />
                                    ) : (
                                      <CheckIcon className="w-3 h-3 text-teal-200" />
                                    )}
                                  </div>
                                )}
                              </div>
                              {isOutgoing && message._id && (
                                <div className="relative message-menu-container">
                                  <button
                                    onClick={() => setShowMessageMenu(showMessageMenu === message._id ? null : (message._id || null))}
                                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-1 hover:bg-white/20 rounded-full"
                                  >
                                    <MoreVertIcon className="w-4 h-4" />
                                  </button>
                                  {showMessageMenu === message._id && (
                                    <div className="absolute right-0 top-6 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10 min-w-[120px]">
                                      <button
                                        onClick={() => handleDeleteMessageClick(message._id!)}
                                        className="w-full px-3 py-2 text-left text-red-600 hover:bg-red-50 flex items-center gap-2 text-sm"
                                      >
                                        <DeleteIcon className="w-4 h-4" />
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
              </div>

              {/* Message Input */}
              <div className="bg-white border-t border-gray-200 p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white transition-all duration-200"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={loading || !newMessage.trim()}
                    className="p-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    <SendIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center bg-[#F4F5F7]">
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageIcon className="w-10 h-10 text-teal-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Select a conversation</h3>
                <p className="text-gray-500">Choose a student to start messaging</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Delete Chat Confirmation Dialog */}
      {showDeleteDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <DeleteIcon className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Delete Chat</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this chat? This action cannot be undone and will remove all messages in this conversation.
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowDeleteDialog(false)}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteChat}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Delete Chat
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Message Confirmation Dialog */}
      {showMessageDeleteDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <DeleteIcon className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Delete Message</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this message? This action cannot be undone.
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => {
                  setShowMessageDeleteDialog(false);
                  setMessageToDelete(null);
                }}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => messageToDelete && handleDeleteMessage(messageToDelete)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Delete Message
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Messages;
