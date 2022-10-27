
window.onload = el_tiempo;
//let array_svg = ["img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg","img/blob1.svg", "img/blob2.svg","img/blob3.svg","img/blob4.svg","img/blob5.svg","img/blob6.svg"];
//let imgBlob = document.getElementById('img');
//let url_img = "array_svg[reportJokes.length]";
let elTiempo = document.getElementById('tiempo');
let app = document.getElementById('app');
let emojis = document.getElementById('contain_emojis');
let reportJokes = [];
let puntos, joke;



let fecha = () => {
  const d = new Date();
  let day = d.toISOString(); 
  return day;
} 

let score = (num) =>{
  puntos = num;
  llenarArray();
}

let nuevoChiste = () =>{
 
    const url='https://icanhazdadjoke.com//slack';
    const peticion=fetch(url)
      peticion.then(datos => datos.json())
              .then(data =>  {
                emojis.style.display = 'block';
                app.innerHTML = data.attachments[0].text;
                joke = data.attachments[0].text;               
                //imgBlob.style.background = `${url_img}`;
                
              })
              .catch(() => alert("error"))  
                              
}  
let llenarArray = () => {
  let opinion = new Opinions(joke, puntos, fecha());
  reportJokes.push(opinion);
  
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















//console.log(reportJokes);

/*let segundoChiste = () =>{
  const url='https://api.chucknorris.io/jokes/random';
  const peticion2=fetch(url)
    peticion2.then(dades => dades.json())
            .then(dato =>  {
              imgBlob.style.background = `${url_img}`;
              app.innerHTML = dato.value;
              joke = dato.value;
            })
            .catch(() => alert("error"))                     
}*/      






