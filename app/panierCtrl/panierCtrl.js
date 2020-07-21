angular.module('app').controller('panierCtrl', ['$scope', 'panierService', function ($scope, panierSrvc) {
    this.arrayPanier = panierSrvc.panier;
    $scope.onviewproduitclick = function (produit) { console.log(produit); }
    this.addQuant = panierSrvc.addQuant;
    this.removeQuant =panierSrvc.removeQuant;
}]);