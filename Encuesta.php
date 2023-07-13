<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>CONALEP AWARDS</title>
		<link rel="stylesheet" style="text/css" href="estilo.css">
	</head>
	<body onload="cambiarImagen()">
	<header>
	CONALEP AWARDS
	</header>
	<div class="contenedor">
	<menu>
	<ul>
		<li><a href="acerca.html">Acerca de:</a></li>
		<li><button class="nominaciones-btn" id="btn-nominacion" onclick="desplegarMenu()">Nominaciones</button>
		<ul id="submenu" class="nominaciones">
		<br><br>
		<li ><a href="chistoso.html">Chistoso</a></li>
		<li ><a  href="chistosa.html">Chistosa</a></li>
		<li><a href="chismose.html">Chismos@</a></li>
		<li><a href="cringe.html">Cringe</a></li>
		<li><a href="guapo.html">Guapo</a></li>
		<li><a href="linda.html">Linda</a></li>
		<li><a href="inteligente.html">Inteligente</a></li>
		<li><a href="pendeje.html">Pendej@</a></li>
		<li><a href="estilo.html">Estilo</a></li>
		<li><a href="timide.html">Timid@</a></li>
		<li><a href="castrose.html">Castros@</a></li>
		<li><a href="lamebotas.html">LameBotas</a></li>
		<li><a href="rare.html">Raro</a></li>
		<li><a href="misteriose.html">Misterioso</a></li>
		<li><a href="Depresive.html">Depresivo</a></li>
		<li><a href="simpatico.html">Simpatico</a></li>
		<li><a href="infiel.html">Infiel</a></li>
		<li><a href="feo.html">Feo</a></li>
		<li><a href="borrache.html">Borracho</a></li>
		
		</ul>
		</li>
	</ul>
	</menu>
		<main>
		

				
		<div class="mensaje" id="mensajejsjs">
		</div>
		<div class="divs" onload="cambiarImagen()">
		<p id="participantes" style="display: none;">nenes</p>
			<div class="titulo">
			<img src="piter.gif" height="100px">
			<p>Sigue jugando!</p>
			</div>
			<div class="acerca">
				
				<p>
				<?php
				echo"<div class='encuesta'>";
$server="localhost";
$usuario="root";
$password="";
$bd="awards";

$conexion=new mysqli($server,$usuario,$password,$bd);

if($conexion->connect_error){
	die("Conexion fallida".$conexion->connect_error);
}




if($_SERVER["REQUEST_METHOD"]==="POST"){
	$chistoso=$_POST['chistoso'];
	$chistosa=$_POST['chistosa'];
	$chismose=$_POST['chismose'];
	$cringe=$_POST['cringe'];
	$guapo=$_POST['guapo'];
	$linda=$_POST['linda'];
	$inteligente=$_POST['inteligente'];
	$pendeje=$_POST['pendeje'];
	$estilo=$_POST['estilo'];
	$timide=$_POST['timide'];
	$castrose=$_POST['castrose'];
	$lameBotas=$_POST['lameBotas'];
	$rare=$_POST['rare'];
	$misteriose=$_POST['misteriose'];
	$depresive=$_POST['depresive'];
	$simpatice=$_POST['simpatice'];
	$infiel=$_POST['infiel'];
	$feo=$_POST['feo'];
	$borrache=$_POST['borrache'];
	
	
	$sql="INSERT INTO Ganadores (chistoso,chistosa,chismose,cringe,guapo,linda,inteligente,pendeje,estilo,timide,castrose,lameBotas,rare,misteriose,depresive,simpatice,infiel,feo,borrache) VALUES ('$chistoso','$chistosa','$chismose','$cringe','$guapo','$linda','$inteligente','$pendeje','$estilo','$timide','$castrose','$lameBotas','$rare','$misteriose','$depresive','$simpatice','$infiel','$feo','$borrache')";
	echo"</div>";
	if ($conexion->query($sql) === TRUE) {
        echo "Datos insertados correctamente.";
    } else {
        echo "Error al insertar los datos: " . $conexion->error;
    }
}
	

?>
				</p>
				
				</div>
				
			</div>
		
		</main>
		</div>
		<footer>Creado por Anthony Carreto Montiel</footer>
		<script src="recurso.js"> </script>
	</body>
</html>
