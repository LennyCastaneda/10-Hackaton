(function() {
    'use strict';

    angular
        .module('formApp')
        .controller('formController', formController);

    formController.$inject = ['businessFactory'];

    /* @ngInject */
    function formController(businessFactory) {
        var vm = this; //jshint ignore:line
        vm.company = '';
        vm.userInput = userInput;
        
        ////////////////

        function userInput(info) {
        	var upperCaseTicker = vm.company;
	        businessFactory.getBusinessNews(info).then(
	        	function(data) {
	        		vm.companyData = data;
	        		console.log(data);
	        	},

	        	function(error) {});
	        		// console.log(vm.companyData);
    	}
    }	
})();
