(function() {   // John Papa style of creating a module
    'use strict'; // Ensures no undeclared variables

    angular
        // Name the module 'formApp and inject ui-router as a dependency. 
        .module('formApp', ['ui.router'])   
        // Create a configuration function with a router prodiver and state prodiver to allow transmission of API communication. 
        .config(function($urlRouterProvider, $stateProvider) { 

            // Set root url to default
        	$urlRouterProvider.otherwise('/');

            // Create two different states to represent two separate html pages in addition to the index.html.
        	$stateProvider
                // Name this state 'form' with a specific url and file path and its controller is formCtrl.
        		.state('form', {
        			url: '/form',
        			templateUrl: '/app/form/form.html',
        			controller: 'formController as formCtrl'
        		})
                // Name this state 'company' hasa specific url and file path and its controller. is companyCtrl
        		.state('company', {
        			url: '/company/:businessName/:stockTicker',
        			templateUrl: '/app/company/company.html',
        			controller: 'companyController as companyCtrl'
        		});
        });  
})();