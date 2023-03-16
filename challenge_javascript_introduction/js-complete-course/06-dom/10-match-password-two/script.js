/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    // your code here
    
    
    const compare = function () {
            if (passOne === passTwo) {

                document.getElementsByTagName("input")[0].style.border = "2px solid green";
                document.getElementsByTagName("input")[1].style.border = "2px solid green";


            } else if (passOne === "" || passTwo === "") {
                addingClass();
            }
                        
            else {
                addingClass();
            };
    
    document.getElementById("run").addEventListener("click", function() {

        let passOne = document.getElementById("pass-one").value;
        console.log(passOne);
        let passTwo = document.getElementById("pass-two").value;
        console.log(passTwo);
        
        function addingClass() {
                    let elementOne = document.getElementById("pass-one");
                    elementOne.classList.add("error");
                    let elementTwo = document.getElementById("pass-two");
                    elementTwo.classList.add("error");
                }
        
        compare();

    })

})();
