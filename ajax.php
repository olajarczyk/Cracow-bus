<?php
$passengers = !empty($_POST['passengers']) ? $_POST['passengers'] : false;
$date = !empty($_POST['date']) ? $_POST['date'] : false;
$from = !empty($_POST['from']) ? $_POST['from'] : false;
$price = !empty($_POST['price']) ? $_POST['price'] : false;
$time = !empty($_POST['time']) ? $_POST['time'] : false;
$to = !empty($_POST['to']) ? $_POST['to'] : false;
if ($passengers && $date && $from && $price && $time && $to) {
$host = "localhost";
$user = "database_username";
$password = "database_password";
$dbname = "database_name";
$conn = mysqli_connect($host, $user, $password, $dbname);
if($conn){
} else {
   die("Failed" . $mysqli_connect_error());
}
$query = mysqli_query($conn, "INSERT INTO pickup(`passengers`, `date`, `from`, `to`, `price`, `time`) VALUES('$passengers', '$date', '$from', '$to', '$price', '$time')");
    if($query) {
        echo("Dodano do bazy danych :)");
    } else {
        echo("Error description: " . mysqli_error($conn));
    }
}
else {
  echo "Who's there?";
}	
?>