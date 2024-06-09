<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "bd_carros";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

$sql = "SELECT * FROM carros";
$result = $conn->query($sql);

$carros = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $carros[] = $row;
    }
}

$conn->close();

header('Content-Type: application/json');
echo json_encode($carros);
?>
