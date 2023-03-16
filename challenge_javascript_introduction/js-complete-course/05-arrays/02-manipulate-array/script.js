/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = ["pomme ", "poire ", "fraise ", "tomate ", "orange ",
        "mandarine ", "durian ", "pêche ", "raisin ", "cerise "];

    // your code here
    prompt('We need to do some changes to this array, click -OK- and -Run the script- to continue: ' + fruits)

    document.getElementById("run").addEventListener("click", function () {
        var first = fruits.shift();
        var last = fruits.pop()
        var newLength = fruits.unshift("banana ");
        var newLength = fruits.push("kiwi ");

        prompt( "The new array is: " + fruits);
    });
})();
