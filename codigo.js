
window.onload = el_tiempo;
//let array_svg = ["img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg"];
//let imgBlob = document.getElementById('img');
//let url_img = "array_svg[reportJokes.length]";
let elTiempo = document.getElementById('tiempo');
let app = document.getElementById('app');
let emojis = document.getElementById('contain_emojis');
let btnEmpezar = document.getElementById('empezar');
let btnChiste = document.getElementById('boton1');
let pregunta = document.getElementById('pregunta');
let reportJokes = [];
let puntos, joke;

let nuevoChiste = () =>{
 
  const url='https://icanhazdadjoke.com//slack';
  const peticion=fetch(url)
    peticion.then(datos => datos.json())
            .then(data =>  {
              emojis.style.display = 'block';
              btnChiste.style.display = 'none';
              pregunta.style.display ='block';
              app.innerHTML = data.attachments[0].text;
              joke = data.attachments[0].text;             
            })
            .catch(() => alert("error"))                                    
}  

let fecha = () => {
  const d = new Date();
  let day = d.toISOString(); 
  return day;
} 

let score = (num) =>{
  if(num == 1){
    puntos = 1;
  }else if(num == 2){
    puntos = 2;
  }else if(num == 3){
    puntos = 3;
  }
  btnChiste.style.display = 'block';
  pregunta.style.display ='none';

  llenarArray();
}
     

let llenarArray = () => {
  
  let opinion = new Opinions(joke, puntos, fecha());
  reportJokes.push(opinion);

  for( let j of reportJokes){
    let l = reportJokes.length;
    if(reportJokes[l-1].joke == reportJokes[l-2].joke){
    reportJokes.splice([l-2], 1);
    }
  }
} 

console.log(reportJokes);


function el_tiempo(){
  const url='https://www.el-tiempo.net/api/json/v2/provincias/08/municipios/08075';
  const peticion3=fetch(url)
    peticion3.then(datos => datos.json())
            .then(datos =>  {
              elTiempo.innerHTML = datos.municipio.NOMBRE + ",  +" + datos.temperatura_actual + " ºC, Probabilidad de lluvia: " + datos.precipitacion + '%';
            })
            .catch(() => alert("error"))          
}

document.getElementById('boton1').onclick = nuevoChiste;







