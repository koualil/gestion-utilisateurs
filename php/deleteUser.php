<?php 
header('Access-Control-Allow-Origin: *');
include "./connection.php";
$id = $_GET['id'];

$sql = "DELETE FROM `users` WHERE idUsers=$id";
$res = $conn->query($sql);
if($res){
    echo json_encode(array("status"=>true));
}
    else echo json_encode(array("status"=>false));
      
?>