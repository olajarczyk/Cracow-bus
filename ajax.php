<?php
$airport = !empty($_POST['airport']) ? $_POST['airport'] : false;
if ($airport) {
$host = "localhost";
$user = "root";
$password = "";
$dbname = "miami";
$conn = mysqli_connect($host, $user, $password, $dbname);
if($conn){
} else {
   die("Failed" . $mysqli_connect_error());
}
$query = mysqli_query($conn, "INSERT INTO test(airport) VALUES('$airport')");
    if($query) {
        echo("Dodano do bazy danych :)");
    }
}
else {
  echo "Who's there?";
}	
?>