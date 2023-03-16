<?php
declare(strict_types=1);

ini_set('display_errors', "1");
ini_set('display_startup_errors', "1");
error_reporting(E_ALL);


require 'controller/homeController.php';
require 'model/customer.php';
require 'model/customerLoader.php';

if (!isset($_GET['customerId'])) {

    $_GET['customerId'] = 5;

}

$controller = new HomeController();
$controller->render((int)$_GET['customerId']);

$productController = new HomeController();
$productController->productRender((int)$_GET['productId']);

?>
