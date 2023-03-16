<?php
declare(strict_types=1);
session_start();

$products = [
    ['name' => 'Club Ham', 'price' => 3.20],
    ['name' => 'Club Cheese', 'price' => 3],
    ['name' => 'Club Cheese & Ham', 'price' => 4],
    ['name' => 'Club Chicken', 'price' => 4],
    ['name' => 'Club Salmon', 'price' => 5]
];

if(!empty($_GET['expensiveMode'])) {
    //loop over all products
    //double the price
}

$_SESSION['totalValue'] = 0;