<?php
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" type="text/css"
          rel="stylesheet"/>
    <title>Order food & drinks</title>
</head>
<body>
<div class="container">
    <h1>Order food in restaurant "the Personal Ham Processors"</h1>
    <div class="alert alert-success fade-in alert-dismissible">
        <strong><?php echo $verification; ?></strong>
    </div>
    <div class="alert alert-warning fade-in alert-dismissible">
        <strong><?php echo $delivery; ?></strong>
    </div>

    <nav>
        <ul class="nav">
            <li class="nav-item">
                <a class="nav-link active" href="?food=1">Order food</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="?food=0">Order drinks</a>
            </li>
        </ul>
    </nav>
    <form method="post" action="index.php">
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="email">E-mail:</label>
                <input type="text" id="email" name="email" class="form-control mb-4" value="<?php echo $email; ?>">
                <span class="alert alert-danger fade-in error">* <?php echo $emailErr;?></span>
            </div>
            <div></div>
        </div>

        <fieldset>
            <legend>Address</legend>

            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="street">Street:</label>
                    <input type="text" name="street" id="street" class="form-control mb-4" value="<?php echo $street; ?>">
                    <span class="alert alert-danger fade-in wrong">* <?php echo $streetErr; ?></span>
                </div>
                <div class="form-group col-md-6">
                    <label for="streetNumber">Street number:</label>
                    <input type="text" id="streetNumber" name="streetNumber" class="form-control mb-4" value="<?php echo $streetNumberErr; ?>">
                    <span class="alert alert-danger fade-in wrong">* <?php echo $streetNumberErr; ?></span>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="city">City:</label>
                    <input type="text" id="city" name="city" class="form-control mb-4" value="<?php echo $city; ?>">
                    <span class="alert alert-danger fade-in wrong">* <?php echo $cityErr; ?></span>
                </div>
                <div class="form-group col-md-6">
                    <label for="zipCode">Zip Code:</label>
                    <input type="text" id="zipCode" name="zipCode" class="form-control mb-4" value="<?php echo $zipCode; ?>">
                    <span class="alert alert-danger fade-in wrong">* <?php echo $zipCodeErr; ?></span>
                </div>
            </div>
        </fieldset>

        <fieldset>
            <legend>Products</legend>
            <?php foreach ($food AS $i => $product): ?>
                <label>
                    <input type="checkbox" value="1"  name="products[<?php echo $i ?>]"/> <?php echo $product['name'] ?> -
                    &euro; <?php echo number_format($product['price'], 2) ?></label><br />
            <?php endforeach; ?>
        </fieldset>
        <fieldset>
            <legend>Delevery</legend>
                <label>
                    <input type="checkbox" value="yes" name="express" checked> Express Delivery?
                </label><br>
        </fieldset>

        <button type="submit" class="btn btn-primary">Order!</button>
        <span class="wrong"> <?php echo $verification; ?></span>
    </form>

    <footer>You already ordered <strong>&euro; <?php echo $totalValue ?></strong> in food and drinks.</footer>
</div>

<style>
    footer {
        text-align: center;
    }
</style>
</body>
</html>