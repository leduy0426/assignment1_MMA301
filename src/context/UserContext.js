import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

const initialUserData = {
  name: 'Lê Duy',
  title: 'Mobile App Developer | SE1990',
  studentId: 'HE194188',
  email: 'leduy0426@gmail.com',
  phone: '0987 654 321',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&auto=format&fit=crop',
  bio: 'Sinh viên FPT University (MSSV: HE194188 - Lớp SE1990). Đam mê lập trình di động React Native, Expo và xây dựng sản phẩm chất lượng cao.',
  location: 'Việt Nam',
  skills: ['React Native', 'Expo', 'JavaScript', 'TypeScript', 'Node.js', 'Git'],
  stats: {
    projects: 15,
    followers: '1.5k',
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
