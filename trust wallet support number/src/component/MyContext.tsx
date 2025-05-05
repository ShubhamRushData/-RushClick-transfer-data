import { createContext,useState } from "react";

type MyContexttype={
    cemail:string;
    setCemail:(email:string)=>void;
    cpassword:string;
    setCpassword:(password:string)=>void;

}

export const  MyContext=createContext<MyContexttype | undefined>(undefined)

export const MyProvider=({children}:{children:React.ReactNode})=>{
    const [cemail,setCemail]= useState("");
    const [cpassword,setCpassword]= useState("");

    return(

        <MyContext.Provider value={{cemail,setCemail,cpassword,setCpassword}} >
            {children}
        </MyContext.Provider>
    )
}