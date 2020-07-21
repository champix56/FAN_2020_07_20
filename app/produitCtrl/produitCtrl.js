angular.module('app').controller('produitCtrl', ['$scope','produitService', function ($scope,prdSrvc) {
    var _vm=this;
    // this.chaine1 = 'Demat breizhouz';
    this.produit =prdSrvc.produit;
     $scope.onaddcartclick =prdSrvc.ajouterProduitAuCaddie;
     // function (prod) {
    //     console.log('produit ajouté:', prod);

    // }    
   
   // prdSrvc.getProduit(1);
}]);