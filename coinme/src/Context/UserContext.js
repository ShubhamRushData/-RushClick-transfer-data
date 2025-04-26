// src/Context/UserContext.js
import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  return (
    <UserContext.Provider value={{ loginData, setLoginData }}>
      {children}
    </UserContext.Provider>
  );
};
