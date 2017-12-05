'use strict';

function parqueoService($resource, API) {
	return $resource (API + '/api/parqueo/:id',{
		id:'id'
	}, {
		update: {
			method: 'PUT'
		},
		getNewsIdUser: {
			url: API + '/api/parqueo/encontrar',
			method: 'GET',
			isArray: true
		}
	})
}

angular.module('paraisoCiclistaApp')
  .factory('parqueoService', parqueoService);
