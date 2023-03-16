<?php

require 'connection.php';



if(isset($_POST['firstName'], $_POST['lastName'], $_POST['gender'], $_POST['userName'], $_POST['linkedin'],
    $_POST['github'], $_POST['email'], $_POST['preferredLanguage'], $_POST['avatar'], $_POST['video'], $_POST['quote'],
    $_POST['quoteAuthor'], $_POST['createdAt'])) {


    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $gender = $_POST['gender'];
    $userName = $_POST['userName'];
    $likedin = $_POST['linkedin'];
    $github = $_POST['github'];
    $email = $_POST['email'];
    $preferredLanguage = $_POST['preferredLanguage'];
    $avatar = $_POST['avatar'];
    $video = $_POST['video'];
    $quote = $_POST['quote'];
    $quoteAuthor = $_POST['quoteAuthor'];



    // Create the connection (by connection.php)
    $sql = OpenConnection()->prepare("
            INSERT INTO student (first_name, last_name, gender, user_name, linkedin, github, email, preferred_language, 
            avatar, video, quote, quote_author, created_at) 
            VALUES (:first_name, :last_name, :gender, :user_name, :likedin, :github, :email, :preferred_language, :avatar, 
            :video, :quote, :quote_author, now()");

        $sql->bindParam(':first_name', $lastName);
        $sql->bindParam(':last_name', $firstName);
        $sql->bindParam(':user_name', $userName);
        $sql->bindParam(':gender', $gender);
        $sql->bindParam(':email', $email);
        $sql->bindParam(':linkedin', $linkedin);
        $sql->bindParam(':github', $github);
        $sql->bindParam(':preferred_language', $preferredLanguage);
        $sql->bindParam(':avatar', $avatar);
        $sql->bindParam(':video', $video);
        $sql->bindParam(':quote', $quote);
        $sql->bindParam(':quote-author', $quoteAuthor);
        $sql->bindParam(':created_at', now());

        $sql->execute();

        echo "New record created successfully";

}
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Becode / Add student</title>
    <style>
        label, h1 {
            margin-left: 40px;
        }
        button {
            height: 36px;
            width: 200px;
            padding-top: 4px;
            font-size: 22px;
            font-weight: bold;
            border-radius: 4px;
            background-color: lightseagreen;
        }
    </style>
</head>
<body>

<div class="container">
    <h1 class="jumbotron-heading">Student Registration Form</h1>
    <form method="post">
        <label for="firstName">First Name:
            <input name="firstName" class="form-control mb-1" required>
        </label>
        <label for="lastName">Last Name:
            <input name="lastName" class="form-control mb-1" required>
        </label><br><br>

        <label for="userName">Username:
            <input name="userName" class="form-control mb-1" required>
        </label>
        <label for="gender">Gender:
            <select name="gender" class="form-control mb-1" required>
                <option value="Male" selected>Male</option>
                <option value="Female">Female</option>
            </select>
        </label><br><br>

        <label for="email">E-mail:
            <input name="email" class="form-control mb-1" required>
        </label>
        <label for="preferredLanguage">Preferred Language:
            <select name="preferredLanguage" class="form-control mb-1">
                <optgroup label="Western languages" style="font-style: italic">
                    <option value="Du" selected>Dutch</option>
                    <option value="En">English</option>
                    <option value="Fr">French</option>
                    <option value="It">Italian</option>
                    <option value="Sp">Spanish</option>
                </optgroup>
                <optgroup label="Eastern languages" style="font-style: italic">
                    <option value="Tu">Turkish</option>
                    <option value="Ar">Arabic</option>
                    <option value="Ch">Chinese</option>
                    <option value="Ja">Japanese</option>
                </optgroup>
            </select>
        </label><br><br>

        <label for="linkedin" >Linkedin Account:
            <input name="linkedin" class="form-control mb-1" required>
        </label>
        <label for="github">Github Account:
            <input name="github" class="form-control mb-1" required>
        </label><br><br>

        <label for="avatar">Avatar:
            <input name="avatar" class="form-control mb-1" value="https://belikebill.ga/billgen-API.php?default=1&name=yourname&sex=f" required>
        </label>
        <label for="video">Video:
            <input name="video" class="form-control mb-1" required>
        </label><br><br>

        <label for="quote">Quote:
            <input name="quote" class="form-control mb-1">
        </label>
        <label for="quoteAuthor">Quote Author:
            <input name="quoteAuthor">
        </label><br><br>

        <label for="submit">Add to list:
            <button type="submit" name="submit" class="btn btn-success">ADD STUDENT</button>
        </label><br><br>

        <label for="view">View students list:
            <a class="btn btn-outline-success m-4" href="view/view.php" role="button" id="view">Go to page</a>
        </label>
    </form>

</body>
</html>
