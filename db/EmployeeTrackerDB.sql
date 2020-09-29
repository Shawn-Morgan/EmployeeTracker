DROP DATABASE IF EXISTS EmployeeTrackerDB;
CREATE database EmployeeTrackerDB;
USE EmployeeTrackerDB;

/* Create new table with a primary key that auto-increments, and a text field */
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,4) NULL,
  department_id INT 
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  e_first_name VARCHAR(30) NOT NULL,
  e_last_name VARCHAR(30) NOT NULL,
  e_role_id INT NOT NULL,
  e_mgr_id INT
);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;