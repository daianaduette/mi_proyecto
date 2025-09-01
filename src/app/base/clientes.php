<?php
// clientes.php
header("Access-Control-Allow-Origin: *"); // permitir peticiones desde Angular
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Datos de conexión
$host = "localhost";
$user = "root"; // tu usuario de MySQL
$pass = "root"; // tu contraseña (en MAMP normalmente es "root")
$db   = "mi_base"; // cambia por el nombre de tu base

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Error de conexión: " . $conn->connect_error]));
}

// Detectar método HTTP
$method = $_SERVER['REQUEST_METHOD'];

// Leer body si existe (para POST y PUT)
$data = json_decode(file_get_contents("php://input"), true);

switch ($method) {
    case "GET":
        $result = $conn->query("SELECT * FROM clientes");
        $clientes = [];
        while ($row = $result->fetch_assoc()) {
            $clientes[] = $row;
        }
        echo json_encode($clientes);
        break;

    case "POST":
        $usuario = $data['usuario'];
        $password = $data['password'];
        $telefono = $data['telefono'];

        $sql = "INSERT INTO clientes (usuario, password, fecha_creacion, telefono) 
                VALUES ('$usuario', '$password', NOW(), '$telefono')";
        if ($conn->query($sql) === TRUE) {
            echo json_encode(["success" => true, "message" => "Cliente agregado"]);
        } else {
            echo json_encode(["success" => false, "message" => $conn->error]);
        }
        break;

    case "PUT":
        if (!isset($_GET['id'])) {
            echo json_encode(["success" => false, "message" => "Falta ID"]);
            exit;
        }
        $id = intval($_GET['id']);
        $usuario = $data['usuario'];
        $password = $data['password'];
        $telefono = $data['telefono'];

        $sql = "UPDATE clientes SET usuario='$usuario', password='$password', telefono='$telefono' 
                WHERE id=$id";
        if ($conn->query($sql) === TRUE) {
            echo json_encode(["success" => true, "message" => "Cliente actualizado"]);
        } else {
            echo json_encode(["success" => false, "message" => $conn->error]);
        }
        break;

    case "DELETE":
        if (!isset($_GET['id'])) {
            echo json_encode(["success" => false, "message" => "Falta ID"]);
            exit;
        }
        $id = intval($_GET['id']);
        $sql = "DELETE FROM clientes WHERE id=$id";
        if ($conn->query($sql) === TRUE) {
            echo json_encode(["success" => true, "message" => "Cliente eliminado"]);
        } else {
            echo json_encode(["success" => false, "message" => $conn->error]);
        }
        break;

    default:
        echo json_encode(["success" => false, "message" => "Método no permitido"]);
        break;
}

$conn->close();




