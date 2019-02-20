const Sequelize = require('sequelize');
const db = new Sequelize('streamsearch', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',
});

const User = db.define('User', {
  id_user: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_name: Sequelize.STRING,
  user_fullname: Sequelize.STRING,
  user_country: Sequelize.STRING,
  hashed_password: Sequelize.STRING.BINARY,
}) 

const Service = db.define('Service', {
  id_service: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  service_crunchyroll: Sequelize.STRING,
  service_googleplay: Sequelize.STRING,
  service_hulu: Sequelize.STRING,
  service_iTunes: Sequelize.STRING,
  service_netflix: Sequelize.STRING,
  service_primevideo: Sequelize.STRING,
  // service_logo: Sequelize.STRING,
})

const Movie = db.define('Movie', {
  id_movie: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  movie_title: Sequelize.STRING,
  box_art: Sequelize.STRING,
  release_year: Sequelize.INTEGER,
  favorite: Sequelize.BOOLEAN,
  watch_later: Sequelize.BOOLEAN,
  recently_searched: Sequelize.BOOLEAN,

})

const Movie_Service = db.define('Movie_Service', {
  id_service_movie: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_service: {
  type: Sequelize.INTEGER,
    references: {
      model: 'Services',
      key: 'id_service',
    }
  },
  id_movie: {
    type: Sequelize.INTEGER,
    references: {
      model: 'Movies',
      key: 'id_movie',
    }
  }
})

const User_Movie = db.define('User_Movie', {
  id_user_movie: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_user: {
    type: Sequelize.INTEGER,
    references: {
      model: 'Users',
      key: 'id_user',
    }
  },
  id_movie: {
    type: Sequelize.INTEGER,
    references: {
      model: 'Movies',
      key: 'id_movie',
    }
  }
})

const User_Service = db.define('User_Service', {
  id_user_service: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_user: {
    type: Sequelize.INTEGER,
    references: {
      model: 'Users',
      key: 'id_user',
    }
  },
  id_service: {
    type: Sequelize.INTEGER,
    references: {
      model: 'Services',
      key: 'id_service',
    }
  }
})


db.sync({force: true});

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  })
  .done();


module.exports= {
  User: User, 
  Service: Service,
}