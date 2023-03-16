/* becode/javascript
 *
 * /10-asynchronous/03-handling-errors/script.js - 10.3: gestion d'erreur
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let allPeople;

    document.getElementById("run").addEventListener("click", function () {

        window.lib.getPersons(function (error, people) {

            if (error) {

                console.error('Yes, you got an ' + error)

            }   else {

                    allPeople = people;
                    console.log('This are all the people from getPeople:');
                    console.log(allPeople);

            }

        })

    })
})();
