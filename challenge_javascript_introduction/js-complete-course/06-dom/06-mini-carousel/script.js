/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let gallery = [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    let image = document.querySelector("img");
    const button = document.getElementById("next");
    let i = 0;

    // your code here
    document.getElementById("next").addEventListener("click", function () {


        button.addEventListener("click", function () {
        if (i < gallery.length - 1) {
            i++;
            x.[0].src = gallery[i]);
        } else {
            i = 0;
            x.[0].src = gallery[i]);
        }
        }
    });


})();


/*
<script>
    var imgReplace = document.getElementsByClassName("myImg")[0];
    imgReplace.src = "hackanm.gif";
    imgReplace.style.visibility = "visible";
</script>
 */
