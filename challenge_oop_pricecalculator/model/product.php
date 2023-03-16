<?php

declare(strict_types=1);


class Product {

    private $id;
    private $name;
    private $description;
    private $price;



    public function __construct($_id, $_name, $_description, $_price) {

        $this->id = $_id;
        $this->name = $_name;
        $this->description = $_description;
        $this->price = $_price;

    }

    public function getId() {

        /*return*/ $this->id;

    }


    public function getName() {

        /*return*/ $this->name;

    }

    public function getDescription() {

        /*return*/ $this->description;

    }

    public function getPrice() {

        /*return*/ $this->price;

    }

}