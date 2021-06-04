// Función para permitir rutas solo a usuarios logeados
// poner <PrivateRoute>(children que quieras mostrar a usuarios logeados)</PrivateRoute>
// Si no está logeado al acceder lo manda al login

import { Redirect } from "react-router-dom";
import useAuth from "../../shared/hooks/useAuth";

export default function PrivateRoute({ children }) {
  const { isUserLogged } = useAuth();
  return <>{isUserLogged ? children : <Redirect to="/acceder"></Redirect>}</>;
}
