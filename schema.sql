CREATE DATABASE streamsearch;

USE streamsearch;

CREATE TABLE users
(
  user_id INT AUTO_INCREMENT not null, 
  user_name VARCHAR(40) not null, 
  full_name VARCHAR(40) not null, 
  hashed_password BINARY(60) not null, 
  PRIMARY KEY (user_id)
);

CREATE TABLE services
(
  service_id INT AUTO_INCREMENT not null, 
  service_names VARCHAR(40),
  service_logo VARCHAR(150),
  PRIMARY KEY (service_id)
);

CREATE TABLE movies
(
  movie_id INT AUTO_INCREMENT not null,
  movie_title VARCHAR(60),
  box_art VARCHAR(150),
  release_year int,
  PRIMARY KEY (movie_id)
)

CREATE TABLE service_user
(
  user_id INT FOREIGN KEY not null,
  service_id INT FOREIGN KEY not null
)

CREATE TABLE service_movie
(
  user_id INT FOREIGN KEY not null
  movie_id INT FOREIGN KEY not null
)

CREATE TABLE user_recently_searched
(
  user_id INT FOREIGN KEY not null
  movie_id INT FOREIGN key not null
)

CREATE TABLE user_favorite
(
  user_id INT FOREIGN KEY not null
  movie_id INT FOREIGN KEY not null
)

CREATE TABLE user_watch_later
(
  user_id INT FOREIGN KEY not null
  movie_id INT FOREIGN key not null
)