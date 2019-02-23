// import { setServers } from "dns";

const data = {
  Search: [
    {
      title: '',
      poster: 'assets/serviceLogos/reel.png',
    },
    {
      title: '',
      poster: 'assets/serviceLogos/reel.png',
    },
    {
      title: '',
      poster: 'assets/serviceLogos/reel.png',
    },
    {
      title: '',
      poster: 'assets/serviceLogos/reel.png',
    },
    {
      title: '',
      poster: 'assets/serviceLogos/reel.png',
    },
  ],
};

angular.module('app')
  .component('search', {
    bindings: {
    },
    controller(Serve) {
      M.AutoInit();
      this.data = data.Search;
      this.target = 0;
      this.expanded = false;
      this.isExpanded = () => {
        this.expanded = !this.expanded;
      };
      this.setData = (data) => {
        console.log(data);
        this.data = data.data;
        M.AutoInit();
      };
      this.searchFor = (searchTerm, type) => {
        console.log(type);
        const query = { searchTerm, type };
        Serve.search(query, this.setData);
      };
      this.setData = this.setData.bind(this);
      this.setTarget = (target) => {
        this.target = target;
      };
      this.favoritedMovie = () => {
        const resultSrc = this.data[this.target].poster;
        const resultMovieName = this.data[this.target].title;
        const favorite = true;
        const watchLater = false;
        Serve.favoritedMovie(resultMovieName, resultSrc, favorite, watchLater);
      };
    },
    templateUrl: 'templates/search.html',
  });
