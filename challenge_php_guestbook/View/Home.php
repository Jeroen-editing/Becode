<?php
declare(strict_types=1);


?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

    <style>
        fieldset {
            width: 500px;
        }

    </style>
</head>
<body>

<form method="post" action="../Model/Post.php">
    <fieldset>
        <label>Title
            <input type="text" name="title">
        </label>
        <label>Data
            <input type="date" name="date">
        </label>
    </fieldset>
    <label>Message
        <textarea name="content" rows="20" cols="62"></textarea>
    </label>
    <fieldset>
        <label>Name
            <input type="text" name="name" placeholder="Name">
        </label><br>
        <label>First Name
            <input type="text" name="firstName" placeholder="First name">
        </label><br>
        <button type="submit" name="submit">Save Message</button>
    </fieldset>
</form>

<div class="dropdown">
    <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
        <li role="presentation">Title</li>
        <?php foreach($this->allMessages AS $message):?>
            <li role="presentation"> <?php echo $message->getTitle() . '<br>';?></li>
        <?php endforeach;?>
        <li role="presentation">Date</li>
        <?php foreach($this->allMessages AS $message):?>
            <li role="presentation"> <?php echo $message->getDate() . '<br>';?></li>
        <?php endforeach;?>
        <li role="presentation">Message</li>
        <?php foreach($this->allMessages AS $message):?>
            <li role="presentation"> <?php echo $message->getContent() . '<br>';?></li>
        <?php endforeach;?>
        <li role="presentation">Message</li>
        <?php foreach($this->allMessages AS $message):?>
            <li role="presentation"> <?php echo $message->getAuthorName() . '<br>';?></li>
        <?php endforeach;?>
        <li role="presentation">Message</li>
        <?php foreach($this->allMessages AS $message):?>
            <li role="presentation"> <?php echo $message->getAuthorFirstName() . '<br>';?></li>
        <?php endforeach;?>
    </ul>
</div>



</body>
</html>
