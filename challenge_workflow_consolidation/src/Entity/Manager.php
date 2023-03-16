<?php

//TODO test functions wanneer alles is samengevoegd

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

// @ORM\TABLE IS SUPER IMPORTANT!!! DON'T FORGET IT WITH EXTENDED CLASSES!!!!!

/**
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 * @ORM\Table(name="user")
 */

class Manager extends User
{


    /**
     * Manager constructor.
     * @param $Name
     * @param $Email
     * @param $password
     */
    public function __construct($Name, $Email, $password)
    {
        parent::__construct($Name,$Email,$password);
        $this->role = 'Manager';
    }


}