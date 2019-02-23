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
      this.target = '0';
      this.expanded = false;
      this.falsePositive = () => {
        if (this.expanded === true) {
          this.expanded = false;
        }
      };
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

      this.services = () => {
        const options = {
          crunchyroll: false,
          googleplay: false,
          hulu: false,
          iTunes: false,
          netflix: false,
          primevideo: false,
        };
        this.data[this.target].services.forEach((service) => {
          if (Object.keys(options).includes(service.display_name)) {
            options[service.display_name] = true;
          }
        });
        return options;
      };

      this.favoritedMovie = () => {
        console.log(this.services(), '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        const resultSrc = this.data[this.target].poster;
        const resultMovieName = this.data[this.target].title;
        const favorite = true;
        const watchLater = false;
        const services = this.services();
        Serve.favoritedMovie(resultMovieName, resultSrc, favorite, watchLater, services);
      };

      this.watchLaterMovie = () => {
        console.log(this.services(), '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        const resultSrc = this.data[this.target].poster;
        const resultMovieName = this.data[this.target].title;
        const favorite = false;
        const watchLater = true;
        const services = this.services();
        Serve.favoritedMovie(resultMovieName, resultSrc, favorite, watchLater, services);
      };
    },
    templateUrl: 'templates/search.html',
  });
