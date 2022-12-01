<?php

$servername = "localhost";
$username = "e91713b6_1111111";
$password = "PaUBnp7%";
$dbname = "e91713b6_1111111";

$conn = new mysqli($servername, $username, $password, $dbname);

$result = mysqli_query($conn, "SELECT * FROM `how_many_seats`" );

$seatsItem = 8;

while($goods = mysqli_fetch_assoc( $result)){
    echo $goods['seats'];

   if($goods['id'] == 1){

   }
   if($goods['id'] == 2){


    }


}
$conn->close();

?>
