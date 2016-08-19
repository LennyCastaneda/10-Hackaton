(function() {
    'use strict';

    angular
        .module('formApp')
        .controller('formController', formController);

    formController.$inject = ['stockFactory'];

    /* @ngInject */
    function formController(stockFactory) {
        var vm = this; //jshint ignore:line
        vm.company = '';
        vm.userInput = userInput;
        
        ////////////////

        function userInput(info) {
        	var upperCaseTicker = vm.company;
        	// var upperCaseTicker = upperCaseTicker.toUpperCase();
			
	        stockFactory.getStockQuote(info).then(
	        	function(data) {
	        		vm.companyData = data;
	        		console.log(data);
	        	},

	        	function(error) {});
	        		// console.log(vm.companyData);
    	}
    }	
})();
