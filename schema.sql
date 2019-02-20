CREATE DATABASE streamsearch;

USE streamsearch;

CREATE TABLE users
(
  user_id INT AUTO_INCREMENT, 
  user_name VARCHAR(40), 
  full_name VARCHAR(40), 
  hashed_password BINARY(60), 
  PRIMARY KEY (user_id)
);

CREATE TABLE services(
  service_id INT AUTO_INCREMENT not null PRIMARY KEY
  service_name VARCHAR(40)
  service_logo VARCHAR(150)
  
)

CREATE TABLE movies(
  movie_id INT AUTO_INCREMENT not null PRIMARY KEY
  movie_title VARCHAR(60)
  box_art VARCHAR(150)
  release_year int
)

CREATE TABLE service_user(
  user_id INT FOREIGN KEY not null
  service_id INT FOREIGN KEY not null
)

CREATE TABLE service_movie(
  user_id INT FOREIGN KEY not null
  movie_id INT FOREIGN KEY not null
)

CREATE TABLE user/recently_searched(
  user_id INT FOREIGN KEY not null
  movie_id INT FOREIGN key not null
)

CREATE TABLE user_favorite(
  user_id INT FOREIGN KEY not null
  movie_id INT FOREIGN KEY not null
)

CREATE TABLE user/watch_later(
  user_id INT FOREIGN KEY not null
  movie_id INT FOREIGN key not null
)