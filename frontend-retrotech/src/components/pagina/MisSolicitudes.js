import { useEffect, useState } from "react";
import {
  deleteReserve,
  listarSolicitudes,
  productoVendido,
} from "../../http/api";
import useAuth from "../../shared/hooks/useAuth";
import Perfil from "../../pages/Perfil";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, TextField, Button } from "@material-ui/core";
import { aceptarReserva } from "../../http/api";
import { useForm } from "react-hook-form";
import Backdrop from "@material-ui/core/Backdrop";
import DeleteIcon from "@material-ui/icons/Delete";

import "../../assets/css/MisSolicitudes.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    width: 600,
    height: 300,
    backgroundColor: "white",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    borderRadius: "0.5rem",
    padding: "16px 32px 24px 16px",
    top: "25%",
    left: "28%",
    transform: "translate (-25%, -25%)",
  },
  container: {
    textAlign: "center",
  },
  button: {
    margin: "2px 2px 2px 2px",
    padding: "2px 2px 2px 2px",
  },
}));

export default function Solicitudes() {
  const { handleSubmit, register, errors } = useForm();
  const styles = useStyles();
  const [modal, setModal] = useState(false);
  const { userData } = useAuth();
  const [userSolicitudes, setUserSolicitudes] = useState([]);
  const [dataId, setDataId] = useState({});
  const [message, setMessage] = useState();

  const abrirCerrarModal = () => {
    setModal(!modal);
  };
  useEffect(() => {
    listarSolicitudes(userData.id).then((value) => {
      setUserSolicitudes(value.data);
    });
  }, [userData.id]);

  const onSubmit = async (data) => {
    await aceptarReserva(dataId.idAnuncio, dataId.idCompra, data);
  };

  const clickMe = async (data) => {
    console.log(data);
    await setDataId({ idAnuncio: data.idAnuncio, idCompra: data.idCompra });
    abrirCerrarModal();
  };

  const borrarSolicitudCompra = async (data) => {
    const response = await deleteReserve(data.idCompra);
    setMessage(response.message);
    window.location.reload();
  };

  const vendido = async (data) => {
    const response = await productoVendido(data.idAnuncio, data.idCompra);
    return console.log(response);
  };
  const body = (
    <div align="center" className={styles.modal}>
      <form onSubmit={handleSubmit(onSubmit)} align="center">
        <div>
          <h1>¿Aceptas la venta?</h1>
          <p>¡Proponle un lugar y una hora!</p>
        </div>
        {errors ? <div className="error">{errors.message}</div> : null}
        <div>
          <TextField
            htmlFor="lugarEntrega"
            name="lugarEntrega"
            id="lugarEntrega"
            label="Lugar"
            inputRef={register()}
          />
          <br />
          <TextField
            label="Hora"
            htmlFor="horaEntrega"
            name="horaEntrega"
            id="horaEntrega"
            type="datetime"
            style={{ width: 195 }}
            inputRef={register()}
          />
        </div>
        <br />
        <div className={useStyles.div}>
          <Button
            className={useStyles.button}
            variant="contained"
            color="primary"
            type="submit"
          >
            Enviar
          </Button>
          <Button
            className={useStyles.button}
            variant="contained"
            color="secondary"
            onClick={() => abrirCerrarModal()}
          >
            No
          </Button>
        </div>
      </form>
    </div>
  );

  return (
    <div>
      <Perfil></Perfil>
      <div className="missolicitudes-container">
        {userSolicitudes.map((value) => {
          return (
            <div className="anuncio-missolicitudes">
              <h4
                className="titulo-anuncio-missolicitudes"
                key={value.idCompra}
              >
                {value.comprador} quiere comprar tu producto!
              </h4>
              {message ? (
                <p className="success" id={value.idCompra}>
                  {message}
                </p>
              ) : null}
              <p className="mensaje-compra-missolicitudes">
                {value.mensajeCompra}
              </p>

              <div className="btns-missolicitudes">
                <Button
                  className="btn-missolicitudes"
                  variant="contained"
                  color="primary"
                  onClick={() => clickMe(value)}
                  style={{ marginLeft: 20 }}
                >
                  Aceptar
                </Button>
                <Button
                  className="btn-missolicitudes"
                  variant="contained"
                  onClick={() => borrarSolicitudCompra(value)}
                  startIcon={<DeleteIcon />}
                  color="secondary"
                  style={{ marginLeft: 20 }}
                >
                  Eliminar
                </Button>
                <Button
                  className="btn-missolicitudes"
                  variant="contained"
                  color="secondary"
                  style={{ marginLeft: 20 }}
                  onClick={() => vendido(value)}
                >
                  Vendido
                </Button>
              </div>
              <Modal
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                  style: { backgroundColor: "rgba(0,0,0,0.07)" },
                }}
                open={modal}
                onClose={abrirCerrarModal}
              >
                {body}
              </Modal>
            </div>
          );
        })}
      </div>
    </div>
  );
}
