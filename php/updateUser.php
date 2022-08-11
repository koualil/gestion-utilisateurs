<?php 
header('Access-Control-Allow-Origin: *');
include "./connection.php";
$id = $_GET['id'];

$sql = "UPDATE `users` set idUsers=$id , nom='$_POST[nom]' , prenom ='$_POST[prenom]' ,
        email='$_POST[email]' ,password='$_POST[password]' , dateNaissance='$_POST[dateNaiss]' ,
        situationFamiliale='$_POST[situationF]' ,sex='$_POST[sex]' WHERE idUsers=$id ";
         
$res = $conn->query($sql);
if($res){
    $data = $res->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode(array("status"=>true));
}
    else echo json_encode(array("status"=>false));
      
?>