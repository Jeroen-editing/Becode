/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
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

            document.getElementById("run").addEventListener("click", function () {

                let temp = document.getElementById("tpl-hero");
                let target = document.getElementById("target");
                let name = temp.content.querySelector("strong");
                let alterEgo = temp.content.querySelector("em");
                let abilities = temp.content.querySelector("p");


                list.heroes.forEach((heroes, index) => {
                    name.innerHTML = list.heroes[index].name;
                    abilities.innerHTML = list.heroes[index].abilities;
                    alterEgo.innerHTML = list.heroes[index].alterEgo;
                    let clone = temp.content.cloneNode(true);
                    target.appendChild(clone);
                    });


            });
        }))
})();