
drop database if exists checkout;

CREATE DATABASE checkout;

USE checkout;

CREATE TABLE customer_info (
  id INT NOT NULL AUTO_INCREMENT,
  name varchar(20) NOT NULL,
  session_id INT NOT NULL,
  PRIMARY KEY(id)
);

