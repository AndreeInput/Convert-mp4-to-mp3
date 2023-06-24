// boton de descarga despues de 5 segundos
const convertbtn = document.getElementById('convert');
const downloadbtn = document.getElementById('file');
const newsong = document.getElementById('refreshWindows');
const contentdown = document.getElementById('contentDownload');
const secontdown = document.getElementById('SecondDown');

//Esta funcion obtiene el link de youtube y lo retorna
function obtenerValorInput() {
  const inputElement = document.getElementById('youtube-link');
  const linkValue = inputElement.value;
  return linkValue;
}
var inputElement = document.getElementById('youtube-link');
//al salir del input que recibe el link de youtube y se ejecuta una funcion anonima


// Agrega tu clave de API en el siguiente formato
var apiKey = 'AIzaSyB-R3KqHxhtB-G0iYHSXhN7o0leunlK2ZI';
// Función para obtener los datos del video a través de su enlace
function obtenerDatosVideo(link) {
  // Extraer el ID del video del enlace
  var videoId = obtenerVideoId(link);

  // Realizar la solicitud a la API de YouTube Data v3
  fetch(`https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=${videoId}&key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      // Acceder a los datos del video
      var videoData = data.items[0].snippet;
      //Obtener el titulo y la imagen del video
      const TitleVideo = document.getElementById('tileYoutube');
      let datatitle = videoData.title;
      TitleVideo.innerHTML = datatitle;
      const imgVideo = document.getElementById('imgYoutube');
      let ThImage = videoData.thumbnails.medium.url;
      imgVideo.src = ThImage
      const DateVideo = document.getElementById('dateVideo');
      let DDVideo = videoData.publishedAt;
      DateVideo.innerHTML = "Date Video : " + DDVideo

    })
    .catch(error => {
      alert('Error al obtener los datos del video,Verifique que la Url sea correcta y que el campo no este vacio', error);
    });
}
// Función para extraer el ID del video del enlace
function obtenerVideoId(link) {
  let linkYt = link;
  let keyUrl = linkYt.slice(17)
   return keyUrl
}

convertbtn.style.display = "none"

inputElement.addEventListener('focusout', function() {
  const linkValue = obtenerValorInput();
  obtenerDatosVideo(linkValue);
  const getvideolink = document.getElementById("download-link");
  getvideolink.href = linkValue

  const newLink = inputElement.value.trim()
  if (newLink !== "") {
    convertbtn.style.display = "flex"
  
  } else {
    alert("Por favor agregue una Url");
  }
  
  convertbtn.addEventListener("click",()=>{
      contentdown.style.display = "flex"
      secontdown.style.display = "flex"
      downloadbtn.style.display = "none"
      startProgressBar(6); // Duración 
      setTimeout(function(){
        newsong.style.display = "flex"
        downloadbtn.style.display = "block"
      }, 6000);
  })
});

downloadbtn.addEventListener("click",()=>{
    startProgressBar(9); //tiempo de la barra de proceso en S
})
newsong.addEventListener("click",()=>{
  location.reload();
})
// Iniciar la barra de progreso
function startProgressBar(duration) {
  var progressBar = document.getElementById("progress-bar");
  progressBar.style.display = "block"
  var width = 0;
  var increment = 190 / (duration * 600); // Calculamos el incremento para cada milisegundo
  
  var interval = setInterval(function() {
    width += increment;
    progressBar.style.width = width + "%";
    
    if (width >= 80) {
      clearInterval(interval);
    }
  }, 1); // Actualizamos la barra cada 1 milisegundo
}



