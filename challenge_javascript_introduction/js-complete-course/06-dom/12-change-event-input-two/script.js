/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("pass-one").addEventListener("input", function () {

    let passInput = document.getElementById("pass-one").value;

    let numberCount = new RegExp("[0-9]", "g");
    let resultOne = passInput.match(numberCount);
    console.log(passInput.length);

        if (passInput.length < 8 && resultOne.length <= 2) {

            document.getElementById("pass-one").style.border = "2px solid red";
            document.getElementById("validity").innerHTML = 'Not ok';

        } else if (passInput.length < 8 && resultOne.length >= 3) {

            document.getElementById("pass-one").style.border = "2px solid red";
            document.getElementById("validity").innerHTML = 'To much numbers';

        } else if (passInput.length === 8 && resultOne.length === 2) {

            document.getElementById("pass-one").style.border = "2px solid green";
            document.getElementById("validity").innerHTML = 'Okidoki';

        } else {

            document.getElementById("validity").innerHTML = 'maximum input reached';

        }

        console.log(passInput.length);

    });

})();
