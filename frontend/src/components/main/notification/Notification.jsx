import React, { useState } from "react";
import { MdDelete, MdDateRange } from "react-icons/md";

function Notification() {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "You have a new message", date: new Date() },
    { id: 2, message: "Reminder: Meeting at 10 AM", date: new Date() },
    { id: 3, message: "Your subscription has expired", date: new Date() },
  ]);

  const handleDeleteNotification = (id) => {
    const updatedNotifications = notifications.filter(
      (notification) => notification.id !== id
    );
    setNotifications(updatedNotifications);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Notifications</h1>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <ul className="divide-y divide-gray-200">
          {notifications.map((notification) => (
            <li key={notification.id}>
              <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <div className="text-sm leading-5 font-medium text-indigo-600 truncate">
                      {notification.message}
                    </div>
                    <div className="mt-2 flex items-center gap-1 text-sm leading-5 text-gray-500">
                      <MdDateRange />
                      <span>{notification.date.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleDeleteNotification(notification.id)}
                  className="text-red-500 focus:outline-none focus:shadow-outline"
                >
                  <MdDelete size={24} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Notification;
