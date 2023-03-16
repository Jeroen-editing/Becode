<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<?php if(!empty($_GET['expensiveMode'])): ?>
    <a href="?expensiveMode=0">Enable expensive mode</a>
<?php else:?>
    <a href="?expensiveMode=1">Disable expensive mode</a>
<?php endif;?>

<form method="post">
    <label for="email">E-mail:</label>
    <input type="text" id="email" name="email"/>

    <fieldset>
        <legend>Address</legend>

        <label for="street"></label>
        <input type="text">

        <label for="streetnumber"></label>
        <input type="text">

        <label for="city"></label>
        <input type="text">

        <label for="zipcode"></label>
        <input type="text">
    </fieldset>

    <label for="deliveryTime"></label>
    <select name="deliveryTime" id="deliveryTime">
        <option value="1">As fast as possible delivery</option>
        <option value="2">Express delivery (+2 EUR)</option>
    </select>

    <?php foreach ($products AS $i => $product): ?>
        <label><input type="checkbox" value="1" name="products[<?php echo $i ?>]"/> <?php echo $product['name'] ?> -
            € <?php echo number_format($product['price'], 2) ?></label>
    <?php endforeach; ?>
</form>

<p>You already ordered <strong><?php echo $_SESSION['totalValue'] ?></strong></p>

</body>
</html>