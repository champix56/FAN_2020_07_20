(function () {
    'use strict';

    angular
        .module('app')
        .service('produitService', Service);

    Service.$inject = ['$http', 'panierService'];
    function Service($http, panierSrvc) {
        var _vm = this;
        this.arrayProduits = [];
        this.produit = {};

        this.ajouterProduitAuCaddie = function (produit) {
            var prd=panierSrvc.isAlreadyInCart(produit);
            if (undefined!==prd) {
                prd.qty+=1;
            }
            else {
                var _prod = produit;
                _prod.qty = 1;
               const tmp= Object.assign({},_prod);
                panierSrvc.panier.push(tmp);
            }
        }
        const getProduits = function () {
            $http({ url: 'http://localhost:5635/produits/?_expand=categorie', method: 'GET' }).then(
                function success(response) {
                    console.log('success', response);
                    //_vm.arrayProduit = response.data;
                    _vm.arrayProduits.slice(0);
                    response.data.map(function (objItter) {
                        _vm.arrayProduits.push(objItter);
                    })
                },
                function unsuccess(response) {
                    console.log('!!!UNsuccess', response)
                }
            )
        }
        getProduits();

        this.getProduit = function (id) {
            $http({ url: 'http://localhost:5635/produits/' + id + '?_expand=categorie', method: 'GET' }).then(
                function success(response) {
                    // console.log('context',this);
                    // console.log('ctrl',_vm);
                    console.log('success', response);
                    //_vm.produit=response.data;
                    Object.assign(_vm.produit, response.data);
                },
                function unsuccess(response) {
                    console.log('!!!UNsuccess', response)
                }
            )
        }
        this.setProduit = function (produit) {
            Object.assign(_vm.produit, produit);
        }
    }
})();