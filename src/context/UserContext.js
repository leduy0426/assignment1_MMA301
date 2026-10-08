import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

const initialUserData = {
  name: 'Lê Duy (Sigma)',
  title: 'Sigma Mobile Developer | SE1990',
  studentId: 'HE194188',
  email: 'leduy0426@gmail.com',
  phone: '0987 654 321',
  avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop',
  bio: 'Sigma Mobile App Developer (HE194188 - SE1990). Tập trung làm việc độc lập, xây dựng ứng dụng chất lượng đỉnh cao.',
  location: 'Việt Nam',
  skills: ['React Native', 'Expo', 'JavaScript', 'TypeScript', 'Node.js', 'Git', 'Sigma Style'],
  stats: {
    projects: 99,
    followers: '99k',
    rating: '5.0★',
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
