<?php


class Post {


    private $title;
    private $date;
    private $content;
    private $authorName;
    private $authorFirstName;


    public function __construct(string $_title, string $_date, string $_content, string $_authorName, string $_authorFirstName) {

        $this->title = $_title;
        $this->date = $_date;
        $this->content = $_content;
        $this->authorName = $_authorName;
        $this->authorFirstName = $_authorFirstName;

        $additionalArray = array('title' => $_title, 'date' => $_date, 'content' => $_content, 'authorName' => $_authorName, 'authorFirstName' => $_authorFirstName);

        //open or read json Data
        $data_results = file_get_contents('myGuestBook.json');
        $tempArray = json_decode($data_results);

        //append additional json to json file
        $tempArray[] = $additionalArray ;
        $jsonData = json_encode($tempArray);

        file_put_contents('myGuestBook.json', $jsonData);

    }

    public function getTitle(): string {

        return $this->title;
    }

    public function getDate(): string {

        return $this->date;
    }

    public function getContent(): string {

        return $this->content;
    }

    public function getAuthorName(): string {

        return $this->authorName;
    }

    public function getAuthorFirstName(): string {

        return $this->authorFirstName;
    }
}