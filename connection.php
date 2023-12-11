<?php
function checkMyConnection(){
    // Database credentials
    $host = "localhost:3307"; // Change this to your database host if it's different
    $username = "root";
    $password = "";
    $database = "appdevdb";

    // Create connection
    $conn = new mysqli($host, $username, $password, $database);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    echo "Connected successfully!";
    
    // Close connection
    $conn->close();
}
// Call the function
checkMyConnection();
?>