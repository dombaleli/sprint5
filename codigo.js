//let app = document.getElementById('app');
//let boton = document.querySelector('#boton');

const url='https://icanhazdadjoke.com//slack';

function nuevoChiste(){

const peticion = fetch(url);

    peticion

    .then(datos => datos.json())
    .then(data => console.log(data.attachments[0].text))
    .catch(()=> console.log("error")) 

}    
nuevoChiste();