use tracker;

INSERT INTO department
    (name)
VALUES
    ('Marketing'),
    ('Engineering'),
    ('Media'),
    ('Legal');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales Lead', 100000, 1),
    ('Salesperson', 80000, 1),
    ('Lead Engineer', 150000, 2),
    ('Software Engineer', 120000, 2),
    ('Account Manager', 160000, 3),
    ('Accountant', 125000, 3),
    ('Legal Team Lead', 250000, 4),
    ('Lawyer', 190000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Josh', 'Orr', 1, NULL),
    ('Matt', 'Solemn', 2, 1),
    ('Ash', 'Rockz', 3, NULL),
    ('Huck', 'Tupak', 4, 3),
    ('Shakina', 'Sings', 5, NULL),
    ('Mylisa', 'Blue', 6, 5),
    ('Gerogia', 'Clover', 7, NULL),
    ('Timmy', 'Augustus', 8, 7);