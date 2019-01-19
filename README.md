# todo-app
Todo App Backend in Node.js

A simple todo-app backend in Node.js. The database server used is Mysql.

Use this query to create schema.

CREATE TABLE `tasks` (
 `task_id` int(11) NOT NULL AUTO_INCREMENT,
 `task_description` varchar(255) NOT NULL,
 `due_date` date DEFAULT NULL,
 `complete` enum('true','false') DEFAULT NULL,
 `task_title` varchar(255) DEFAULT NULL,
 PRIMARY KEY (`task_id`),
 UNIQUE KEY `task_title_UNIQUE` (`task_title`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1

Rest of the configurations for running the project can be found in config folder of the root directory.

MADE WITH ❤️ BY nsharsharaju 🇮🇳
