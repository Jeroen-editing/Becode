/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    Array.from(document.getElementsByTagName("button")).forEach(element) {
        element.addEventListener("click", function () {
            let inputField = element.parentElement.getElementsByTagName("input")[0];
            let rawMin = inputField.getAttribute("data-min");
            let min = +rawMin;
            let max = parseInt(inputField.getAttribute("data-max"));

            /*  SHORTCUT
            let min = +(inputField.getAttribute("data-min"));
            let max = +(inputField.getAttribute("data-max"));
             */

            let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
            inputField.value = String(randomNumber.padStart(rawMin.length, 0));

            document.getElementById("target").innerHTML = "+0" +
                document.getElementById("part-one").value + "." +
                document.getElementById("part-two").value + "." +
                document.getElementById("part-three").value + "." +
                document.getElementById("part-four").value;

            console.log()

        });
    };

})();
