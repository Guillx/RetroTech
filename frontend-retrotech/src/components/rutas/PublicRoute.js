// función para no dejar entrar en x páginas a usuarios que están loggeados
// por ejemplo, un usuario loggeado no podría entrar en la página de loggin

import { Redirect } from "react-router-dom";
import useAuth from "../../shared/hooks/useAuth";

export default function PublicRoute({ children }) {
  const { isUserLogged } = useAuth();
  return <>{!isUserLogged ? children : <Redirect to="/perfil"></Redirect>}</>;
}
