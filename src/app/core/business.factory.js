(function() {
    'use strict';

    angular
        .module('formApp')
        .factory('businessFactory', businessFactory);

    businessFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function businessFactory($http, $q) {
        var service = {
            getBusinessNews: getBusinessNews,

        };

        return service;

        ////////////////

        function getBusinessNews(business) {
        	var deferred = $q.defer();

	        $http.get('http://content.guardianapis.com/search?q=' + business + '&api-key=b1107cb2-bf15-49ee-94b1-d043854f5127')
	        .then(function(response) {
	        	deferred.resolve(response.data);
	        	// console.log(response.data);
	        },
	        function(err) {
	        	deferred.reject(err);
	        	console.log(err);
	        });

	    return deferred.promise;

        } //  getBusinessNews function

        
    }	// businessFactory function
})();
