<?php
declare(strict_types=1);


class CustomerLoader {
    // create domain objects
    // it is the database


    public function loadCustomers(): array {
        // method to load all the json file

        $list = [];
        $json = json_decode(file_get_contents('../data/customers.json'), true);

        foreach ($json AS $customerJson) {
            //create object for every json save it in list

            $list[] = new Customer($customerJson['id'], $customerJson['name'], $customerJson['group_id']);

        }

        return $list;

    }

    public function loadById(int $customerId): ? Customer {

        $json = json_decode(file_get_contents('../data/customers.json'), true);

        foreach ($json AS $customerJson) {
            // loop over json file array, make object from customer in array.

            if ($customerJson['id'] === $customerId) {
                // compare the given id, with the id in customer array
                // return an object from given ID, based on Customer class

                return new Customer($customerJson['id'], $customerJson['name'], $customerJson['group_id']);
                // properties are predetermined in class Customer

            }
        }

        return null;

    }

}
