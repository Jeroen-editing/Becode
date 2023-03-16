/* becode/javascript
 *
 * /05-arrays/08-array-includes/script.js - 5.8: présence dans un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "kiwi",
        "banane",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here

    document.getElementById("run").addEventListener("click", function () {

        function check() {
            for (let i = 0; i < fruits.length; i++) {
                if (fruits.includes("ananas")) {
                    console.log("There's 'an' ananas in the list!");
                } else {
                    console.log("There's 'no' ananas in the list!");
                }
            }
        }
        check();

    });

})();
