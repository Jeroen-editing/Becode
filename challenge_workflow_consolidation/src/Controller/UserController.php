<?php

namespace App\Controller;

use App\Entity\Manager;
use App\Entity\Ticket;
use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends AbstractController
{
    /**
     * @Route("/user", name="user")
     */
    public function index()
    {

        $user = new User('Mahmut', 'mahmut@test.org', 'password');
        $manager = new Manager('Loïc','loic.test@becode', 'password1');

       //$user->addUser(new User('Mahmut', 'mahmut@test.org', 'password'));

       $this->getDoctrine()->getManager()->persist($user);
       $this->getDoctrine()->getManager()->persist($manager);
       $this->getDoctrine()->getManager()->flush();


        return $this->render('user/index.html.twig', [
            'controller_name' => 'UserController',
        ]);
    }

    /**
     * @Route ("/view/dashboard", name= "view_dashboard")
    */

public function viewDashboard(Ticket $ticket){

    return $this->render('user/dashboard.html.twig', ['ticket' => $ticket]);
}

}
