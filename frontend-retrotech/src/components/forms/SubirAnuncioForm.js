import { useForm } from "react-hook-form";
import { uploadProduct } from "../../http/api";
import iconsubir from "../../assets/images/add.svg";
import "../../assets/css/SubirAnuncio.css";
import { Link, Redirect } from "react-router-dom";

import swal from "sweetalert";

export default function SubirAnuncioForm() {
  const { handleSubmit, register, errors } = useForm();
  const subeAnuncio = async (data) => {
    uploadProduct(data);
    console.log(data);
    swal(
      "¡Has subido un anuncio!",
      "Has publicado un anuncio. Ahora solo tienes que esperar a que alguien contacte contigo"
    );
  };

  return (
    <>
      <div className="body-subir">
        <div className="caja-subir">
          <img src={iconsubir} className="img-subir" alt=""></img>
          <h1 className="titulo-subir">Sube un anuncio</h1>

          <form onSubmit={handleSubmit(subeAnuncio)}>
            <div>
              <label htmlFor="titulo">Título</label>
              <input
                type="text"
                name="titulo"
                id="titulo"
                ref={register({
                  required: "Este campo es obligatorio",
                })}
              />
              {errors.titulo ? (
                <div className="error-forms-reg">{errors.titulo.message}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="nombre">Descripción</label>
              <input
                type="text"
                name="descripcion"
                id="descripcion"
                ref={register({
                  required: "Este campo es obligatorio",
                })}
              />
              {errors.descripcion ? (
                <div className="error-forms-reg">
                  {errors.descripcion.message}
                </div>
              ) : null}
            </div>
            <div>
              <label htmlFor="precio">Precio</label>
              <input
                type="price"
                name="precio"
                id="precio"
                ref={register({
                  required: "Este campo es obligatorio",
                })}
              />
              {errors.precio ? (
                <div className="error-forms-reg">{errors.precio.message}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="ciudad">Provincia</label>
              <select
                className="select-type"
                name="provincia"
                id="provincia"
                ref={register({
                  required: "Este campo es obligatorio",
                })}
              >
                <option value="acoruña">A Coruña</option>
                <option value="alava">Álava</option>
                <option value="albacete">Albacete</option>
                <option value="alicante">Alacant</option>
                <option value="almeria">Almería</option>
                <option value="asturias">Asturias</option>
                <option value="avila">Ávila</option>
                <option value="badajoz">Badajoz</option>
                <option value="barcelona">Barcelona</option>
                <option value="burgos">Burgos</option>
                <option value="caceres">Cáceres</option>
                <option value="cadiz">Cádiz</option>
                <option value="cantabria">Cantabria</option>
                <option value="castellon">Castelló</option>
                <option value="ceuta">Ceuta</option>
                <option value="ciudadreal">Ciudad Real</option>
                <option value="cordoba">Córdoba</option>
                <option value="cuenca">Cuenca</option>
                <option value="cuenca">Formentera</option>
                <option value="girona">Girona</option>
                <option value="granada">Granada</option>
                <option value="guadalajara">Guadalajara</option>
                <option value="guipuzcoa">Guipúzcoa</option>
                <option value="huelva">Huelva</option>
                <option value="huesca">Huesca</option>
                <option value="illesbalears">Ibiza</option>
                <option value="jaen">Jaén</option>
                <option value="larioja">La Rioja</option>
                <option value="laspalmas">Las Palmas de Gran Canaria</option>
                <option value="leon">León</option>
                <option value="lleida">Lleida</option>
                <option value="lugo">Lugo</option>
                <option value="madrid">Madrid</option>
                <option value="malaga">Málaga</option>
                <option value="cuenca">Mallorca</option>
                <option value="melilla">Melilla</option>
                <option value="cuenca">Menorca</option>
                <option value="murcia">Murcia</option>
                <option value="navarra">Navarra</option>
                <option value="ourense">Ourense</option>
                <option value="palencia">Palencia</option>
                <option value="pontevedra">Pontevedra</option>
                <option value="salamanca">Salamanca</option>
                <option value="cuenca">Santa Cruz de Tenerife</option>
                <option value="segovia">Segovia</option>
                <option value="sevilla">Sevilla</option>
                <option value="soria">Soria</option>
                <option value="tarragona">Tarragona</option>
                <option value="teruel">Teruel</option>
                <option value="toledo">Toledo</option>
                <option value="valencia">Valencia</option>
                <option value="valladolid">Valladolid</option>
                <option value="vizcaya">Vizcaya</option>
                <option value="zamora">Zamora</option>
                <option value="zaragoza">Zaragoza</option>
              </select>

              {errors.ciudad ? (
                <div className="error-forms-reg">{errors.ciudad.message}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="localidad">Localidad</label>
              <input
                type="country"
                name="localidad"
                id="localidad"
                ref={register({
                  required: "Este campo es obligatorio",
                })}
              />
              {errors.localidad ? (
                <div className="error-forms-reg">
                  {errors.localidad.message}
                </div>
              ) : null}
            </div>
            <div>
              <label htmlFor="idCategoria">Categoría</label>
              <select
                className="select-type"
                ref={register({ required: "Este campo es obligatorio" })}
                id="idCategoria"
                name="idCategoria"
              >
                <option value="1" selected>
                  Consolas y Videojuegos
                </option>
                <option value="2">Informática</option>
                <option value="3">Teléfonos</option>
                <option value="4">TV y Vídeo</option>
                <option value="5">Sonido</option>
              </select>
              {errors.idCategoria ? (
                <div className="error-forms-reg">
                  {errors.idCategoria.message}
                </div>
              ) : null}
            </div>
            <p>Añade fotos</p>
            <div className="fotos-subir">
              <input
                type="file"
                className="foto-input"
                name="foto1"
                id="foto1"
                ref={register()}
              />

              <input
                type="file"
                className="foto-input"
                name="foto2"
                id="foto2"
                ref={register()}
              />

              <input
                type="file"
                className="foto-input"
                name="foto3"
                id="foto3"
                ref={register()}
              />

              <input
                type="file"
                className="foto-input"
                name="foto4"
                id="foto4"
                ref={register()}
              />

              <input
                type="file"
                className="foto-input"
                name="foto5"
                id="foto5"
                ref={register()}
              />
            </div>
            <div className="btns-subir">
              <Link to="/" className="link-subir">
                Cancelar
              </Link>
              <button type="submit" className="btn-subir">
                ¡Listo!
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
