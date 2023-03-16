/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    var x = new Date();

    var weekdays = new Array(7);
    weekdays[0] = 'monday';
    weekdays[1] = 'tuesday';
    weekdays[2] = 'wednesday';
    weekdays[3] = 'thursday';
    weekdays[4] = 'friday';
    weekdays[5] = 'saturday';
    weekdays[6] = 'sunday';
    var day = weekdays[x.getDay()];

    var months = new Array(12);
    months[0] = 'january';
    months[1] = 'february';
    months[2] = 'march';
    months[3] = 'april';
    months[4] = 'may';
    months[5] = 'june';
    months[6] = 'july';
    months[7] = 'august';
    months[8] = 'september';
    months[9] = 'october';
    months[10] = 'november';
    months[11] = 'december';
    var month = months[x.getMonth()];


    document.getElementById("target").innerHTML = 'today it is: ' +
    day + ' ' + x.getDate() + ' ' + month + ' ' + x.getFullYear() + ', ' + x.getHours() + 'h' + x.getMinutes();

})();
