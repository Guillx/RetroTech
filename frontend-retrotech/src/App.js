import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "./components/pagina/Header";
import AdminRoute from "./components/rutas/AdminRoute";

import PrivateRoute from "./components/rutas/PrivateRoute";
import PublicRoute from "./components/rutas/PublicRoute";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import ListaDeCategorias from "./pages/ListaDeCategorias";
import ListaAnunciosCategoria from "./pages/ListaAnunciosCategoria";
import Anuncio from "./pages/Anuncio";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import Registro from "./pages/Registro";
import SubirAnuncio from "./pages/SubirAnuncio";

import { AuthProvider } from "./shared/context/authContext";
import MisAnuncios from "./components/pagina/MisAnuncios";
import MisSolicitudes from "./components/pagina/MisSolicitudes";
import MisReservas from "./components/pagina/MisReservas";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/acceder">
            <PublicRoute>
              <Login></Login>
            </PublicRoute>
          </Route>

          <Route exact path="/registro">
            <PublicRoute>
              <Registro></Registro>
            </PublicRoute>
          </Route>

          <Route exact path="/comprar">
            <ListaDeCategorias></ListaDeCategorias>
          </Route>

          <Route exact path="/comprar/:idCategoria">
            <ListaAnunciosCategoria></ListaAnunciosCategoria>
          </Route>

          <Route exact path="/comprar/:idCategoria/:idAnuncio">
            <Anuncio></Anuncio>
          </Route>

          <Route exact path="/subir">
            <PrivateRoute>
              <SubirAnuncio></SubirAnuncio>
            </PrivateRoute>
          </Route>

          <Route path="/admin">
            <AdminRoute>
              <Admin></Admin>
            </AdminRoute>
          </Route>

          <Route exact path="/perfil">
            <PrivateRoute>
              <Perfil></Perfil>
            </PrivateRoute>
          </Route>

          <Route exact path="/mis-anuncios">
            <PrivateRoute>
              <MisAnuncios></MisAnuncios>
            </PrivateRoute>
          </Route>

          <Route exact path="/mis-solicitudes">
            <PrivateRoute>
              <MisSolicitudes></MisSolicitudes>
            </PrivateRoute>
          </Route>

          <Route exact path="/mis-reservas">
            <PrivateRoute>
              <MisReservas></MisReservas>
            </PrivateRoute>
          </Route>
        </Switch>
        {/* <Footer></Footer> */}
      </AuthProvider>
    </Router>
  );
}

export default App;
