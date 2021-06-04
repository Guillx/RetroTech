const getDB = require("../../db");

const queryAnuncios = async (req, res, next) => {
  let connection;

  try {
    connection = await getDB();

    // 🆘 DESPUÉS DE 50 millones de intentos creo que funciona: La intención es que se muestren todos los anuncios que pertenecen a una categoria (idCategoria) y ahora lo hace. Si en Postman pones http://localhost:3000/comprar/3, muestra todos los anuncios con idCategoria 3, que es "Teléfonos". De todas formas: PREGUNTAR SI SE HACE ASÍ PORQUE LO DUDO MUCHO (pero funcionar, FUNCIONA!)

    const { search } = req.query;

    let results;

    // 🆘 Esto es para buscar con el buscador. Si buscas una palabra, lista los anuncios que contienen esa palabra en el título o la descripción. Ha funcionado a la primera sin dar error asi que seguramente esté mal.
    if (search) {
      [results] = await connection.query(
        `
        SELECT * FROM anuncios
        WHERE (anuncios.titulo LIKE ? OR anuncios.descripcion LIKE ?) AND anuncios.vendido = false;`,
        [`%${search}%`, `%${search}%`]
      );
    } else {
      console.log("No existe un anuncio con ese nombre");
    }

    const anunciosFiltrados = results;

    let resultadoConFotos = [];

    if (results.legth > 0) {
      const ids = results.map((result) => result.id);

      const [fotos] = await connection.query(`
        SELECT * FROM fotos_anuncio WHERE idAnuncio IN (${ids.join(",")})`);

      resultadoConFotos = results.map((result) => {
        const fotoResultado = fotos.filter(
          (foto) => foto.idAnuncio === result.idFotoAnuncio
        );

        return {
          ...result,
          fotos: fotoResultado,
        };
      });
    }

    res.send({
      status: "ok",
      data: [...anunciosFiltrados, resultadoConFotos],
    });
  } catch (error) {
    next(error);
  } finally {
    if (connection) connection.release();
  }
};

module.exports = queryAnuncios;
