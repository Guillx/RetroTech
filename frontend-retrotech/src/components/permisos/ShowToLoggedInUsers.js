// Componente para mostrar una información u otra en función de si el user está loggeado o no
// Si no está loggeado muestra solo X contenido
// Si está loggeado muestra + contenido
// poner el contenido que queremos mostrar solo a los loggeados en las etiquetas <ShowToLoggedInUsers>

import useAuth from "../shared/hooks/useAuth";

export default function ShowToLoggedInUsers({ children }) {
  const { isUserLogged } = useAuth();

  return <> {isUserLogged ? children : null} </>;
}
