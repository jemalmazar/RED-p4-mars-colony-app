(function() {
  'use strict';

  angular
    .module('red')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope) {
      this.online = true;
  }

})();
