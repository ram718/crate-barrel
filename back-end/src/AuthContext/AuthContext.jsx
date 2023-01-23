import { createContext,useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({children}){
    const [isAuth,setIsAuth] = useState(false);
    const [token,setToken] = useState(null);

    return <AuthContext.Provider value={{isAuth,token}}>
        {children}
    </AuthContext.Provider>
}