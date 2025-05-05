import {useState, createContext } from "react";

export const MyContext=createContext();

export const Myprovider = ({children})=>{
    const [user,setUser]=useState("");
    const [cpassword,setCpassword]=useState("");
    return(
        <MyContext.Provider value={{user,setUser,cpassword,setCpassword}}>
            {children}
        </MyContext.Provider>
    )
}

