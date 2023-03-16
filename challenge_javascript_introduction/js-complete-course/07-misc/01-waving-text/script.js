/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    let target = document.getElementById("target");

    let wave = "Woo-hoo! I'm making waves! Wéééé!" + "Oh ... I think I'm having seasickness ...";

    target.innerHTML = "";

    let pos = 0; // counter


    for (let i = 0; i < wave.length; i++) {

        let char = wave.charAt(i);

        pos++;

        if (pos === 1) {
            char = '<span class="1">' + char + '</span>';
        }

        if (pos === 2 || pos === 8) {
            char = '<span class="2">' + char + '</span>';
        }

        if (pos === 3 || pos === 7) {
            char = '<span class="3">' + char + '</span>';
        }

        if (pos === 4 || pos === 6) {
            char = '<span class="4">' + char + '</span>';
        }

        if (pos === 5) {
            char = '<span class="5">' + char + '</span>';
        }

        if (pos === 8) {
            pos = 0;
        }

        target.innerHTML += char;

    }

    let first = document.getElementsByClassName("1");
    for (let j = 0; j < first.length; j++) {
            first[j].style.fontSize = "1em";
    }

    let second = document.getElementsByClassName("2");
    for (let j = 0; j < second.length; j++) {
        second[j].style.fontSize = "1.75em";
    }

    let third = document.getElementsByClassName("3");
    for (let j = 0; j < third.length; j++) {
        third[j].style.fontSize = "2.5em";
    }

    let fourth = document.getElementsByClassName("4");
    for (let j = 0; j < fourth.length; j++) {
        fourth[j].style.fontSize = "3.25em";
    }

    let fifth = document.getElementsByClassName("5");
    for (let j = 0; j < fifth.length; j++) {
        fifth[j].style.fontSize = "4em";
    }

})();
