/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here


    document.getElementById('run').addEventListener('click', function () {

        var givenyear = document.getElementById('year').value;
        var precentyear = new Date(givenyear, 0,13);

        var monthnames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        var text = "";

        for (let i = 0; i < 12; i++) {
            precentyear.setMonth(i);
            if (precentyear.getDay() === 5) {
                text +=  monthnames[precentyear.getMonth()] + " ";
            }
        }
        alert('In ' + givenyear + ' there was a Friday the 13th in the month(s) ' + text);

    });

})();
