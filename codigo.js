
let app = document.getElementById('app');
let reportJokes = [];
const svg = ["img/blob1.svg", "img/blob2.svg","imgblob3.svg","img/blob4.svg","img/blob5.svg", "img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","/img/blob1.svg", "/img/blob2.svg","/img/blob3.svg","/img/blob4.svg","/img/blob5.svg","/img/blob1.svg", "/img/blob2.svg","/img/blob3.svg","/img/blob4.svg","/img/blob5.svg","/img/blob1.svg", "/img/blob2.svg","/img/blob3.svg","/img/blob4.svg","/img/blob5.svg","/img/blob1.svg", "/img/blob2.svg","/img/blob3.svg","/img/blob4.svg","/img/blob5.svg","/img/blob1.svg", "/img/blob2.svg","/img/blob3.svg","/img/blob4.svg","/img/blob5.svg","/img/blob1.svg", "/img/blob2.svg","/img/blob3.svg","/img/blob4.svg","/img/blob5.svg"];
let imgBlob = document.getElementById('img');

let nuevoChiste = () =>{
    const url='https://icanhazdadjoke.com//slack';
    const peticion=fetch(url)
      peticion.then(datos => datos.json())
              .then(data =>  {
                getJoke(data.attachments[0].text);
                app.innerHTML = data.attachments[0].text;
                document.getElementById('contain_emoji').style.display = 'block';
                document.getElementById('boton').style.display = 'none';
              })
              .catch(() => alert("error"))
         
}

let getJoke = (data) => data;

let segundoChiste = () =>{
    const url='https://api.chucknorris.io/jokes/random';
    const peticion2=fetch(url)
      peticion2.then(datos => datos.json())
              .then(dato =>  {
                obtenerChiste(dato.value);
                app.innerHTML = dato.value;
                document.getElementById('contain_emoji').style.display = 'block';
                document.getElementById('boton2').style.display = 'none';
              })
              .catch(() => alert("error"))                     
}

let obtenerChiste = (dato) => dato;

  let fecha = () => {
    const d = new Date();
    let day = d.toISOString(); 
    return day;
} 

let score = (num) => {

  let puntos;

  if(num === 1){
    puntos = 1;
    alert('Su opinión es importante, gracias!');
    document.getElementById('boton2').style.display = 'block';
    document.getElementById('contain_emoji').style.display = 'none'
  }else if(num === 2){
    puntos = 2;
    alert('Su opinión es importante, gracias!');
    document.getElementById('boton').style.display = 'block';
    document.getElementById('contain_emoji').style.display = 'none';
  }else if(num === 3){
    puntos = 3;
    alert('Su opinión es importante, gracias!');
    document.getElementById('boton').style.display = 'block';
    document.getElementById('contain_emoji').style.display = 'none';
  }

  let joke = getJoke();
  let joke2 = obtenerChiste();
  let data = fecha();

  let opinio = new Opinions(joke || joke2, puntos, data);
  reportJokes.push(opinio);
}
console.log(reportJokes);


let elTiempo = document.getElementById('tiempo');

function el_tiempo(){
  const url='https://www.el-tiempo.net/api/json/v2/provincias/08/municipios/08075';
  const peticion3=fetch(url)
    peticion3.then(datos => datos.json())
            .then(datos =>  {
              elTiempo.innerHTML = datos.municipio.NOMBRE + ",  +" + datos.temperatura_actual + " ºC, Probabilidad de lluvia: " + datos.precipitacion + '%';
            })
            .catch(() => alert("error"))          
}

window.onload = el_tiempo;