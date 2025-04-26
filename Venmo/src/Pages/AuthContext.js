import  {createContext,useState} from "react";

export const AuthContext =  createContext();
export const AuthProvider =({children})=>{
    const [contemail , setContEmail] = useState("");
     return(
        <AuthContext.Provider value={{contemail,setContEmail}}>
            {children}
        </AuthContext.Provider>
     )
}