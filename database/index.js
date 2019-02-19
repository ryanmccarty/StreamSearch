const Sequelize = require('sequelize');
const sequelize = new Sequelize('streamsearch', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',
});

const Users = sequelize.define('Users', {
  user_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_name: Sequelize.STRING,
  full_name: Sequelize.STRING,
  hashed_password: Sequelize.STRING.BINARY,
}) 

const Services = sequelize.define('Services', {
  service_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  service_name: Sequelize.STRING,
  service_logo: Sequelize.STRING,
})

const Movies = sequelize.define('Movies', {
  movie_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  movie_title: Sequelize.STRING,
  box_art: Sequelize.STRING,
  release_year: Sequelize.INTEGER,
})

// join table between movies and services
Movies.belongsToMany(Services, {through: 'MovieService'});
Services.belongsToMany(Movies, {through: 'MovieService'});

// join table between users and services
Users.belongsToMany(Services, {through: 'UserServices'});
Services.belongsToMany(Users, {through: 'UserServices'});

// join table between users and movies for recentlySearched 
Movies.belongsToMany(Users, {through: 'RecentlySearched'});
Users.belongsToMany(Movies, {through: 'RecentlySearched'});

// join table between users and movies for favorites list
Movies.belongsToMany(Users, {through: 'Favorites'});
Users.belongsToMany(Movies, {through: 'Favorites'});

// join table for users and movies for watchLater
Movies.belongsToMany(Users, {through: 'WatchLater'});
Users.belongsToMany(Movies, {through: 'WatchLater'});

Users.sync();
Movies.sync();
Services.sync();
// MovieService.sync();
// UserServices.sync();
// RecentlySearched.sync();
// Favorites.sync();
// WatchLater.sync();

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  })
  .done();


module.exports.sequelize = sequelize;