/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here



        fetch("http://localhost:63342/challenge-javascript-1/js-complete-course/_shared/api.json")
            .then(function (response) {
                return response.json();
            })
            .then((function (list) {

                console.log(list);
                let temp = document.getElementById("tpl-hero");
                let target = document.getElementById("target");
                let input = document.getElementById("hero-id");
                let name = temp.content.querySelector("strong");
                let alterEgo = temp.content.querySelector("em");
                let abilities = temp.content.querySelector("p");

                document.getElementById("run").addEventListener("click", function () {

                    let i = input.value;

                    name.innerHTML = list.heroes[i].name;
                    abilities.innerHTML = list.heroes[i].abilities;
                    alterEgo.innerHTML = list.heroes[i].alterEgo;


                    let clone = temp.content.cloneNode(true);
                    target.appendChild(clone);

                });

            }));

})();
