import {useState,createContext} from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({children}){
    const [isAuth,setisAuth] = useState(false);
    
    const loginUser = (Toast) => {
        <Toast/>
        setisAuth(true)
    }

    return <AuthContext.Provider value={{isAuth,loginUser}}>
        {children}
    </AuthContext.Provider>
}