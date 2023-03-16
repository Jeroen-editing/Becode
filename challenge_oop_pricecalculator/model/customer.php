<?php
declare(strict_types=1);


class Customer
{
    private $id;
    private $name;
    private $group;

    public function __construct(int $_id, string $_name, int $_group) {
        // function to create objects and pass the parameters
        // pass the parameters to the objects from the class id, name, group

        $this->id = $_id;
        $this->name = $_name;
        $this->group = $_group;

    }

    public function getId(): int {
        // method to get the private property: id

        return $this->id;

    }

    public function getName(): string {

        return $this->name;

    }

    public function getGroup(): int {

        return $this->group;

    }
}
