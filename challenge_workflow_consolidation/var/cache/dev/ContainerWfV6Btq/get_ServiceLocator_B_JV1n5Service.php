<?php

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.
// Returns the private '.service_locator.B.JV1n5' shared service.

return $this->privates['.service_locator.B.JV1n5'] = new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($this->getService, [
    'App\\Controller\\RegistrationController::register' => ['privates', '.service_locator.lm3AYgL', 'get_ServiceLocator_Lm3AYgLService.php', true],
    'App\\Controller\\UserController::viewDashboard' => ['privates', '.service_locator.HEH17SB', 'get_ServiceLocator_HEH17SBService.php', true],
    'App\\Controller\\RegistrationController:register' => ['privates', '.service_locator.lm3AYgL', 'get_ServiceLocator_Lm3AYgLService.php', true],
    'App\\Controller\\UserController:viewDashboard' => ['privates', '.service_locator.HEH17SB', 'get_ServiceLocator_HEH17SBService.php', true],
], [
    'App\\Controller\\RegistrationController::register' => '?',
    'App\\Controller\\UserController::viewDashboard' => '?',
    'App\\Controller\\RegistrationController:register' => '?',
    'App\\Controller\\UserController:viewDashboard' => '?',
]);