angular.module('app').controller('produitsCtrl', ['$scope', 'produitService', function ($scope, prdSrvc) {
    var _vm = this;
    this.arrayProduit = prdSrvc.arrayProduits;
    $scope.onviewproduitclick = function (produit) {
        prdSrvc.setProduit(produit)  ;
        //prdSrvc.getProduit(produit.id);
        console.log(produit);
    }
    $scope.onaddcartclick =prdSrvc.ajouterProduitAuCaddie;
    
}]);
