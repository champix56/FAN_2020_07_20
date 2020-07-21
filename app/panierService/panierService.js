(function() {
    'use strict';

    angular
        .module('app')
        .service('panierService', Service);
    function Service() {
        this.panier=[ {nom:'beurre Salé',qty:1,prix:1.00,desc:'Beurre salé ++',img:'barratte.jpg',stars:5}];
        this.addQuant = function (produit) {
            produit.qty += 1;
        }
        this.removeQuant = function (produit) {
            produit.qty = (produit.qty > 0 ? produit.qty - 1 : 0);
        }
    }
})();