<?php declare(strict_types=1)

require "blackjack.php";

ini_set('display_errors', "1");
ini_set('display_startup_errors', "1");
error_reporting(E_ALL);

const BLACKJACK = 21;
const DEALER_MAX = 16;


function displayOutcome(Blackjack $player, Blackjack $dealer) {

    if (!$player->getMyTurn()) {

        if($player->getScore() > BLACKJACK || (
           $dealer->getScore() > $player->getScore() && $dealer->getScore() <= BLACKJACK)) {

            return "Dealer wins, you loose.";

        } elseif ($dealer->getScore() == $dealer->getScore() &&
                  $player->getScore() <= BLACKJACK && empty($_POST["surrender"])) {

            return "It's a draw.";

        } elseif ((($player->getScore() > $dealer->getScore() && $player->getScore() <= BLACKJACK) ||
                   $dealer->getScore() > BLACKJACK) && empty($_POST["surrender"])) {

            return "You surrendered, dealer wins.";

        } else {

            return "";

        }

    } else {

        return "";

    }

}


session_start();
if (empty($_POST)) {
    $player = new Blackjack(0, true);
    $dealer = new Blackjack(0, true);

    $_SESSION["player"] = $player;
    $_SESSION["dealer"] = $dealer;

} else {
    if (!empty($_POST["hit"])) {

        $player = $_SESSION["player"];
        $dealer = $_SESSION["player"];

        $player->hit();

        if ($player->getScore() == BLACKJACK) {
            $player->stand();
            $dealer->setMyTurn(true);
            $dealer->hit();
            $dealer->hit();
        }
        echo "<h1>" . displayOutcome($player, $dealer) . "</h1>";

    } elseif (!empty($_POST["stand"])) {

        $player = $_SESSION["player"];
        $dealer = $_SESSION["player"];

        if ($player->getMyTrun()) {

            $player->stand();
            $dealer->setMyTurn(true);

            if ($player->getScore() <= BLACKJACK) {

                while ($dealer->getScore() < DEALER_MAX) {

                    $dealer->hit();

                }

                $dealer->stand();
                echo "<h1>" . displayOutcome($player, $dealer) . "</h1>";

            }

        }


    } elseif (!empty($_POST["surrender"])) {

        $player = $_SESSION["player"];
        $dealer = $_SESSION["player"];

        if ($player->getMyTurn()) {

            $player->surrender();
            echo "<h1>". displayOutcome($player, $dealer) ."</h1>";

        }

    } else {

        $player = new Blackjack(0, true);
        $dealer = new Blackjack(0, true);

        $_SESSION["player"] = $player;
        $_SESSION["dealer"] = $dealer;
    }
}





/*
$_SESSION["newSession"] = 'player' . 'dealer';
// $_SESSION["newSession"] = array($player) . array($dealer);

$playerMessage = "";
$dealerMessage = "";
$surrenderMessage = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if ($player['totalPoints'] < 22) {
        if($_POST['hit'] == 'HIT') {
             $func = "player::hit";
             $func();
        }
        if($_POST['stand'] == 'STAND') {
            $func = "dealer::stand";
            $func();
        }
    }
    if ($_POST['surrender'] == 'SURRENDER') {
        $func = "dealer::surrender";
        $func();
        $surrenderMessage = "You surrendered. The dealer wins!";
    }
}

if ($player['totalPoints'] == 21) {
    $playerMessage = 'Blackjack!';
} elseif ($player['totalPoints'] > 21) {
    $playerMessage = 'Busted!';
} elseif ($dealer['totalPoints'] == 21) {
    $dealerMessage = 'Blackjack!';
} elseif ($dealer['totalPoints'] > 21) {
    $dealerMessage = 'Busted!';
} elseif ($player['totalPoints'] > $dealer['totalPoints']) {
    $playerMessage = 'You won!';
} else {
    $dealerMessage = 'Dealer wins!';
}
*/
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        th, td {
            border: 1px solid darkolivegreen;
        }
    </style>
</head>
<body>
<form action="<?php echo $_SERVER["PHP_SELF"]; ?>" method="post" >
    <table>
        <tr>
            <th colspan="2">Blackjack / 21</th>
            <th>Player</th>
            <th>Dealer</th>
        </tr>
        <tr>
            <td colspan="2">
                <input type="submit" name=hit" value="HIT" class="playButton">
            </td>
            <td rowspan="3">hand: <?php echo $player -> getScore();?></td>
            <td rowspan="3">hand: <?php echo $dealer -> getScore();?></td>
        </tr><tr>
            <td colspan="2">
                <input type="submit" name="stand" value="STAND" class="playButton">
            </td>
        </tr><tr>
            <td colspan="2">
                <input type="submit" name="surrender" value="SURRENDER" class="playButton">
            </td>
        </tr>
        </tr><tr>
            <td colspan="2">
                <input type="submit" name="play again" value="PLAY AGAIN" class="playButton">
            </td>
            <td colspan="2">
                <h4><?php displayOutcome($player, $dealer) ?></h4>
            </td>
        </tr>
    </table>
</form>

</body>
</html>
