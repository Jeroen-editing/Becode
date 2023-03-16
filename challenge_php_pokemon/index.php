<?php

declare(strict_type=1);
/*
use function ;
*/
ini_set('display_errors', "1");
ini_set('display_startup_errors', "1");
error_reporting(E_ALL);


define('URL_POKEMON' , "https://pokeapi.co/api/v2/pokemon/");


function getPowers(array $data) {

    $powers = array_rand($data['moves'], min(MAX_MOVES, count($data)));

    foreach ($powers AS $power) {

        $powerName = $data ['moves']['$power']['move']['name'];
        echo '<li>' . ucfirst(str_replace('-', ' ', $powerName)) . '</li>';
}
}

function getEvolutions(array  $data) :? object {
    $evolutions = json_decode(file_get_contents($data['species']['Url']));

    $evolvesFromSpecies = $evolutions->evolves_from_species;
    if($evolvesFromSpecies === null) {
        return null;
    }

    return json_encode((file_get_contents($evolutions)));
}

if (empty ($_GET['pokename'])) {

    $_GET['pokename'] = 1;
}


$data = json_decode(file_get_contents((URL_POKEMON . $_GET['pokename']), true));

if (empty($data['name'])) {

    die('This pokemon does not exist');
}



/*
$json = file_get_contents(URL_POKEMON . '/' . $PokeName);

$PokeName =  $_GET['pokename'];
*/






/*
$name =  fetchapi($api).["name"];
echo "Name: ". $name;
$id = fetchapi(api)["id"];
echo "Id: ". $id;
$weight = fetchapi(api).["weight"];
echo "Weight: ". $weight;
$height = fetchapi(api).["height"];
echo "Height: ". $weight;

$typeOne =  fetchapi(api).["type[0]"];
$typeTwo =  fetchapi(api).["type[1]"];


for ($i = 0; $i < 4; $i++) {

}
*/



?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>pokedex</title>
    <link href="./css/stylesheet.css" rel="stylesheet" type="text/css">
    <link href="https://fPostonts.googleapis.com/css?family=Dosis:700|Fredoka+One&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Gugi&display=swap" rel="stylesheet">
</head>
<body>

<main>
    <div class="container">
        <h1 id="mainTitle">
            Pokedex
        </h1>

        <img src="./img/pokemonSmall.png" id="boyPichu">
        <img src="./img/pokédexSmall.png" id="pokedexImg">

        <div id="screen">
            <form action="index.php" method="Get">
                <input type="text" name="pokename" placeholder="Pokemon name" id="searchField">
                <input type="submit">
            </form>


            <div class="box">
                <img id="front-sprite">
                <img id="habitat">
            </div>
            <div class="outputField" id="poke-name">
                <?php
                echo " Name: ".$data->name;
                echo " Id: "    .$data->id;


                ?>
            </div>
            <div class="outputField" id="poke-id"></div>
            <div class="outputField" id="poke-type-one"></div>
            <div class="outputField" id="poke-type-two"></div>
            <div class="outputField" id="weight"></div>
            <div class="outputField" id="height"></div>
            <div class="Moves">

                    <div class="outputFieldx" id="moveOne"></div>
                    <div class="outputFieldx" id="moveTwo"></div>
                    <div class="outputFieldx" id="moveThree"></div>
                    <div class="outputFieldx" id="moveFour"></div>

            </div>


        </div>
        <div id="buttonID">
            <input type="button"  value="GO" id="getEvolution">
        </div>
    </div>

    </div>

</main>

</body>

</html>

