/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", function () {

        let numbersList = [];
            for (let i = 0; i < 10; i++) {
                numbersList.push(Math.floor(Math.random() * 100));
            }

        console.log(numbersList);

            document.getElementById("n-1").innerHTML = numbersList[0];
            document.getElementById("n-2").innerHTML = numbersList[1];
            document.getElementById("n-3").innerHTML = numbersList[2];
            document.getElementById("n-4").innerHTML = numbersList[3];
            document.getElementById("n-5").innerHTML = numbersList[4];
            document.getElementById("n-6").innerHTML = numbersList[5];
            document.getElementById("n-7").innerHTML = numbersList[6];
            document.getElementById("n-8").innerHTML = numbersList[7];
            document.getElementById("n-9").innerHTML = numbersList[8];
            document.getElementById("n-10").innerHTML = numbersList[9];


        let sortedList;
        sortedList = numbersList.sort(function (a, b) {  return a - b;  });
        console.log(sortedList);

        document.getElementById("min").innerHTML = sortedList[0];
        document.getElementById("max").innerHTML = sortedList[9];

        let sumOfAll;
        sumOfAll = numbersList.reduce(function(a, b) { return a + b; }, 0);
        document.getElementById("sum").innerHTML = sumOfAll;
        let avarage = sumOfAll / 10;
        document.getElementById("average").innerHTML = Math.round(avarage);

    });

})();
