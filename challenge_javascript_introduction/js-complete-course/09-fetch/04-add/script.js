/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here4
    document.getElementById("run").addEventListener("click", function () {
        let newHeroName = document.getElementById("hero-name").value;
        console.log(newHeroName);

        let newHeroEgo =  document.getElementById("hero-alter-ego").value;
        console.log(newHeroEgo);

        let newHeroPowers = document.getElementById("hero-powers").value;
        console.log(newHeroPowers);

        fetch("http://localhost:63342/challenge-javascript-1/js-complete-course/_shared/api.json")
            .then(function (response) {
                return response.json();
            })
            .then((function (list) {
                console.log(list);

                list.heroes.push({"id": list.heroes.length,"name": newHeroName, "alterEgo": newHeroEgo, "abilities": newHeroPowers});
                /*  optional
                list.heroes.push({"id": list.heroes.length + 1,"name": newHeroName, "alterEgo": newHeroEgo, "abilities": newHeroPowers});
                */
                console.log(list);
            }));

    })
})();


/*
Object.assign(obj, {key3: "value3"});
 */