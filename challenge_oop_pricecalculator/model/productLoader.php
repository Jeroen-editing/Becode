<?php

declare(strict_types=1);



class ProductLoader {


    public function loadProduct(): array {

        $list = [];

        $json = json_decode(file_get_contents('../data/products.json'));

        foreach ($json AS $productJson) {

            $list[] = new Product($productJson['id'], $productJson['name'], $productJson['description'], $productJson['price']);

        }

        return $list;

    }

    public function loadById(int $productId): Product
    {
        $json = json_decode(file_get_contents('data/products.json'), true);

        foreach ($json AS $productJson) {
            // loop over json file array, make object from customer in array.

            if ($productJson['id'] === $productId) {
                // compare the give id , with the id in customer array
                // return an object from give ID, based on Customer class
                return new Product($productJson['id'], $productJson['name'], $productJson['description'], $productJson['price']);
            }
        }
        return null;
    }

}

?>

