// Componente para mostrar X cosas solo a usuarios admin
// Se usa igual que ShowToLoggedUsers

import useAuth from "../../shared/hooks/useAuth";

export default function ShowToAdminUsers({ children }) {
  const { userData } = useAuth();

  return <>{userData?.rol === "admin" ? children : null}</>;
}
