
window.onload = el_tiempo;

let app = document.getElementById('app');
let reportJokes = [];
let array_svg = ["img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg"];
let imgBlob = document.getElementById('img');
let url_img = "array_svg[reportJokes.length]";
let joke;

let fecha = () => {
  const d = new Date();
  let day = d.toISOString(); 
  return day;
} 

let nuevoChiste = () =>{
    const url='https://icanhazdadjoke.com//slack';
    const peticion=fetch(url)
      peticion.then(datos => datos.json())
              .then(data =>  {
                imgBlob.style.background = `${url_img}`;
                app.innerHTML = data.attachments[0].text;
                joke = data.attachments[0].text;
              })
              .catch(() => alert("error"))         
}   
let segundoChiste = () =>{
  const url='https://api.chucknorris.io/jokes/random';
  const peticion2=fetch(url)
    peticion2.then(dades => dades.json())
            .then(dato =>  {
              imgBlob.style.background = `${url_img}`;
              app.innerHTML = dato.value;
              joke = dato.value;
            })
            .catch(() => alert("error"))                     
}      

function score(num){
  let puntuacion = num;

  if(reportJokes.length % 2 == 0){
    document.getElementById('boton').style.display='block';
    document.getElementById('boton2').style.display='none';
  }else{
    document.getElementById('boton').style.display='none';
    document.getElementById('boton2').style.display='block';
  }
  let dades = new Opinions(joke, puntuacion, fecha());
  reportJokes.push(dades);
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



