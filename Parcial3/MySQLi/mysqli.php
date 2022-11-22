<?php

$servidor = "localhost";
$basedatos = "ejemplo";
$usuario = "root";
$password = "";

$con = mysqli_connect($servidor,$usuario,$password,$basedatos) or die("No se pudo conectar al Localhost");
$consulta = "select * from empleado";
$registros = mysqli_query($con,$consulta) or die("Problemas en el select");

//UTILIZA ARRAY ASOCIATIVO
//while ($reg = mysqli_fetch_array($registros,MYSQLI_ASSOC)){
//  printf($reg['Nombre'].' '.$reg['Apellido'].'<br>');
//}
//UTILIZA ARRAY NUMERICO
//while ($reg = mysqli_fetch_array($registros,MYSQLI_NUM)){
//  printf($reg[1].' '.$reg[2].'<br>');
//}

$result = mysqli_fetch_all($registros);
var_dump($result);

mysqli_close($con);
echo json_encode($result);
?>