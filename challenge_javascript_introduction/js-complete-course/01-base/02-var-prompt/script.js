/* becode/javascript
 *
 * /01-base/02-var-prompt/script.js - 1.2: var & prompt
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var person = prompt("Please enter your name", "if yo want to proceed");

    if (person != null) {
        document.getElementById("demo").innerHTML =
        alert("Hello " + person + "! How are you today?");
    }

})();
