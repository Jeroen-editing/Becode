/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function x() {

        var age = prompt("Hello, what's your age?");
        var gender = prompt("And are you a male or female?");
        var town = prompt("From wich town are you");

        var answer = confirm("So your age is " + age + ",  you are a " + gender + " and you live in " + town + "?");

        if (answer === false)  {

            x() }

})();
