<?php
declare(strict_types=1);

ini_set('display_errors', "1");
ini_set('display_startup_errors', "1");
error_reporting(E_ALL);

function OpenConnection() {

    // Try to figure out what these should be for you

    $servername = "localhost";
    $username = "jeroen_editing";
    $password = "webontwerpen";
    $dbname = "becode";

    // Try to understand what happens here
    $pdo = new PDO("mysql:host=localhost;dbname=becode", $username, $password);

    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

    $dbconnect=mysqli_connect($servername, $username, $password, $dbname);


    if ($dbconnect->connect_error) {
        die("Database connection failed: " . $dbconnect->connect_error);
    }

    $stmt = $pdo->prepare('SELECT first_name FROM student WHERE id = :id');

    $id = filter_input(INPUT_GET, 'id', FILTER_SANITIZE_NUMBER_INT);
    // filter your data first (see [Data Filtering](#data_filtering)),
    // especially important for INSERT, UPDATE, etc.

    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    // Automatically sanitized for SQL by PDO

    $stmt->execute();



    // Why we do this here
    return $pdo;
}



