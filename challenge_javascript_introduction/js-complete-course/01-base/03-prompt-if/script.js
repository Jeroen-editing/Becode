/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var cake = prompt("Do you want some cake, it's the last piece!", "yes or no?");

    if (cake === 'yes') {
        document.getElementById("demo").innerHTML =
            alert("Ok you can take that last piece then or do we share it?");
    }

    else
        alert("Great!!! More cake for me!");

})();