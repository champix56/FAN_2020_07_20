angular.module('app').controller('produitsCtrl',['$scope',function($scope){
    this.arrayProduit=[
        {nom:'beurre Salé',prix:1.00,desc:'Beurre salé ++',img:'barratte.jpg',stars:5},{nom:'beurre Salé',prix:1.10,desc:'Beurre salé ++',img:'barratte.jpg',stars:5},{nom:'beurre Salé',prix:1.25,desc:'Beurre salé ++',img:'barratte.jpg',stars:5}];
        $scope.onviewproduitclick=function(produit){console.log(produit);}
}]);