/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

    var today = new Date().toLocaleTimeString('en-GB', { hour: "numeric",
        minute: "numeric"});

prompt(today);

    if (today <= '18:00') {
        document.getElementById("target").innerHTML = "Hello. (It's before 18h)";
    }

    else {
        document.getElementById("target").innerHTML = "Good evening";
    }




})();
