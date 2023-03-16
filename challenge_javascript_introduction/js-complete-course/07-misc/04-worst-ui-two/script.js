/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("part-one").addEventListener("click", function () {

        let numberOne = Number(document.getElementById("part-one").innerText);
        let numberOneMin = Number(document.getElementById("part-one").getAttribute("data-min"));
        let numberOneMax = Number(document.getElementById("part-one").getAttribute("data-max"));
        console.log(numberOne, numberOneMax, numberOneMin);

        for  (let i = 0; i <= 499; i++) {
            document.getElementById("target").innerHTML = numberOne + i;
        }
    });

    document.getElementById("part-two").addEventListener("click", function () {

        for  (let i = 0; i <= 99; i++) {

            let numberTwo = Number(document.getElementById("part-two").innerText);
            let numberTwoMin = String(document.getElementById("part-two").getAttribute("data-min"));
            let numberTwoMax = Number(document.getElementById("part-two").getAttribute("data-max"));
            console.log(numberTwo, numberTwoMin, numberTwoMax);

            document.getElementById("target").innerHTML = numberOne + i;
        }

    });

    document.getElementById("part-three").addEventListener("click", function () {
        let numberThree = Number(document.getElementById("part-three").innerText);
        let numberThreeMin = String(document.getElementById("part-three").getAttribute("data-min"));
        let numberThreeMax = Number(document.getElementById("part-three").getAttribute("data-max"));
        console.log(numberThree, numberThreeMin, numberThreeMax);

        for  (let i = 0; i <= 99; i++) {
            document.getElementById("target").innerHTML = numberOne + i;
        }
    });

    document.getElementById("part-four").addEventListener("click", function () {
        let numberFour = Number(document.getElementById("part-four").innerText);
        let numberFourMin = String(document.getElementById("part-four").getAttribute("data-min"));
        let numberFourMax = Number(document.getElementById("part-four").getAttribute("data-max"));
        console.log(numberFour, numberFourMin, numberFourMax);

        for  (let i = 0; i <= 99; i++) {
            document.getElementById("target").innerHTML = numberOne + i;
        }
    });

    let endNumber = "0" + document.getElementById("part-one").value +
        document.getElementById("part-two").value + document.getElementById("part-three").value +
        document.getElementById("part-four").value;
        document.getElementById("target").innerHTML = endNumber;

})();


/*
        let numberOneMin = buttonOne.getAttribute("data-min").value;
        let numberOneMax = buttonOne.getAttribute("data-max").value;

        let numberTwoMin = buttonTwo.getAttribute("data-min").value;
        let numberTWoMax = buttonTwo.getAttribute("data-max").value;

        let numberThreeMin = buttonThree.getAttribute("data-min").value;
        let numberThreeMax = buttonThree.getAttribute("data-max").value;

        let numberFourMin = buttonFour.getAttribute("data-min").value;
        let numberFourMax = buttonFour.getAttribute("data-max").value;
 */