import { useState, createContext } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [isAuth, setisAuth] = useState(false);

  const loginUser = () => {
    setisAuth(true);
  };

  const logoutUser = () => {
    setisAuth(false);
  };
  // console.log(isAuth)

  return (
    <AuthContext.Provider value={{ isAuth, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
}
