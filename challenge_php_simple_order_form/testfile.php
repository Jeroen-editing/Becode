<?php
/*
function whatIsHappening() {
    echo '<h2>$_GET</h2>';
    var_dump($_GET);
    echo '<h2>$_POST</h2>';
    var_dump($_POST);
    echo '<h2>$_COOKIE</h2>';
    var_dump($_COOKIE);
    echo '<h2>$_SESSION</h2>';
    var_dump($_SESSION);
    echo '<h2>$_SERVER</h2>';
    var_dump($_SERVER);
}
whatIsHappening();
*/

$date = date('Y/m/d H:i:s');
$Hour = $date = date('H');
$Minutes = $date = date('i');
echo $Hour. '<br>';
echo $Minutes. '<br>';