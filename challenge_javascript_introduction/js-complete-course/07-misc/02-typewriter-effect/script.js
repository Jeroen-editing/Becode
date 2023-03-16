/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let target = document.getElementById("target");

    let typing = "I'm a text that appears in a 'typewriter effect', a bit like in the 'black and white' movies."
        +  "But that doesn't mean I'm the murderer." + "And is there really on?"
        + "Does het live at 21?" + "It's a real mystery!"

    target.innerHTML = "";

    let pos = 0;


    for (let i = 0; i < target.length; i++) {

        let char = typing.charAt(i);
        pos++;

        let randomDelay = function getRandomTime() {
            return Math.floor(Math.random() * 1000);
        };
        console.log(randomDelay());

        let timeOutOne = setTimeout(function() {
            let first = document.getElementsByClassName("1");
            for (let j = 0; j < first.length; j++) {
                first[j].style.fontFamily = "american typewriter"
            }}, 1 * randomDelay);



        if (pos === 1 || pos === 3) {
            char = '<span class="1">' + char + '</span>';
            timeOutOne.document.getElementById("target").innerHTML = char;
        }

        if (pos === 2 || pos === 6) {
            char = '<span class="2">' + char + '</span>';
        }

        if (pos === 4 || pos === 8) {
            char = '<span class="3">' + char + '</span>';
        }

        if (pos === 5 || pos === 7) {
            char = '<span class="4">' + char + '</span>';
        }

        if (pos === 8) {
            pos = 0;
        }

    }


})();
