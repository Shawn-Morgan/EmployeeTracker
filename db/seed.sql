USE EmployeeTrackerDB;

INSERT INTO department (name)
VALUES 
	("Finance"), 
    ("HR"), 
    ("Engineering"), 
    ("IT");

INSERT INTO role (title, salary, department_id)
VALUES 
	("Intern", 75000, 10),
    ("Associate", 100000, 20),
    ("Junior", 125000, 30),
    ("Expert", 150000, 40),
    ("Strategist", 175000, 50),
    ("Fellow", 200000, 60);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
	("Joe", "Buck", 10, NULL),
    ("Troy", "Aikman", 40, NULL),
    ("Deshan", "Watson", 50, NULL);