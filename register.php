<?php
$servername = "localhost:3307"; 
$username = "root";
$password = "";
$dbname = "zodiac_oracle";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
$email = "jason@gmail.com"; 
$password = password_hash("123456", PASSWORD_DEFAULT); 

$sql = "INSERT INTO users (email, password) VALUES ('$email', '$password')";

if ($conn->query($sql) === TRUE) {
    echo "Nuevo usuario registrado exitosamente.";
} else {
    echo "Error al registrar el usuario: " . $conn->error;
}
$conn->close();
?>