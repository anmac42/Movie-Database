<?php
$servername = "cssql.seattleu.edu";
$username = "ll_aabogado";
$password = "miWTVkPDI64iiN5w";
$dbname = "ll_aabogado";


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];
$userTag = $_POST['userTag'];
$password = password_hash($_POST['password'], PASSWORD_BCRYPT);

$sql = "INSERT INTO USER (USER_FNAME, USER_LNAME, USER_EMAIL, USER_TAG, USER_PASSWORD) VALUES ('$fname', '$lname', '$email', '$userTag', '$password')";

if ($conn->query($sql) === TRUE) {
    echo "Sign-up successful!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
