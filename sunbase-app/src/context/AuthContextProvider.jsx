import React, { useState, createContext } from 'react'
export const authContext = createContext();

export default function AuthContextProvider({children}) {
  const [isAuth, setisAuth] = useState(false);
  const [token, setToken] = useState("");

  let login = (str) => {
    setisAuth(true);
    setToken(str);
  }

  let logout = () => {
    setisAuth(false);
    setToken("");
  };

  return (
    <authContext.Provider value={{isAuth,setisAuth,login,logout,token,setToken}}>
      {children}
    </authContext.Provider>
  )
}
