import { createContext, useContext, useState } from "react";

type UserType = {
  email: string;
  password:string;
  
};

type ContextType = {
  userData: UserType;
  setUserData: React.Dispatch<React.SetStateAction<UserType>>;
};

// Default values
 const UserContext = createContext<ContextType>({
  userData: { email: "",password:""},
  setUserData: () => {}
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [userData, setUserData] = useState<UserType>({
    email: "",
    password:"",
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

// ✅ This was commented — UNCOMMENT IT to allow useUser() in other files
export const useUser = () => useContext(UserContext);
