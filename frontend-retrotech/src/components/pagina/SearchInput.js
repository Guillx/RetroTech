import { Button, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";

import { useEffect, useState } from "react";
import { getSearch } from "../../http/api";

import "../../assets/css/SearchInput.css";

export default function SearchInput() {
  const history = useHistory();
  const [input, setInput] = useState();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { handleSubmit, register } = useForm();

  useEffect(() => {
    getSearch(input).then((data) => {
      setFilteredProducts(data);
    });
  }, [input, history]);
  console.log(filteredProducts);
  const onSubmit = async (value) => {
    console.log(value);
  };

  return (
    <div className="body-search-container">
      <div className="search-input-container">
        <h1>Busca tu producto</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            type="text"
            htmlFor="search"
            name="search"
            id="search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            label="¿Qué buscas?"
            inputRef={register()}
            style={{ width: 1000, color: "white" }}
          ></TextField>
          <br />
          <Button type="submit" variant="contained" color="primary">
            Buscar
          </Button>
        </form>
      </div>
      <div>
        {filteredProducts.map((data) => {
          return (
            <div className="anuncio-search-result">
              <Link to={`/comprar/${data.idCategoria}/${data.idAnuncio}`}>
                <div className="search-anuncios-resultado">
                  <h1>{data.titulo}</h1>
                  <p>{data.descripcion}</p>
                  <p>{data.localidad}</p>
                  <p>{data.fechaPublicacion}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
