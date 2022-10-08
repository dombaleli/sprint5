let app = document.getElementById('app');

const url='https://icanhazdadjoke.com//slack';

function nuevoChiste(){

const peticion=fetch(url);

    peticion

    .then(datos => datos.json())

    .then(data =>  {
      app.innerHTML = data.attachments[0].text + "🤣";
    })
    .catch(()=> alert("error")) 

  
}    

function iniciar(){
  document.getElementById('boton').onclick = nuevoChiste;
}


window.onload = iniciar;