<?php


namespace App\Entity;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 * @ORM\Table(name="user")
 */
class Customer extends User
{
    public function __construct(string $name, string $email, string $password)
    {
        parent::__construct($name, $email, $password);
        $this->role = 'Customer';
    }

}