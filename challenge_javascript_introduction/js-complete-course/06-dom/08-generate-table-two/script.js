/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    function tableCreate() {
        //body reference
        let table = document.getElementById("target");

        // create elements <table> and a <tbody>
        let tbl = document.createElement("table");
        let tblBody = document.createElement("tbody");

        // cells creation
        for (let j = 0; j <= 10; j++) {
            // table row creation
            let row = document.createElement("tr");

            for (let i = 0; i <= 10; i++) {
                // create element <td> and text node
                //Make text node the contents of <td> element
                // put <td> at end of the table row
                let cell = document.createElement("td");

                let text = [''];
                for (let x = 0; x <= 10; x++) {
                    text = (i + ' * ' + j + ' = ' + i * j);
                }
                let cellText = document.createTextNode('' + text + '');

                cell.appendChild(cellText);
                row.appendChild(cell);
            }


            //row added to end of table body
            tblBody.appendChild(row);
        }

        // append the <tbody> inside the <table>
        tbl.appendChild(tblBody);
        // put <table> in the <body>
        table.appendChild(tbl);
        // tbl border attribute to
        tbl.setAttribute("border", "2");
    }
    tableCreate();

})();
