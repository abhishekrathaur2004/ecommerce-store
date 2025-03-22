-- Initial seed data
INSERT INTO "User" (email, full_name, password)
VALUES 
    ('admin@example.com', 'Admin User', 'password'),
    ('test@example.com', 'Test User', 'password');


INSERT INTO "Category" (name)
VALUES 
    ('Category 1'),
    ('Category 2');