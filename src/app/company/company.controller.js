(function() {
    'use strict';

    angular
        .module('formApp')
        .controller('companyController', companyController);

    companyController.$inject = ['businessFactory', '$stateParams'];

    /* @ngInject */
    function companyController(businessFactory, $stateParams) {
        var vm = this; //jshint ignore:line
        

        businessFactory.getBusinessNews($stateParams.businessName).then(
            function(data) {
                vm.data = data;
            },
            function(error) {
                console.log(error);
            });
    }
        ////////////////

})();