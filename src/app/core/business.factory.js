(function() { // John Papa style of creating a module
    'use strict'; // Ensures no undeclared variables

    angular
        // Connect to the formApp module.
        .module('formApp') 
         // Create a factor to hold a function used by both form and company controllers, name it business Factory.
        .factory('businessFactory', businessFactory);

    businessFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function businessFactory($http, $q) {
        var service = {
            getBusinessNews: getBusinessNews,
            getStockInfo: getStockInfo
        };

        return service;

    //////////////////////////////////////////////////////

        // Create new variable to hold user input that is being used to query company name from the API.
        // Use this variable in controller for $stateparms.
        function getBusinessNews(businessName) {
        	// Assign the $q.defer function to variable deferred.
            var deferred = $q.defer();     

            // Get API to The Guardian New using this url and key
	        $http.get('http://content.guardianapis.com/search?q=' + businessName + '&api-key=b1107cb2-bf15-49ee-94b1-d043854f5127')
	         // Then call a function passing 'response' (newly created variable) as the argument
            .then(function(response) {   
                // Take data variable (from controller) attach it to 'response', pass as argument for new 'deferred' instance of the resolve() function and if response is good, end function.
	        	deferred.resolve(response.data);
	        	// console.log(response.data);
	        },
            // If function does not resolve the 'deferred' reject() function throw error, log to console.
	        function(err) {
	        	deferred.reject(err);
	        	console.log(err);
	        });
        // This return instance of deferred.promise runs before $http.get() function above since it is in higher level scope within getBusinessNews().
	    return deferred.promise;

        } //  getBusinessNews function


////////////////////////////////////////////////////////////////////////


        // Create new variable to hold user input that is being used to query company name from the API.
        // Use this variable in controller for $stateparms.
        function getStockInfo(stockTicker) {
            // Assign the $q.defer function to variable deferred.
            var deferred = $q.defer();     

            // Get API to Market on Demand using this url and ticker
            $http.get('http://originfinance.herokuapp.com/quote?symbol=' + stockTicker) 
             // Then call a function passing 'response' (newly created variable) as the argument
            .then(function(response) {   
                // Take data variable (from controller) attach it to 'response', pass as argument for new 'deferred' instance of the resolve() function and if response is good, end function.
                deferred.resolve(response.data);
                // console.log(response.data);
            },
            // If function does not resolve the 'deferred' reject() function throw error, log to console.
            function(err) {
                deferred.reject(err);
                console.log(err);
            });
        // This return instance of deferred.promise runs before $http.get() function above since it is in higher level scope within getStockQuote().
        return deferred.promise;

        } //  getStockQuote function


        angular.module('moduleName')
        .filter('percentage', ['$filter', function($filter) {
            return function(input, decimals) {
                return $filter('number')(input*100, decimals)+'%';
            };
        }]);

    } // businessFactory function
})();