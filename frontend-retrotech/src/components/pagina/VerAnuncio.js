import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnuncio, reserveProduct } from "../../http/api";
import { useForm } from "react-hook-form";
import useAuth from "../../shared/hooks/useAuth";

import fotoanunciogrande from "../../assets/images/atari2600.jpg";
import "../../assets/css/VerAnuncio.css";

import swal from "sweetalert";

export default function VerAnuncio() {
  const { idCategoria, idAnuncio } = useParams();
  const [productoEspecifico, setProductoEspecifico] = useState([]);
  const { handleSubmit, register } = useForm();
  // const { userData } = useAuth();

  const onSubmit = async (mensajeCompra) => {
    await reserveProduct(idCategoria, idAnuncio, mensajeCompra);
    console.log(mensajeCompra);
    swal(
      "Solicitud enviada",
      "La solicitud ha sido enviada al usuario vendedor"
    );
  };

  useEffect(() => {
    getAnuncio(idCategoria, idAnuncio).then((value) => {
      setProductoEspecifico(value[0]);
    });
  }, [idCategoria, idAnuncio]);
  console.log(productoEspecifico);

  return (
    <div className="body-ficha-anuncio">
      <div className="anuncio-container" key={productoEspecifico.idAnuncio}>
        <div className="top-veranuncio">
          <p className="username-veranuncio">
            <i class="fas fa-user-circle"></i> {productoEspecifico.userName}
          </p>
          <p className="location-veranuncio">
            <i class="fas fa-map-marker-alt"></i>
            {productoEspecifico.localidad}, {productoEspecifico.provincia}
          </p>
        </div>

        <img src={fotoanunciogrande} className="img-veranuncio" alt=""></img>

        <h1 className="titulo-veranuncio">{productoEspecifico.titulo}</h1>

        <p className="precio-veranuncio">{productoEspecifico.precio} €</p>
        <p className="descripcion-veranuncio">
          {productoEspecifico.descripcion}
        </p>

        <p className="fecha-veranuncio">
          {productoEspecifico.fechaPublicacion}
        </p>

        <div className="solicitud-reserva-container">
          <form
            className="form-solicitud-reserva"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label
              className="label-form-solicitud-reserva"
              htmlFor="mensajeCompra"
            >
              Mensaje de Propuesta:
            </label>
            <textarea
              type="text"
              id="mensajeCompra"
              name="mensajeCompra"
              placeholder="Escribe un mensaje al vendedor..."
              ref={register()}
            ></textarea>
            <button className="btn-solicitar-reserva" type="submit">
              Solicitar reserva
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
