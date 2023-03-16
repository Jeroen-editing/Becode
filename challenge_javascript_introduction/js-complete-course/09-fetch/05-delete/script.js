/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
   document.getElementById("run").addEventListener("click", function () {

       let heroId = Number(document.getElementById("hero-id").value);
       console.log(heroId);

       fetch("http://localhost:63342/challenge-javascript-1/js-complete-course/_shared/api.json")
           .then(function (response) {
               return response.json();
           })
           .then(function (list) {
               console.log(list);

               let index = heroId - 1;
               list.heroes.splice(index, 1);
               console.log(index);
           })
   })
})();
