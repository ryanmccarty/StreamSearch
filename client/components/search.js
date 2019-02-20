angular.module('app')
  .component('search', {
    controller(Serve) {
      const search = this;

      search.searchFor = function (searchTerm, type, genre) {
        console.log({searchTerm, type, genre});
        // Serve.search(term);
      }
    },
    templateUrl: 'templates/search.html',
  })