import React from "react";
import decodeTokenData from "../utils/decodeTokenData";
import { useState } from "react";
import { login, signUpApi } from "../../http/api";
import { useHistory } from "react-router-dom";

// 1 Creamos el contexto y exportamos para usar el hook
export const AuthContext = React.createContext();
const AuthContextProvider = AuthContext.Provider;

// 2 Recuperamos el token del localStorage
const token = localStorage.getItem("token");
const tokenObject = decodeTokenData(token);

// 3 Creamos un custom provider
export function AuthProvider(props) {
  const [userData, setUserData] = useState(tokenObject);
  const [isUserLogged, setIsUserLogged] = useState(!!tokenObject);
  const history = useHistory();

  // (iniciar sesión) Método para hacer log in desde los componentes
  const signIn = async (email, contraseña) => {
    const loginData = await login(email, contraseña);
    localStorage.setItem("token", loginData);
    const tokenObject = decodeTokenData(loginData);
    setUserData(tokenObject);
    setIsUserLogged(true);
    history.push("/");
  };

  // (cerrar sesión) Método que borra las credenciales del localStorage y del state
  const signOut = () => {
    localStorage.removeItem("token");
    history.push("/acceder");
    setUserData(null);
    setIsUserLogged(false);
  };

  // (registrarse) Método para registrarse
  const signUp = async (data) => {
    const signUpData = await signUpApi(data);
    console.log(signUpData);
    history.push("/acceder");
  };

  // Método para subir un anuncio

  // 4 devolvemos el provider metiéndole dentro los children
  return (
    <AuthContextProvider
      value={{ userData, signIn, signOut, signUp, isUserLogged }}
    >
      {props.children}
    </AuthContextProvider>
  );
}
