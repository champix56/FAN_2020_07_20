angular.module('app').controller('produitCtrl', ['$scope', function ($scope) {
    this.chaine1 = 'Demat breizhouz';
    this.produit={nom:'beurre Salé',prix:1.00,desc:'Beurre salé ++',img:'barratte.jpg',stars:5};
    $scope.onaddcartclick=function(prod){
        console.log('produit ajouté:',prod);
    }
    
}]);