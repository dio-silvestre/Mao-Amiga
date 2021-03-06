import { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { api } from "../../services/api";
import jwtDecode from "jwt-decode";
import toast from "react-hot-toast";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const localToken = localStorage.getItem("authToken") || "";
  const decodedToken = localToken === "" ? "" : jwtDecode(localToken);
  const userID = decodedToken.sub;

  const history = useHistory();
  const [myData, setMyData] = useState({});

  const [isLogged, setIsLogged] = useState(
    localStorage.getItem("authToken") ? true : false
  );

  useEffect(() => {
    const token = localStorage.getItem("authToken") || "";

    if (!!token) {
      api
        .get(`/users/${userID}`)
        .then((response) => {
          setMyData(response.data);
        })
        .catch((error) => console.error(error));

      return setIsLogged(true);
    }
  }, [isLogged, userID]);

  const signIn = (data) => {
    api
      .post("/signin", data)
      .then((response) => {
        localStorage.setItem("authToken", response.data.accessToken);
        setIsLogged(true);
        toast.success("Sucesso ao fazer login", {
          style: {
            border: "2px solid var(--color-success)",
            padding: "16px",
            color: "var(--color-success)",
            fontSize: "1.4rem",
          },
          iconTheme: {
            primary: "var(--color-success)",
            secondary: "white",
          },
        });
        history.push("/dashboard");
      })
      .catch((error) =>
        toast.error("E-mail ou senha incorretas", {
          style: {
            border: "2px solid var(--color-error)",
            padding: "16px",
            color: "var(--color-error)",
            fontSize: "1.4rem",
          },
          iconTheme: {
            primary: "var(--color-error)",
            secondary: "white",
          },
        })
      );
  };

  const signOut = () => {
    localStorage.clear();
    history.push("/login");
    return window.location.reload();
  };

  return (
    <AuthContext.Provider value={{ myData, isLogged, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
