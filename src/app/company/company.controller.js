(function() {
    'use strict';

    angular
        .module('formApp')
        .controller('formController', formController);

    formController.$inject = ['businessFactory', '$stateParams'];

    /* @ngInject */
    function formController(businessFactory, $stateParams) {
        var vm = this; //jshint ignore:line
  
        businessFactory.getCompany($stateParams.businessName).then(
            function(data) {
                detail.data = data;
            },
            function(error) {
                console.log(error);
            });
    }
        ////////////////

})();