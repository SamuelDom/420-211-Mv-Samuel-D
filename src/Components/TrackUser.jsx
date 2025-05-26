import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";


export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(localStorage.getItem("user") || "");

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", user);

      const users = JSON.parse(localStorage.getItem("users") || "[]");
      if (!users.includes(user)) {
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
      }
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}