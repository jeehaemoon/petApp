import React, { useState, useEffect, createContext } from "react";

import { useHistory } from "react-router-dom";

const { v4: uuidv4 } = require("uuid");

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const userToken = localStorage.getItem("token");

  const [token, setToken] = useState(userToken);
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    setToken(userToken);
  }, [token]);

  return (
    <UserContext.Provider value={{ setToken, token, setUser, user }}>
      {children}
    </UserContext.Provider>
  );
};