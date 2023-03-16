document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    pokeName = document.querySelector("input").value;
    Powkemon();

});

function Powkemon() {
    searchPokemon();
}


// fetch pokemon user input
function searchPokemon() {

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`,
        {mode: "cors"}
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            //


            let imageholder = document.querySelector("#front-sprite");
            let imageSRC = response.sprites.front_default;
            imageholder.setAttribute('src', imageSRC);
            document.querySelector("#poke-name").innerHTML = response.name;
            document.querySelector("#poke-id").innerHTML = "N°" + response.id;

            document.querySelector("#weight").innerHTML = "weight:" + " " + response.weight + "kg";
            document.querySelector("#height").innerHTML = "height:" + " " + response.height;

            let firstType =  document.querySelector("#poke-type-one");
            let secondType =  document.querySelector("#poke-type-two");

            if (firstType !== secondType) {
                firstType.innerHTML = response.types[0].type.name;
                secondType.innerHTML = response.types[1].type.name;
            } else {
                firstType.innerHTML = response.types[1].type.name;
            }

            console.log(response.types[1].type.name);
            console.log(response.types[0].type.name);

            // Display 4 different moves by shuffling pokemon moves array and picking out 4 random moves
            let pokeMoves = response.moves;
            let fourMoves = [];

            for (let i = 0; i < 4; i++) {
                min = Math.ceil(1);
                max = Math.floor(pokeMoves.length);
                let aMove = Math.floor(Math.random() * (max - min) + min);
                let arrayRandomMoves = pokeMoves.slice(aMove, aMove + 1);
                let differentMoves = arrayRandomMoves[0].move.name;
                fourMoves.push(differentMoves.toString());

            }

            document.getElementById("moveOne").innerHTML = fourMoves[0];
            document.getElementById("moveTwo").innerHTML = fourMoves[1];
            document.getElementById("moveThree").innerHTML = fourMoves[2];
            document.getElementById("moveFour").innerHTML = fourMoves[3];


// fetch pokemon species to get data of previous evolution
            let pokeSpecies = response.species.url;

            fetch(`${pokeSpecies}`,
                {mode: "cors"}
            )
                .then(function (data) {
                    return data.json();
                })
                .then(function (data) {

                    let habitat = data.habitat.name;
/*
                    switch(habitat) {
                        case "cave":
                            bgImg = "/img/cave.jpg";
                            break;
                        case "forest":
                            bgImg = "/img/forest.png";
                            break;
                        case "grassland":
                            bgImg = "/img/grassland.png";
                            break;
                        case "mountain":
                            bgImg = "/img/mountain.png";
                            break;
                        case "rare":
                            bgImg = "/img/terrain.jpeg";
                            break;
                        case "rough-terrain":
                            bgImg = "/img/rough.png";
                            break;
                        case "sea":
                            bgImg = "./img/sea.png";
                            break;
                        case "urban":
                            bgImg = "./img/urban.jpg";
                            break;
                        case "waters-edge":
                            bgImg = "./img/sea.png";
                            break;
                        default:
                            console.log("no habitat found");
                        // code block
                    }


                    console.log(bgImg);
                    let holdHabitat =  document.querySelector("#habitat");
                    let habSRC = bgImg;
                    holdHabitat.setAttribute('src', habSRC);
                */

                    document.getElementById("getEvolution").addEventListener("click", function () {

                    let babyPoke = data.evolves_from_species.name;

                    if (babyPoke === null) {
                        let noEvo = "There is no previous evolution";
                        document.querySelector(".moves").innerHTML = noEvo;
                    } else {

                        fetch(`https://pokeapi.co/api/v2/pokemon/${babyPoke}`,
                            {mode: "cors"}
                        )
                            .then(function (answer) {
                                return answer.json();
                            })
                            .then(function (answer) {

                                document.querySelector("#poke-name").innerHTML = answer.name;
                                let holdImage = document.querySelector("#front-sprite");
                                let evoSRC = answer.sprites.front_default;
                                holdImage.setAttribute('src', evoSRC);

                                document.querySelector("#poke-id").innerHTML = "N°" + (answer.id);


                                let evopokeMoves = answer.moves;
                                let evofourMoves = [];

                                for (let i = 0; i < 4; i++) {
                                    min = Math.ceil(1);
                                    max = Math.floor(evopokeMoves.length);
                                    let evoaMove = Math.floor(Math.random() * (max - min) + min);
                                    let evoarrayRandomMoves = evopokeMoves.slice(evoaMove, evoaMove + 1);
                                    let evodifferentMoves = evoarrayRandomMoves[0].move.name;
                                    evofourMoves.push(evodifferentMoves.toString());

                                }
                                document.querySelector("input").value = answer.name;
                                document.getElementById("moveOne").innerHTML = evofourMoves[0];
                                document.getElementById("moveTwo").innerHTML = evofourMoves[1];
                                document.getElementById("moveThree").innerHTML = evofourMoves[2];
                                document.getElementById("moveFour").innerHTML = evofourMoves[3];

                                document.querySelector("#poke-type-one").innerHTML = answer.types[0].type.name;
                                document.querySelector("#poke-type-two").innerHTML = answer.types[1].type.name;
                                document.querySelector("#weight").innerHTML = "weight:" + " " + answer.weight + "kg";
                                document.querySelector("#height").innerHTML = "height:" + " " + answer.height;

                                let firstType =  document.querySelector("#poke-type-one");
                                let secondType =  document.querySelector("#poke-type-one");

                                if (firstType !== secondType) {
                                    firstType.innerHTML = answer.types[0].type.name;
                                    secondType.innerHTML = answer.types[1].type.name;
                                } else {
                                    firstType.innerHTML = answer.types[1].type.name;
                                }


                            })
                            .catch(function (err) {
                                console.log(err);
                            });
                    }




                })
                .catch(function (err) {
                    alert("This pokemon has never been caught before, please let us know if you do");
                });

        })

});
}

