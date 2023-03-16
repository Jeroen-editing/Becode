<?php

require '../connection.php';

$sql = openConnection()->query('SELECT * FROM student ')->fetchAll();
foreach ($sql as $ticket) {
    echo "  
    <tbody>   
    <tr>
    <td>{$ticket['first_name']}</td>
    <td>{$ticket['last_name']}</td>
    <td>{$ticket['gender']}</td>
    <td>{$ticket['email']}</td>
    <td>{$ticket['linkedin']}</td>
    <td>{$ticket['github']}</td>
    <td>{$ticket['preferred_language']}</td>
    <td>{$ticket['id']}</td>    
    </tr>\n </tbody>";
}
?>

    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
              integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
                integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
                crossorigin="anonymous"></script>
        <title>Becode / View student list</title>
        <style>
            td {
                width: 200px;
                text-align: left;
                border: 2px solid darkolivegreen;
            }
            th {
                width: 200px;
                text-align: right;
                border: 2px solid darkolivegreen;
            }
        </style>
        <title>Document</title>
    </head>
    <body>

        <table>
            <tr>
                <th>First Name</th>
            </tr>
            <tr>
                <th>Last Name</th>
            </tr>
            <tr>
                <th>Gender</th>
            </tr>
            <tr>
                <th>Username</th>
            </tr>
            <tr>
                <th>LinkedIn</th>
            </tr>
            <tr>
                <th>Github</th>
            </tr>
            <tr>
                <th>E-mail</th>
            </tr>
            <tr>
                <th>Preferred Language</th>
            </tr>
        </table>
        <br>


        <label for="insert">Add new student:
            <a class="btn btn-outline-success m-4" href="../insert.php" role="button" id="insert">Go to page</a>
        </label><br>

        </body>
    </html>

<?php





/*
$query = mysqli_query($dbconnect, "SELECT * FROM user_review")
or die (mysqli_error($dbconnect));

while ($row = mysqli_fetch_array($query)) {
    echo
    "<tr>
        <td>{$row['reviewer_name']}</td>
        <td>{$row['star_rating']}</td>
        <td>{$row['details']}</td>
    </tr>\n";

}
*/
?>