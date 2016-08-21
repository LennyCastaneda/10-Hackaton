(function() { // John Papa style of creating a module
    'use strict'; // Ensures no undeclared variables

    angular
        // Connect to the formApp module.
        .module('formApp')  
        // Create a controller to connect to the company html, name it formController. Add it as 2nd argument dependency.
        .controller('companyController', companyController);

    // Inject the newly created businessFactory and the required $stateParams into the companyController 
    companyController.$inject = ['businessFactory', '$stateParams'];

    /* @ngInject */
    function companyController(businessFactory, $stateParams) {
        // 'this' is within the scope of companyController assigned to vm variable.
        var vm = this; //jshint ignore:line
        
        ////////////////

        // Take the user input stored in businessName  
        
        businessFactory.getBusinessNews($stateParams.businessName).then(
        // Then call a function passing a new variable, 'data' in it assigning 'data' from API to data within compnayController's scope
            function(data) {   
                vm.data = data;
            },
            function(error) {
                console.log(error);
            });
    }

})();