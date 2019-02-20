angular.module('app')
  .component('search', {
    controller(Serve) {
      const search = this;

      search.searchFor = function (searchTerm, type, genre) {
        const query = { searchTerm, type, genre }
        Serve.search(query);
      }
    },
    templateUrl: 'templates/search.html',
  })