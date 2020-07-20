angular.module('app').controller('panierCtrl',['$scope',function($scope){
    this.arrayPanier=[
        {nom:'beurre Salé',qty:1,prix:1.00,desc:'Beurre salé ++',img:'barratte.jpg',stars:5},{nom:'beurre Salé',prix:1.10,desc:'Beurre salé ++',img:'barratte.jpg',stars:5,qty:3},{nom:'beurre Salé',prix:1.25,desc:'Beurre salé ++',img:'barratte.jpg',stars:5,qty:5}];
        $scope.onviewproduitclick=function(produit){console.log(produit);}
        this.addQuant=function (produit) {
            produit.qty+=1;
        }
        this.removeQuant=function (produit) {
            produit.qty=(produit.qty>0?produit.qty-1:0);
        }
}]);