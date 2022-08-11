<?php 
header('Access-Control-Allow-Origin: *');
 
include "./connection.php";

   $query = "SELECT *  FROM users";
   try {
       $rep = $conn->query($query);
       $data = $rep->fetchAll(PDO::FETCH_ASSOC);
         $myArray = array(  "draw"=> 1,
         "recordsTotal"=> 57,
         "recordsFiltered"=> 57,
            "data"=>$data);
 
      echo json_encode($myArray);
   } catch (PDOException $e) {
      echo json_encode($e);
 
}
?>