DROP DATABASE IF EXISTS EmployeeTrackerDB;
CREATE database EmployeeTrackerDB;
USE EmployeeTrackerDB;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,4) NULL,
  department_id INT,
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NULL,
  role_id INT NULL,
  manager_id INT,
  PRIMARY KEY (id)
);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;