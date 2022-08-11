<?php 
header('Access-Control-Allow-Origin: *');
include "./connection.php";
try{

if(isset($_POST['nom']) && isset($_POST['prenom']) && isset($_POST['email'])){
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
$dateNaiss = $_POST['dateNaiss'];
$email = $_POST['email'];
$password = $_POST['password'];
$situationF = $_POST['situationF'];
$sex = $_POST['sex'];

if(!empty($nom) && 
!empty($prenom) && 
!empty($dateNaiss) &&
   !empty($email) &&
   !empty($password) &&
   !empty($situationF) &&
   !empty($sex) ){
       
    $sql = "INSERT INTO users values(null , '$nom' ,'$prenom','$email','$password ','$dateNaiss','$situationF','$sex')";
    $res = $conn->query($sql);
    
    if($res){
         
        $res1 = $conn->query("SELECT * FROM users WHERE idUsers=(SELECT max(idUsers) FROM users); ");
        $AllUsers = $res1->fetchAll(PDO::FETCH_ASSOC);
        // result post
        echo json_encode(array('status'=>true));
        }
    else 
         echo json_encode(array('status'=>false));
         
       
     }
    else {
        echo json_encode(array('status'=>false));

    }
}
    else 
        echo json_encode(array('status'=>false));

}
catch(PDOException $e){
    echo json_encode($e->getMessage());
    
}


 
?>