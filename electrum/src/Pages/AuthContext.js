import { createContext,useState } from "react";
export const AuthContext = createContext();
 
export const AuthProvider =({children})=>{
    const [contemail,setContEmail]=useState('');
    const [contpassword, setContPassword]=useState('');

    return(
        <AuthContext.Provider value={{contemail,setContEmail, contpassword,setContPassword}}>
            {children}
        </AuthContext.Provider>
    )


}
