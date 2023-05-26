    //1-vamos a traer a node-fetch
import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';//2-llamaremos a la APi

//función que va a recibir como argumento la url que queremos llamar y esto retornará el llamado de fecth: una promesa
function fetchData(urlApi){ //3-aremos una funcion que resibira la url de la api que nos retornara el llamado de fetch que es una promesa esto nos ayudara a crear elementos con el llamado del primer recurso productos el segundo un solo producto y la categoria  
    return fetch(urlApi).then(response => response.json());
};
//ahora crearemos la logica para hacer varios llamados con fetch y que se consecuente
fetchData(`${API}/products`)//primera solicitud 

    .then(products =>{
        console.log(products[0]);
        return fetchData(`${API}/products/${products[0].id}`) //con esto ya tenemos los productos 
    })
    .then(product=>{
        console.info(product.title)
        return fetchData(`${API}/categories/${product?.category?.id}`)
    })
    .then(category=>{
        console.info(category.name)
    })
    .catch(err=>{ console.error(err)})
    .finally(() => console.log('finally'));




//ahora aremos el llamado de la api 
// fetch(`${API}/products`)
// //utilizaremos then pra saber que nos va arrojar la funcion 
//     .then(response => response.json())//json nos va a transformar los datos que nos arroja la funcion en un objeto json
//     //creamos otro then para crear los productos  
//     .then(products=>{
//         console.log(products);
//     })//si se nos presenta un erro nosotros queremos que se nos muestre y esto lo hacemos con carch
//     .catch(error=>console.log(error));
    //con esto hemos creado el llamado fetch funciona como promesa 
    //si corremos el codigo nos va arrojar un error para solucionarlo tenemos que agregar un tyoe en el archivo package.json 
    //ya despues de aber arreglado el problema y de corre el code vamos nos mostrara multiples objetos 

