<?php

//postman forbindelse
    header("Access-Control-Allow-Origin: *"); 
    header("Content-Type: application/json; charset=UTF-8"); 
    header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE"); 
    header("Access-Control-Max-Age: 3600"); 
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"); 
    
//impoterer .env filen 
require ".env";

// $requestMethod = $_SERVER["REQUEST_METHOD"];
// $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
// $uri = explode('/', $uri);


// //oprettelse af forbindelse til vores database
// $servername = "localhost";
// $username = "root";
// $password = getenv("PASSWORD"); // reads from the .env file (if imported in index.php)

// try {
//     $conn = new PDO("mysql:host=$servername;dbname=ola_pipper", $username, $password);
//     // set the PDO error mode to exception
//     $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
//     if ($uri[1] == "pip") {
//         if ($requestMethod == "GET") {
//             $statement = $conn->query("select * from pipper");
//             $result = $statement->fetchAll(\PDO::FETCH_ASSOC);
//             echo json_encode($result);    
//         } else if ($requestMethod == "POST") {
//             $input = (array) json_decode(file_get_contents('php://input'), TRUE);

//             $data = [
//                 'brugernavn' => $input['brugernavn'],
//                 'pip' => $input['pip']
//            ];

//             $sql = 'INSERT INTO pipper VALUES(default, :brugernavn, :pip)';
//             $statement = $conn->prepare($sql);
//             $statement->execute($data);

//             $id = $conn->lastInsertId();
//             $pip = (object) $input;
//             $pip->id = $id;

//             echo json_encode($pip);
//             echo "You sent a POST request, so you get no data, hahaha!";
//         }
//     }
    
    
// // hvis forbindelsen til databasen fejler sendes der beskeden "connection failed"  
// } catch(PDOException $e) {
//     echo "Connection failed: " . $e->getMessage();
// }

$brugernavn = $_POST["brugernavn"];
$pip = $_POST["pip"];


$host = "localhost";
$dbname = "ola_pipper";
$username = "root";
$password = getenv("PASSWORD");

$conn = mysqli_connect($host, $username, $password, $dbname);

if (mysqli_connect_errno()) {
    die("Connection error: " . mysqli_connect_error()); 
} 

$sql = "INSERT INTO pipper (brugernavn, pip) VALUES (?, ?)";
$stmt = mysqli_stmt_init($conn);

if (!mysqli_stmt_prepare($stmt, $sql)) {
    die("SQL error: " . mysqli_error($conn));
}

mysqli_stmt_bind_param($stmt, "ss", $brugernavn, $pip);

// if (mysqli_stmt_execute($stmt)) {
//     echo "Record has been saved"; 
// } else {
//     die("Error: " . mysqli_error($conn));
// }

mysqli_stmt_close($stmt);
mysqli_close($conn);


?>