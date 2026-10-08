import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

const initialUserData = {
  name: 'Nguyễn Văn A',
  title: 'Fullstack Mobile Developer',
  email: 'nguyenvana@example.com',
  phone: '0987 654 321',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&auto=format&fit=crop',
  bio: 'Đam mê lập trình di động React Native & Flutter. Đang học tập môn MMA301 tại FPT University.',
  location: 'TP. Hồ Chí Minh, Việt Nam',
  skills: ['React Native', 'Expo', 'JavaScript', 'TypeScript', 'Node.js'],
  stats: {
    projects: 12,
    followers: '1.2k',
    rating: '4.9★',
  },
};

export const UserProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState(initialUserData);

  const updateProfile = (updatedData) => {
    setUserProfile((prev) => ({
      ...prev,
      ...updatedData,
    }));
  };

  return (
    <UserContext.Provider value={{ userProfile, updateProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
