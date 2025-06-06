<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
 include('conectar.php');
 $nome = $conn->real_escape_string($_POST['nome']);
 $carga_horaria = (int) $_POST['carga_horaria'];
 $descricao = $conn->real_escape_string($_POST['descricao']);
 $sql = "INSERT INTO cursos (nome, carga_horaria, descricao) VALUES ('$nome', '$carga_horaria', '$descricao')";
 if ($conn->query($sql) === TRUE) {
 echo "Curso cadastrado com sucesso!";
 } else {
 echo "Erro: " . $conn->error;
 }
 $conn->close();
} else {
 echo "Acesso invalido!";
}
?>