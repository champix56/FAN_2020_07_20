(function(){
    'use strict';

    angular
        .module('app')
        .filter('my_currency', Filter)

    function Filter(){

        return FilterFn;

        function FilterFn(Params,fractionSize){
            var entier=Math.floor(Params);
            var decimal=Params-entier;
            fractionSize=(undefined!==fractionSize?fractionSize:2);
            decimal=Math.round(decimal*Math.pow(10,fractionSize));
            return ''+entier+'€'+decimal;
        }
    }
}());