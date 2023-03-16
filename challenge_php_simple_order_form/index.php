<?php
//this line makes PHP behave in a more strict way
declare(strict_types=1);
//we are going to use session variables so we need to enable sessions
session_start();


// NOTE!!! put the html of alerts in the variables, and make a div to activate them


function whatIsHappening() {
    echo '<h2>$_GET</h2>';
    var_dump($_GET);
    echo '<h2>$_POST</h2>';
    var_dump($_POST);
    echo '<h2>$_COOKIE</h2>';
    var_dump($_COOKIE);
    echo '<h2>$_SESSION</h2>';
    var_dump($_SESSION);
}


// form variables

$emailErr = $streetErr = $streetNumberErr = $cityErr = $zipCodeErr = "";
$email = $street = $streetNumber = $city = $zipCode = "";
$delivery = "";
$totalValue = 0;

if(isset($_POST['submit'])) {

    // input testing function
    function test_input($data)
    {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    // to make the fields required &...
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        if (empty($_POST["email"])) {
            $emailErr = "Email is required";
        } else {
            $email = test_input($_POST["email"]);
            // to test the email validity
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $emailErr = "Invalid email format";
            }
        }

        if (empty($_POST["street"])) {
            $streetErr = "Street is required";
        } else {
            $street = test_input($_POST["street"]);
        }

        if (empty($_POST["streetNumber"])) {
            $streetNumberErr = "streetNumber is required";
        } else {
            $streetNumber = test_input($_POST["streetNumber"]);
        }

        if (empty($_POST["city"])) {
            $cityErr = "City is required";
        } else {
            $city = test_input($_POST["city"]);
        }

        if (empty($_POST["zipCode"])) {
            $zipCodeErr = "Zip Code is required";
        } else {
            $zipCode = test_input($_POST["zipCode"]);
        }

        // numeric testing for streetnumber and zipcode
        if (is_numeric($streetNumber)) {
            return $streetNumber;
        } else {
            $streetNumberErr = "StreetNumber has to be a number";
        }

        if (is_numeric($zipCode)) {
            return $zipCode;
        } else {
            $zipCodeErr = "Zip Code has to be a number";
        }

    }

    // store the form data during the session

    S_SESSION[$email. $street. $streetNumber. $city. $zipCode];

    // alert the delivery time
    if ($_GET['express'] == 'yes') {
        $delivery = 45 . 'min';
    } else {
        $delivery = 2 . 'hours';
    }


    // counting the total and saving it in the
    // there should be a shorter way and also that I don't need to repeat the array's
    // now I have to, cause they are out of scope
    if($_COOKIE['food'] = 1) {
        $products = [
            ['name' => 'Club Ham', 'price' => 3.20],
            ['name' => 'Club Cheese', 'price' => 3],
            ['name' => 'Club Cheese & Ham', 'price' => 4],
            ['name' => 'Club Chicken', 'price' => 4],
            ['name' => 'Club Salmon', 'price' => 5]
        ];
        if($products[0] == 1) {
            $totalValue += 3.20;
        }
        if($products[1] == 1) {
            $totalValue += 3;
        }
        if($products[2] == 1) {
            $totalValue += 4;
        }
        if($products[3] == 1) {
            $totalValue += 4;
        }
        if($products[4] == 1) {
            $totalValue += 5;
        }
    }

    if($_COOKIE['food'] = 0) {
        $products = [
            ['name' => 'Cola', 'price' => 2],
            ['name' => 'Fanta', 'price' => 2],
            ['name' => 'Sprite', 'price' => 2],
            ['name' => 'Ice-tea', 'price' => 3],
        ];
        if($products[0] == 1) {
            $totalValue += 2;
        }
        if($products[1] == 1) {
            $totalValue += 2;
        }
        if($products[2] == 1) {
            $totalValue += 2;
        }
        if($products[3] == 1) {
            $totalValue += 3;
        }
    }

}

    // send a validation of the order
    $verification = "";
    if ($email != "" && $street != "" && $streetNumber != "" && $city != "") {
        $today = date("Y/m/d");
        $verification = "Your order is registered at :". $today . ". For " . $street . ", " . $streetNumber . ".";
        return $verification;
    }

//your products with their price.

// swith between drink and foods
$food = [];

if($_GET['food'] ==  1) {

    $products = [
        ['name' => 'Club Ham', 'price' => 3.20],
        ['name' => 'Club Cheese', 'price' => 3],
        ['name' => 'Club Cheese & Ham', 'price' => 4],
        ['name' => 'Club Chicken', 'price' => 4],
        ['name' => 'Club Salmon', 'price' => 5]
    ];
    $food = $products;
    } else {
    $products = [
        ['name' => 'Cola', 'price' => 2],
        ['name' => 'Fanta', 'price' => 2],
        ['name' => 'Sprite', 'price' => 2],
        ['name' => 'Ice-tea', 'price' => 3],
    ];
    $food = $products;
    }


/*
// to calculate the actual delivery time > EXTRA!
$time = $date = date('Y/m/d H:i:s');
$hour = $date = date('H');
$minutes = $date = date('i');

$delivery = [];

if ($delivery == 'yes') {
    $minutes += 45;
    if ($minutes >= 60)
        $minutes -= 6;
        $hour += 1;
} else {
    $hour += 2;
}
*/


// not finshed!!! to send aal the info by mail
    $to = "somebody@example.com";
$subject = "My subject";
$txt = "Hello world!";
$headers = "From: webmaster@example.com" . "\r\n" .
    "CC: somebodyelse@example.com";

mail($to,$subject,$txt,$headers);

require 'form.php';

echo '<h2>Just wait and we deliver!</h2>';


