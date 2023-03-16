/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    document.getElementsByTagName("input")[0].style.border ="2px solid #0A9AC2";
    document.getElementsByTagName("input")[1].style.border ="2px solid #0A9AC2";

    
    const compare = function() {
            if (passOne != passTwo) {

                document.getElementsByTagName("input")[0].style.border ="2px solid red";
                document.getElementsByTagName("input")[1].style.border ="2px solid red";

            } else {

                document.getElementsByTagName("input")[0].style.border ="2px solid green";
                document.getElementsByTagName("input")[1].style.border ="2px solid green";

            }

        };
    // your code here
    document.getElementById("run").addEventListener("click", function() {

        let passOne = document.getElementById("pass-one").value;
        // console.log(passOne);
        let passTwo = document.getElementById("pass-two").value;
        // console.log(passTwo);
        // console.log(passOne != passTwo);

        compare();

    })



})();
