import React, { useState, useEffect, useRef, useCallback } from 'react';
import { io, Socket } from 'socket.io-client';
import axios from 'axios';
import { baseUrl } from '@/lib/baseUrl';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

interface Message {
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

interface ChatBoxProps {
  requestId: string;
  userType: 'student' | 'counselor';
  userEmail?: string;
  userName?: string;
  studentName?: string;
  receiverName?: string;
  onClose: () => void;
}

const ChatBox: React.FC<ChatBoxProps> = ({
  requestId,
  userType,
  userEmail = '',
  userName = '',
  studentName = '',
  receiverName = '',
  onClose
}) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [loading, setLoading] = useState(true);
  const [connected, setConnected] = useState(false);
  const [reconnecting, setReconnecting] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const socketRef = useRef<Socket | null>(null);
  const pendingMessagesRef = useRef<Set<string>>(new Set());
  
  // Get user information from localStorage
  const getUserData = () => {
    if (typeof window === 'undefined') return { name: '', email: '', token: '' };
    
    try {
      if (userType === 'student') {
        const userData = localStorage.getItem('user');
        if (userData) {
          const user = JSON.parse(userData);
          return { 
            name: user.name || '', 
            email: user.email || '',
            token: user.token || ''
          };
        }
      } else {
        if (userEmail) {
          return {
            name: userName || '',
            email: userEmail,
            token: localStorage.getItem('counselorToken') || ''
          };
        }
        
        const counselorData = localStorage.getItem('counselorData');
        if (counselorData) {
          const counselor = JSON.parse(counselorData);
          
          
          const email = 
            counselor.email || 
            counselor.counselorEmail || 
            counselor.emailAddress ||
            '';
            
          if (!email) {
            console.warn('No email found in counselor data:', counselor);
            try {
              const token = localStorage.getItem('counselorToken');
              if (token) {
                return {
                  name: counselor.name || counselor.counselorName || '',
                  email: 'counselor@email.placeholder',
                  token
                };
              }
            } catch (e) {
              console.error('Failed to extract data from token:', e);
            }
          }
          
          return { 
            name: counselor.name || counselor.counselorName || '', 
            email: email,
            token: localStorage.getItem('counselorToken') || ''
          };
        }
      }
    } catch (err) {
      console.error('Error parsing user data:', err);
    }
    
    if (userType === 'counselor') {
      return { 
        name: 'Counselor', 
        email: 'counselor@email.placeholder',
        token: localStorage.getItem('counselorToken') || ''
      };
    }
    
    return { name: '', email: '', token: '' };
  };
  
  const userData = getUserData();
  const actualUserName = userName || userData.name;
  const actualUserEmail = userEmail || userData.email;
  
  useEffect(() => {
    if (userType === 'counselor' && (!actualUserEmail || actualUserEmail === '')) {
      console.warn('No counselor email found, using placeholder');
    }
  }, [actualUserEmail, userType]);
  
  const actualReceiverName = receiverName || (userType === 'counselor' ? studentName : 'Counselor');

  const getAuthToken = useCallback(() => {
    if (userType === 'student') {
      const userData = localStorage.getItem('user');
      if (userData) {
        const user = JSON.parse(userData);
        return user.token && !user.token.startsWith('Bearer ')
          ? `Bearer ${user.token}`
          : user.token;
      }
    } else {
      const token = localStorage.getItem('counselorToken');
      if (token) {
        return token.startsWith('Bearer ') ? token : `Bearer ${token}`;
      }
    }
    return null;
  }, [userType]);

  const fetchChatHistory = useCallback(async () => {
    try {
      setLoading(true);
      const token = getAuthToken();

      if (!token) {
        toast.error('Authentication token not found. Please login again.');
        onClose();
        return;
      }

      const response = await axios.get(`${baseUrl}/api/chat/${requestId}`, {
        headers: {
          Authorization: token,
        },
      });

      if (response.data && response.data.data) {
        const sortedMessages = response.data.data.sort(
          (a: Message, b: Message) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );

        setMessages((prevMessages) => {
          const filteredPendingMessages = prevMessages.filter(
            (msg) =>
              msg.pending &&
              !sortedMessages.some(
                (sm: Message) => sm.clientMessageId === msg.clientMessageId
              )
          );

          pendingMessagesRef.current = new Set(
            filteredPendingMessages.map((msg) => msg.clientMessageId || '')
          );

          return [...sortedMessages, ...filteredPendingMessages];
        });
      } else {
        setMessages([]);
      }
    } catch (error) {
      console.error('Error fetching chat history:', error);
      toast.error('Failed to load chat history. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [getAuthToken, onClose, requestId]);

  useEffect(() => {
    const newSocket = io(baseUrl, {
      auth: { token: getAuthToken() },
      query: {
        userId: actualUserEmail,
        userType: userType,
      },
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
      timeout: 20000,
    });

    setSocket(newSocket);
    socketRef.current = newSocket;

    newSocket.on('connect', () => {
      console.log('Socket connected:', newSocket.id);
      setConnected(true);
      setReconnecting(false);

      newSocket.emit('join_room', requestId);

      fetchChatHistory();
    });

    newSocket.on('connect_error', (err) => {
      console.error('Socket connection error:', err);
      setConnected(false);
      toast.error('Connection error. Trying to reconnect...');
    });

    newSocket.on('reconnect_attempt', () => {
      setReconnecting(true);
    });

    newSocket.on('reconnect_failed', () => {
      setReconnecting(false);
      toast.error('Failed to reconnect. Please refresh the page.');
    });

    newSocket.on('disconnect', (reason) => {
      console.log('Socket disconnected:', reason);
      setConnected(false);

      if (reason === 'io server disconnect') {
        toast.error('Disconnected from server. Please refresh the page.');
      }
    });

    newSocket.on('joined_room', (data) => {
      console.log('Successfully joined room:', data.requestId);

      newSocket.emit('mark_read', {
        consultationRequest: requestId,
        userType: userType,
      });
    });

    return () => {
      console.log('Cleaning up socket connection');
      newSocket.disconnect();
      setSocket(null);
      socketRef.current = null;
    };
  }, [requestId, userType, actualUserEmail, getAuthToken, fetchChatHistory]);

  useEffect(() => {
    if (!socket) return;
    
    socket.on('receive_message', (newMessage: Message) => {
      console.log('Received message:', newMessage);
      
      setMessages((prevMessages) => {
        const isExisting = prevMessages.some(msg => 
          (msg._id && msg._id === newMessage._id) || 
          (msg.clientMessageId && msg.clientMessageId === newMessage.clientMessageId)
        );
        
        if (isExisting) {
          return prevMessages.map(msg => {
            if (msg.clientMessageId === newMessage.clientMessageId) {
              pendingMessagesRef.current.delete(msg.clientMessageId || '');
              return { ...newMessage, pending: false };
            }
            return msg;
          });
        }
        
        if (newMessage.senderType !== userType && socket) {
          socket.emit('mark_read', {
            consultationRequest: requestId,
            userType: userType
          });
        }
        
        return [...prevMessages, newMessage];
      });
    });
    
    socket.on('message_delivered', (data: { clientMessageId: string, messageId: string, timestamp: Date }) => {
      console.log('Message delivered:', data);
      
      setMessages(prevMessages => prevMessages.map(msg => {
        if (msg.clientMessageId === data.clientMessageId) {
          pendingMessagesRef.current.delete(msg.clientMessageId || '');
          return { 
            ...msg, 
            _id: data.messageId,
            createdAt: data.timestamp,
            delivered: true,
            pending: false
          };
        }
        return msg;
      }));
    });
    
    socket.on('message_error', (data: { clientMessageId: string, error: string }) => {
      console.error('Message error:', data);
      
      setMessages(prevMessages => prevMessages.map(msg => {
        if (msg.clientMessageId === data.clientMessageId) {
          pendingMessagesRef.current.delete(msg.clientMessageId || '');
          return { ...msg, error: true, pending: false };
        }
        return msg;
      }));
      
      toast.error(`Failed to send message: ${data.error}`);
    });
    
    socket.on('messages_read', (data: { consultationRequest: string, userType: string }) => {
      if (data.userType !== userType) {
        setMessages(prevMessages => prevMessages.map(msg => {
          if (msg.senderType === userType && !msg.read) {
            return { ...msg, read: true };
          }
          return msg;
        }));
      }
    });

    return () => {
      socket.off('receive_message');
      socket.off('message_delivered');
      socket.off('message_error');
      socket.off('messages_read');
    };
  }, [socket, requestId, userType]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (connected && pendingMessagesRef.current.size > 0 && socketRef.current) {
      console.log('Retrying pending messages...');
      
      setMessages(prevMessages => {
        const updatedMessages = [...prevMessages];
        
        prevMessages.forEach((msg, index) => {
          if (msg.pending && msg.clientMessageId && pendingMessagesRef.current.has(msg.clientMessageId)) {
            socketRef.current?.emit('send_message', {
              senderType: msg.senderType,
              senderEmail: msg.senderEmail,
              senderName: msg.senderName,
              consultationRequest: msg.consultationRequest,
              message: msg.message,
              clientMessageId: msg.clientMessageId
            });
          }
        });
        
        return updatedMessages;
      });
    }
  }, [connected]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim() || !socketRef.current) {
      return;
    }
    
    const emailToUse = actualUserEmail || (userType === 'counselor' ? 'counselor@email.placeholder' : '');
    
    if (!emailToUse) {
      toast.error('No valid email found for sender. Please log in again.');
      return;
    }
    
    const clientMessageId = uuidv4();
    
    const newMessage: Message = {
      senderType: userType,
      senderEmail: emailToUse,
      senderName: actualUserName || (userType === 'counselor' ? 'Counselor' : 'Student'),
      consultationRequest: requestId,
      message: message.trim(),
      createdAt: new Date(),
      clientMessageId,
      pending: true
    };
    
    
    pendingMessagesRef.current.add(clientMessageId);
    
    setMessages(prevMessages => [...prevMessages, newMessage]);
    
    setMessage('');
    
    socketRef.current.emit('send_message', {
      senderType: userType,
      senderEmail: emailToUse,
      senderName: actualUserName || (userType === 'counselor' ? 'Counselor' : 'Student'),
      consultationRequest: requestId,
      message: message.trim(),
      clientMessageId
    });
    
    setTimeout(() => {
      if (pendingMessagesRef.current.has(clientMessageId)) {
        setMessages(prevMessages => prevMessages.map(msg => {
          if (msg.clientMessageId === clientMessageId) {
            return { ...msg, pending: false, error: true };
          }
          return msg;
        }));
        
        toast.warning('Message may not have been delivered. Please try again.');
      }
    }, 5000);
  };

  const handleRetryMessage = (clientMessageId: string) => {
    const messageToRetry = messages.find(msg => msg.clientMessageId === clientMessageId);
    
    if (!messageToRetry || !socketRef.current) return;
    
    setMessages(prevMessages => prevMessages.map(msg => {
      if (msg.clientMessageId === clientMessageId) {
        return { ...msg, pending: true, error: false };
      }
      return msg;
    }));
    
    pendingMessagesRef.current.add(clientMessageId);
    
    socketRef.current.emit('send_message', {
      senderType: messageToRetry.senderType,
      senderEmail: messageToRetry.senderEmail || (userType === 'counselor' ? 'counselor@email.placeholder' : ''),
      senderName: messageToRetry.senderName,
      consultationRequest: messageToRetry.consultationRequest,
      message: messageToRetry.message,
      clientMessageId
    });
  };

  const refreshChat = () => {
    fetchChatHistory();
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getAvatarColor = (name: string) => {
    const colors = [
      'bg-purple-600 dark:bg-purple-500', 
      'bg-indigo-600 dark:bg-indigo-500', 
      'bg-blue-600 dark:bg-blue-500',
      'bg-teal-600 dark:bg-teal-500', 
      'bg-emerald-600 dark:bg-emerald-500', 
      'bg-amber-600 dark:bg-amber-500',
      'bg-rose-600 dark:bg-rose-500', 
      'bg-cyan-600 dark:bg-cyan-500', 
      'bg-violet-600 dark:bg-violet-500'
    ];
    
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    return colors[Math.abs(hash) % colors.length];
  };

  const formatMessageTime = (date: Date) => {
    const now = new Date();
    const messageDate = new Date(date);
    const yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);
    
    const isToday = messageDate.toDateString() === now.toDateString();
    const isYesterday = messageDate.toDateString() === yesterday.toDateString();
    
    if (isToday) {
      return `Today, ${messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    } else if (isYesterday) {
      return `Yesterday, ${messageDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    } else {
      return messageDate.toLocaleDateString([], { 
        month: 'short', 
        day: 'numeric' 
      }) + ', ' + messageDate.toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit' 
      });
    }
  };

  const shouldShowAvatar = (index: number, message: Message) => {
    if (index === 0) return true;
    
    const prevMessage = messages[index - 1];
    if (prevMessage.senderType !== message.senderType) return true;
    
    const timeDiff = new Date(message.createdAt).getTime() - new Date(prevMessage.createdAt).getTime();
    if (timeDiff > 5 * 60 * 1000) return true;
    
    return false;
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 dark:bg-black/80 backdrop-blur-sm z-50 transition-all duration-300">
      <div 
        className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-lg mx-4 flex flex-col overflow-hidden animate-scale-in" 
        style={{ height: '85vh', maxHeight: '800px' }}
      >
        {/* Header - Using neutral colors with good contrast in both modes */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-800 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 text-gray-900 dark:text-white">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full ${getAvatarColor(actualReceiverName)} text-white font-bold text-lg shadow-md`}>
                {getInitials(actualReceiverName)}
              </div>
              <div>
                <h2 className="font-bold text-lg text-gray-900 dark:text-white">{actualReceiverName}</h2>
                <div className="flex items-center text-xs text-gray-600 dark:text-gray-300">
                  {connected ? (
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-1.5 animate-pulse"></span>
                      Online
                    </span>
                  ) : reconnecting ? (
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mr-1.5"></span>
                      Reconnecting...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-rose-500 rounded-full mr-1.5"></span>
                      Offline
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={refreshChat}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors duration-200 flex items-center justify-center"
                title="Refresh messages"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors duration-200 flex items-center justify-center"
                title="Close chat"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Message list - Using neutral background colors with subtle pattern */}
        <div 
          className="p-4 flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-950" 
          style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\' viewBox=\'0 0 40 40\'%3E%3Cg fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            backgroundAttachment: 'fixed' 
          }}
          ref={chatContainerRef}
        >
          {loading ? (
            <div className="flex flex-col justify-center items-center h-full">
              <div className="w-16 h-16 border-t-4 border-b-4 border-indigo-500 dark:border-indigo-400 rounded-full animate-spin"></div>
              <p className="mt-4 text-gray-500 dark:text-gray-400">Loading messages...</p>
            </div>
          ) : messages.length === 0 ? (
            <div className="flex flex-col justify-center items-center h-full text-center">
              <div className="w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4 shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <p className="text-center text-gray-700 dark:text-gray-300 text-lg font-medium">
                No messages yet
              </p>
              <p className="text-gray-500 dark:text-gray-400 mt-1">
                Start the conversation by sending a message!
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {messages.map((msg, index) => {
                const isUser = msg.senderType === userType;
                const showAvatar = shouldShowAvatar(index, msg);
                const showTime = index === messages.length - 1 || 
                                shouldShowAvatar(index + 1, messages[index + 1]);
                
                return (
                  <div key={msg._id || msg.clientMessageId || index}>
                    {/* Message container with optional avatar */}
                    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} items-end space-x-2 mb-1`}>
                      {/* Receiver avatar - only show on first message of a group */}
                      {!isUser && showAvatar && (
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full ${getAvatarColor(msg.senderName)} flex items-center justify-center text-white text-xs font-medium shadow-sm`}>
                          {getInitials(msg.senderName)}
                        </div>
                      )}
                      
                      {/* Spacer for when avatar isn't shown but we need alignment */}
                      {!isUser && !showAvatar && <div className="w-8 flex-shrink-0"></div>}
                      
                      {/* Message bubble - Using more neutral colors with good contrast in both modes */}
                      <div 
                        className={`max-w-[75%] px-4 py-2.5 rounded-2xl shadow-sm ${
                          isUser 
                            ? msg.error 
                              ? 'bg-rose-500 dark:bg-rose-600 text-white' 
                              : 'bg-indigo-600 dark:bg-indigo-500 text-white'
                            : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border border-gray-100 dark:border-gray-700'
                        } ${!showAvatar && !isUser ? 'rounded-tl-sm' : ''} ${!showAvatar && isUser ? 'rounded-tr-sm' : ''}`}
                      >
                        <p className="break-words">{msg.message}</p>
                        
                        {/* Message meta info: time + delivery status */}
                        <div className={`flex justify-end items-center mt-1 text-xs ${isUser ? 'text-indigo-100 dark:text-indigo-200' : 'text-gray-500 dark:text-gray-400'}`}>
                          <span className="mr-1 opacity-75">
                            {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                          
                          {isUser && (
                            <span className="ml-1">
                              {msg.pending ? (
                                <span title="Sending..." className="inline-block animate-pulse">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                </span>
                              ) : msg.error ? (
                                <button 
                                  onClick={() => handleRetryMessage(msg.clientMessageId || '')}
                                  title="Failed to send. Click to retry."
                                  className="text-rose-100 hover:text-white transition-colors flex items-center"
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                  </svg>
                                  Retry
                                </button>
                              ) : msg.read ? (
                                <span title="Read" className="text-indigo-100 dark:text-indigo-200">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"/>
                                  </svg>
                                </span>
                              ) : msg.delivered ? (
                                <span title="Delivered" className="text-indigo-100 dark:text-indigo-200">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41z"/>
                                  </svg>
                                </span>
                              ) : (
                                <span title="Sending..." className="inline-block animate-pulse">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                </span>
                              )}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {/* User avatar - only show on first message of a group */}
                      {isUser && showAvatar && (
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full ${getAvatarColor(actualUserName)} flex items-center justify-center text-white text-xs font-medium shadow-sm`}>
                          {getInitials(actualUserName)}
                        </div>
                      )}
                      
                      {/* Spacer when user avatar isn't shown */}
                      {isUser && !showAvatar && <div className="w-8 flex-shrink-0"></div>}
                    </div>
                    
                    {/* Timestamp between message groups - Using neutral colors */}
                    {showTime && (
                      <div className="text-center my-4">
                        <span className="inline-block py-1 px-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-medium shadow-sm">
                          {formatMessageTime(new Date(msg.createdAt))}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>
        
        {/* Message input form - Using neutral colors with good contrast */}
        <form 
          onSubmit={handleSendMessage} 
          className="p-3 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
        >
          <div className="flex items-center">
            <div className="relative flex-1">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={connected ? "Type a message..." : "Reconnecting..."}
                className="w-full px-4 py-3 pr-10 rounded-full border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
                disabled={!connected}
              />
              {message.trim() && (
                <button
                  type="button"
                  onClick={() => setMessage('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
            <button
              type="submit"
              className={`ml-2 p-3 rounded-full ${
                connected && message.trim() 
                  ? 'bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600' 
                  : 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed'
              } text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-indigo-400`}
              disabled={!connected || !message.trim()}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-5 w-5 ${connected && message.trim() ? 'transform rotate-90' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
          
          {/* Connection status indicator */}
          {!connected && (
            <div className="mt-2 text-center">
              <span className="text-xs text-rose-500 dark:text-rose-400 animate-pulse">
                {reconnecting ? 'Reconnecting to the server...' : 'Disconnected from the server'}
              </span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ChatBox;