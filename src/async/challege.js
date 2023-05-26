import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

//aqui hacemos una funcion normal con async(solo pq si) pero tambien puede ser como la de abajo
//solo se hizo con fines educativos, puedes elegir la manera que te guste mas
async function fecthData(urlApi) {
  const response = await fetch(urlApi); //fecth se refiere a una promesa
  const data = response.json(); //debemos transformar la llamada en json para poder usar esos datos
  return data; // los devolvemos ya transformados
}

//ahora procedemos a consumir la api para obtener todos los productos

const consumirApi = async (urlApi) => {
  try {
    //accedemos a todos los productos usando await para que el codigo "espere" dicha solicitud
    const products = await fecthData(`${API}/products`);
    //ya que tenemos los productos, buscamos el primero con products[0] siendo esta la constante en la linea anterior junto con su id
    const product = await fecthData(`${API}/products/${products[0].id}`);
    //ahora ya tengo el producto, quiero filtrarlo por categoria y para ello uso el id
    const category = await fecthData(
      `${API}/categories/${product.category.id}`
    );
    //ahora simplemente mostramos en consola los resultados obtenidos
    console.log(products[0]);
    //en este llamado podemos acceder al nombre del producto que esta por "title"
    console.log(product.title);
    //en este llamado accedemos al nombre de la categoria que esta por "name"
    console.log(category.name);
    //todo esto se sabe por la documentacion de la API de platzi
  } catch (error) {
    console.error(error);
  }
  //el try y catch es digamos un "intenta esto" y sino "lanza el error(catch)"
};

//ahora solo queda llamar a la funcion pasandole la API de platzi

consumirApi(API);
