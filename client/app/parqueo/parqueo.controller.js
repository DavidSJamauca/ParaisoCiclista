'use strict';

(function(){

class ParqueoComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('paraisoCiclistaApp')
  .component('parqueo', {
    templateUrl: 'app/parqueo/parqueo.html',
    controller: ParqueoComponent,
    controllerAs: 'parqueoCtrl'
  });

})();
