<?php
$host = "localhost";
$usuario = "root";
$senha = ""; // senha padrao do WAMP/XAMPP
$banco = "cursos_db";
$conn = new mysqli($host, $usuario, $senha, $banco);
if ($conn->connect_error) {
 die("Falha na conexao: " . $conn->connect_error);
}
?>