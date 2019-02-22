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
      this.favoritedMovie = () => {
        const selectedMovie = document.getElementsByClassName('carousel-item ng-binding active');
        // Jargon to get the id of the movie/////////////////////////////////
        // name will have to be changed with the actual title that holds the movie id
        const srcOfMovie = (selectedMovie[0]).outerHTML.split('src="');
        const a = srcOfMovie[1].split('"');
        const resultSrc = a[0];

        const nameOfMovie = (selectedMovie[0]).innerHTML.split('<');
        const resultMovieName = nameOfMovie[0];
        console.log(resultMovieName);

        const favorite = true;
        const watchLater = false;

        Serve.favoritedMovie(resultMovieName, resultSrc, favorite, watchLater);
      };
    },
    templateUrl: 'templates/search.html',
  });
