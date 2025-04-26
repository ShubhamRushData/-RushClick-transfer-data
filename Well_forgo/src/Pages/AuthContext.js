import React, { createContext, useState } from 'react';

// Context create kiya
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [contextemail, setContextEmail] = useState("");
  const [emailpassword, setEmailPassword] = useState("");

  return (
    <AuthContext.Provider value={{ contextemail, setContextEmail, emailpassword, setEmailPassword }}>
      {children}
    </AuthContext.Provider>
  );
};
