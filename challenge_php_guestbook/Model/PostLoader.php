<?php
declare(strict_types=1);


class PostLoader {

    private $messages = [];

    public function __construct() {

        $json = json_decode(file_get_contents('Data/myGuestBook.json'));

        foreach ($json AS $messagesJson) {

            $this->messages[$messagesJson['date']] = new Post($messagesJson['title'], $messagesJson['date'], $messagesJson['content'], $messagesJson['authorName'], $messagesJson['authorFirstName']);

        }

    }

    public function loadByDate($_date): Post {

        return $this->messages[$_date];
    }


    public function loadMessages(): array {

        return $this->messages;

    }

}