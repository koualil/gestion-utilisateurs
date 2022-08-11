<?php 
header('Access-Control-Allow-Origin: *');
include "./connection.php";
$id = $_GET['id'];

$sql = "SELECT * FROM `users` WHERE idUsers=$id";
$res = $conn->query($sql);
if($res){
    $data = $res->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data);
}
    else echo json_encode(array("status"=>false));
      
?>