angular.module('app')
  .component('search', {
    controller(Serve) {
      const search = this;

      search.searchTerm = '';

      search.searchFor = function (term) {
        Serve.search(term);
      }
    },
    templateUrl: 'templates/search.html',
  })