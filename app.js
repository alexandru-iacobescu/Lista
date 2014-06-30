
     var app = angular.module('Lista', []);

     function ListaController($scope) {

         $scope.showInputsEditedProduct = false;
         $scope.showInputProduct = false;

         $scope.show = function () {
             $scope.showInputProduct = !$scope.showInputProduct;
         };


         $scope.products = [];

         $scope.addProduct = function () {
             $scope.products.push({
                 name: $scope.newProductName,
                 details: $scope.newProductDetails,
                 checked: false
             });
             $scope.newProductName = "";
             $scope.newProductDetails = "";
             $scope.productsInList=true;
         };

         $scope.showNew = function () {
             this.showInputsEditedProduct = !this.showInputsEditedProduct;
         };

         $scope.checked=function() {
             $scope.products.checked = !$scope.products.checked;
         };

         $scope.erase = function(index) {
             var i;
             for(i=0;i<=$scope.products.length;i++)
                 if($scope.products.checked) $scope.products.splice(index, 1);
         };
     }

