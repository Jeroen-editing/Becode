<?php


class HomeController {

    public function messageRender($_date) {

        $newGuest = new Post('title', 'date', 'content', 'authorName', 'authorFirstName');

        $title = $newGuest->getTitle();
        $date = $newGuest->getDate();
        $content = $newGuest->getContent();
        $authorName = $newGuest->getAuthorName();
        $authorFirstName = $newGuest->getAuthorFirstName();

        $oldPosts = new PostLoader();

        $message= $oldPosts->loadByDate($_date);

        $allMessages = $oldPosts->loadMessages();


        require 'View/Home.php';

    }

}

