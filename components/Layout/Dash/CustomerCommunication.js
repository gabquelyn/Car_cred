'use client'
import { useState } from 'react';

const CustomerCommunication = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'Buyer A',
      message: 'Hi, I have a question about the inspection report for vehicle ABC123.',
      date: '2023-06-01',
      read: true,
    },
    {
      id: 2,
      sender: 'Buyer B',
      message: 'Can you provide more details about the warranty coverage?',
      date: '2023-05-28',
      read: false,
    },
    // Add more messages here
  ]);

  const handleMarkAsRead = (id) => {
    setMessages(
      messages.map((message) =>
        message.id === id ? { ...message, read: true } : message
      )
    );
  };

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const newId = Math.max(...messages.map((message) => message.id)) + 1;
      const newMessageObj = {
        id: newId,
        sender: 'You',
        message: newMessage,
        date: new Date().toISOString().split('T')[0],
      };
      setMessages([...messages, newMessageObj]);
      setNewMessage('');
    }
  };
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'New Inquiry',
      message: 'You have received a new inquiry for vehicle ABC123.',
      read: false,
    },
    {
      id: 2,
      title: 'Message Received',
      message: 'You have a new message from Buyer B.',
      read: true,
    },
    // Add more notifications here
  ]);

  const handleNotificationMarkAsRead = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };
  return (
    <div>
      {/* Messages */}
      <section className='bg-white-500 p-6 rounded-lg'>
        <h2 className="text-lg font-semibold mb-4">Customer Messages</h2>
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-center justify-between py-2 border-b ${
              !message.read && 'bg-blue-50'
            }`}
          >
            <div>
              <span className="font-semibold">From:</span> {message.sender}
            </div>
            <div>{message.message}</div>
            <div className="ml-auto text-gray-500 text-sm">{message.date}</div>
            {!message.read && (
              <button
                className="text-blue-500 hover:text-blue-700"
                onClick={() => handleMarkAsRead(message.id)}
              >
                Mark as Read
              </button>
            )}
          </div>
        ))}
      </section>

      {/* Messaging System */}
      <section className="mt-8 bg-white-500 p-6 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Messaging System</h2>
        {/* Implement messaging system UI and functionality here */}
        <textarea
          className="border border-gray-300 p-2 mb-2 w-full"
          rows="4"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        ></textarea>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          onClick={handleSendMessage}
        >
          Send Message
        </button>
      </section>

      {/* Notifications */}
      <section className="mt-8 bg-white-500 p-6 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Notifications</h2>
        {/* Implement notifications UI and functionality here */}
        {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`flex items-center justify-between py-2 border-b ${
            !notification.read && 'bg-blue-50'
          }`}
        >
          <div>
            <span className="font-semibold">{notification.title}:</span>{' '}
            {notification.message}
          </div>
          {!notification.read && (
            <button
              className="text-blue-500 hover:text-blue-700"
              onClick={() => handleNotificationMarkAsRead(notification.id)}
            >
              Mark as Read
            </button>
          )}
        </div>
      ))}
      </section>
    </div>
  );
};

export default CustomerCommunication;
