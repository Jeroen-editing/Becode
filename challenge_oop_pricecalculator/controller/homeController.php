<?php
declare(strict_types=1);


class HomeController {

    public function render (int $customerId) {

        $loader= new CustomerLoader(); // connecting class(CustomLoader) to (HomeController)
        $customer = $loader->loadById($customerId);
        $allCustomers = $loader->loadCustomers();

        require '../view/home.php';
    }

    public function productRender (int $productId) {

        $loaderP = new ProductLoader();
        $product = $loaderP->loadById($productId);
        $allProducts = $loaderP->loadProduct();

        require 'view/home.php';
    }
}
