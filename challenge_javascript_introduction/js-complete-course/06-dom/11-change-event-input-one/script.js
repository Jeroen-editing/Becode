/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here


    document.getElementById("pass-one").addEventListener("input", keyStrike);

    let i = 0;

    function keyStrike() {


        console.log(i);
        if (i < 9) {

            i = i + 1;
            console.log(i);
            let newCount = (i + '/10');
            document.getElementById("pass-one").style.border = "2px solid green";
            document.getElementById("counter").innerHTML = newCount;
            console.log(i);

        } else {

            let maxInput = 'maximum input reached';
            document.getElementById("pass-one").style.border = "2px solid red";
            document.getElementById("counter").innerHTML = maxInput;
            document.getElementById("pass-one").disabled = true;

        }
        console.log(i);
    }

})();
