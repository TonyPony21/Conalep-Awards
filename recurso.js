var nenas=["Alex.jpg","Angie.jpg","Asurim.jpg","Barbie.jpg","Belen.jpg","Bere.jpg","Cinthya.jpg","Gaby.jpg","Hanna.jpg","Irais.jpg","Keren.jpg","Lidia.jpg","Liss.jpg","Maffer.jpg","Eve.jpg","Jaz.jpg"];

var nenes=["Enrique.jpg","Giovanni.jpg","Ebraim.jpg","Jesus.jpg","Jose.jpg","Pedro.jpg","Samy.jpg","Tony.jpg","Vicente.jpg","Marco.jpg"];

var todes=["Enrique.jpg","Giovanni.jpg","Ebraim.jpg","Jesus.jpg","Jose.jpg","Pedro.jpg","Samy.jpg","Tony.jpg","Vicente.jpg","Marco.jpg","Alex.jpg","Angie.jpg","Asurim.jpg","Barbie.jpg","Belen.jpg","Bere.jpg","Cinthya.jpg","Gaby.jpg","Hanna.jpg","Irais.jpg","Keren.jpg","Lidia.jpg","Liss.jpg","Maffer.jpg","Eve.jpg","Jaz.jpg"];
var compas=[];

function enviarForm(){
	
}

function desplegarMenu(){
	var menu=document.getElementById("submenu");
	var btnMenu=document.getElementById("btn-nominacion");
	
	if(menu.style.display==="none"){
		menu.style.display="flex";
		btnMenu.style.borderBottom="solid green 2px";
		btnMenu.style.borderRadius="0";
		btnMenu.style.borderTopLeftRadius="5px";
		btnMenu.style.borderTopRightRadius="5px";
		btnMenu.style.color="green";
	}else{
		menu.style.display="none";
		btnMenu.style.borderBottom="none";
		btnMenu.style.borderRadius="5px";
		btnMenu.style.color="#e0e2e7ff";
	}
}

var usedImages = [];

function cambiarImagen(fotoxd) {
	var formElement=document.getElementById('formulario');
  var imageElement = document.getElementById('foto1');
  var imageElement2 = document.getElementById('foto2');
  var mensajeElement = document.getElementById('mensajejsjs');
  var ganador=document.getElementById('ganador');
  var participantess=document.getElementById('participantes');
  
  if(participantess.textContent==='todes'){
  	compas=todes;
  }else if(participantess.textContent==='nenes'){
  	compas=nenes;
  }else{
  	compas=nenas;
  }
  
  
  var nombreElement=document.getElementById('nombre1');
  var nombreElement2=document.getElementById('nombre2');
  
  if (usedImages.length === compas.length) {
  	if(fotoxd===1){
  		ganador.type="text";
  		ganador.value=nombreElement.textContent;
  	}
  	else if(fotoxd===2){
  		ganador.type="text";
  		ganador.value=nombreElement2.textContent;
  	}
    mensajeElement.style.display = "block";
    
    return;
    
  }
  
  var unusedImages = compas.filter(function(image) {
    return !usedImages.includes(image);
  });
  
  var randomIndex = Math.floor(Math.random() * unusedImages.length);
  var randomImage = unusedImages[randomIndex];
  unusedImages.splice(randomIndex, 1); // Eliminar la imagen seleccionada de unusedImages
  
  if(fotoxd === 1) {
    imageElement2.src = randomImage;
    usedImages.push(randomImage);
    nombreCortado2 =randomImage.substring(0,randomImage.lastIndexOf("."));
    nombreElement2.textContent=nombreCortado2;
  } else if(fotoxd === 2) {
    imageElement.src = randomImage;
    usedImages.push(randomImage);
    nombreCortado =randomImage.substring(0,randomImage.lastIndexOf("."));
    nombreElement.textContent=nombreCortado;
    
  } else {
    imageElement.src = randomImage;
    usedImages.push(randomImage);
   
    var randomIndex2 = Math.floor(Math.random() * unusedImages.length);
    var randomImage2 = unusedImages[randomIndex2];
    imageElement2.src = randomImage2;
    usedImages.push(randomImage2);
    var nombreCortado2 =randomImage2.substring(0,randomImage2.lastIndexOf("."));
    nombreElement2.textContent=nombreCortado2;
    
    var nombreCortado =randomImage.substring(0,randomImage.lastIndexOf("."));
    nombreElement.textContent=nombreCortado;
    
  }
 
}
function cambiarImagen2(fotoxd) {
	var formElement=document.getElementById('formulario');
  var imageElement = document.getElementById('foto1');
  var imageElement2 = document.getElementById('foto2');
  var mensajeElement = document.getElementById('mensajejsjs');
  var ganador=document.getElementById('ganador');
  
  var nombreElement=document.getElementById('nombre1');
  var nombreElement2=document.getElementById('nombre2');
  
  if (usedImages.length === nenas.length) {
  	if(fotoxd===1){
  		ganador.type="text";
  		ganador.value=nombreElement.textContent;
  	}
  	else if(fotoxd===2){
  		ganador.type="text";
  		ganador.value=nombreElement2.textContent;
  	}
    mensajeElement.style.display = "block";
    
    return;
    
  }
  
  var unusedImages = nenas.filter(function(image) {
    return !usedImages.includes(image);
  });
  
  var randomIndex = Math.floor(Math.random() * unusedImages.length);
  var randomImage = unusedImages[randomIndex];
  unusedImages.splice(randomIndex, 1); // Eliminar la imagen seleccionada de unusedImages
  
  if(fotoxd === 1) {
    imageElement2.src = randomImage;
    usedImages.push(randomImage);
    nombreCortado2 =randomImage.substring(0,randomImage.lastIndexOf("."));
    nombreElement2.textContent=nombreCortado2;
  } else if(fotoxd === 2) {
    imageElement.src = randomImage;
    usedImages.push(randomImage);
    nombreCortado =randomImage.substring(0,randomImage.lastIndexOf("."));
    nombreElement.textContent=nombreCortado;
    
  } else {
    imageElement.src = randomImage;
    usedImages.push(randomImage);
   
    var randomIndex2 = Math.floor(Math.random() * unusedImages.length);
    var randomImage2 = unusedImages[randomIndex2];
    imageElement2.src = randomImage2;
    usedImages.push(randomImage2);
    var nombreCortado2 =randomImage2.substring(0,randomImage2.lastIndexOf("."));
    nombreElement2.textContent=nombreCortado2;
    
    var nombreCortado =randomImage.substring(0,randomImage.lastIndexOf("."));
    nombreElement.textContent=nombreCortado;
    
  }
}

