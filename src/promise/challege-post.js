import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'corse',
        credentials: 'same-origin',
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return response;
    
}

const data = {
    title: "Mexico",
    price: 9999,
    description: "Bandera de Mexico",
    categoryId: 1,
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/2560px-Flag_of_Mexico.svg.png"],
  };
  
  postData(`${API}/products`, data)
    .then((response) => response.json())
    .then((data) => console.log(data));
  