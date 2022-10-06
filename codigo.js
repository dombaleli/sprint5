//let app = document.getElementById('app');
//let boton = document.querySelector('#boton');

let url = 'https://icanhazdadjoke.com/';

  fetch(url)
    .then(response => response.json())
    .then(datos => console.log(datos))
    .catch(error => console.log(error))

