/* becode/javascript
 *
 * /06-dom/01-select-one/script.js - 6.1: sélection par id
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let sentence = [' '];
    sentence = document.getElementById("target").textContent;
    console.log(sentence)

    let newSentence = [' '];
    newSentence = (sentence.slice(0, 10) + 'owned' + sentence.slice((sentence.length - 4), sentence.length));
    console.log(newSentence);

    document.getElementById("target").innerHTML = newSentence;


})();
