<?php
declare(strict_types=1);


ini_set('display_errors', "1");
ini_set('display_startup_errors', "1");
error_reporting(E_ALL);


require 'Controller/HomeController.php';
require 'Model/Post.php';
require 'Model/Post.php';
require 'Model/PostLoader.php';

$messageController = new HomeController();

if (!isset($_GET['title'])) {
    $_GET['title'] = 1;
}

if (!isset($_GET['date'])) {
    $_GET['date'] = 1;
}

if (!isset($_GET['content'])) {
    $_GET['content'] = 1;
}

if (!isset($_GET['name'])) {
    $_GET['name'] = 1;
}

if (!isset($_GET['firstName'])) {
    $_GET['firstName'] = 1;
}



$messageController->messageRender($_POST['title']);
$messageController->messageRender($_POST['date']);
$messageController->messageRender($_POST['content']);
$messageController->messageRender($_POST['name']);
$messageController->messageRender($_POST['firstName']);


$title = $_POST['title'];
$date = $_POST['date'];
$content = $_POST['content'];
$authorName = $_POST['name'];
$authorFirstName = $_POST['firstName'];