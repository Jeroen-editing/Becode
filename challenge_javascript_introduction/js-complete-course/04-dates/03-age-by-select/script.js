/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    // your code here


    document.getElementById("run").addEventListener("click", function() {
        var time = new Date();
        var bday = document.getElementById("dob-day").value;
        var bmonth = document.getElementById("dob-month").value - 1;
        var byear = document.getElementById("dob-year").value;

        var hisage;

        time.setFullYear(byear, bmonth, bday);

        hisage = Math.floor( (Date.now()-time)/(365.25*24*60*60*1000));

        alert('your age is: ' + hisage);

    });


})();
