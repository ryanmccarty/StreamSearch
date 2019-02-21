angular.module('app')
  .component('search', {
    bindings: {

    },
    controller(Serve) {
      this.data = [];
      this.setData = (data) => {
        this.data = data.data;
      };
      M.AutoInit();
      this.searchFor = (searchTerm, type, genre) => {
        console.log(type);
        const query = { searchTerm, type, genre };
        Serve.search(query, this.setData);
        
      };
      this.setData = this.setData.bind(this);
    },
    templateUrl: 'templates/search.html',
  });
