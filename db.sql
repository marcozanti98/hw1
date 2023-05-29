use hw1;

create table users(
id integer auto_increment primary key,
username varchar(255), 
password varchar(255), 
name varchar(255), 
surname varchar(255), 
email varchar(255)
);

create table books(
userId integer, 
title varchar(255),
content json
);

