angular.module('app')
  .component('search', {
    controller(Serve) {
      M.AutoInit();
      this.searchFor = (searchTerm, type, genre) => {
        const query = { searchTerm, type, genre };
        Serve.search(query);
      };
    },
    templateUrl: 'templates/search.html',
  });
