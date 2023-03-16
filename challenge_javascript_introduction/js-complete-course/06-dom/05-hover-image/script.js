/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    var logo = document.getElementsByTagName("img")[0];

    var picOne = logo[0].document.getAttribute("data-hover");
    var picTwo = logo[0].document.getAttribute("src");

    console.log(picOne, picTwo);

    logo[0].createAttribute(onmouseover).src = picOne;


    logo[0].createAttribute(onmouseout).src = picTwo;


})();

