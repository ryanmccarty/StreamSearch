angular.module('app')
  .component('changeServices', {
    bindings: {
      service: '<',
    },
    controller(Serve) {
      M.AutoInit();

      const selectServices = this;
      this.username = 'kc';
      Serve.getInfo(this.username, (userInfo) => {
        const keys = Object.keys(userInfo);
        keys.forEach((key) => {
          if (userInfo[key] !== '1' && (key !== 'id_service' && (key !== 'createdAt' && key !== 'updatedAt'))) selectServices.serviceList[key.slice(8)] = !selectServices.serviceList[key.slice(8)];
        });
      });

      selectServices.serviceList = {
        crunchyroll: false,
        googleplay: false,
        hulu: false,
        iTunes: false,
        netflix: false,
        primevideo: false,
      };

      selectServices.clickedService = (service) => {
        selectServices.serviceList[service] = !selectServices.serviceList[service];
      };
    },
    templateUrl: '../templates/changeServices.html',
  });