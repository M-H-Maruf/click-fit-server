-- use click_bit database
USE click_bit;

-- Create users table
CREATE TABLE users (
    ID INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL,
    password VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL,
    type VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL,
    active TINYINT DEFAULT 1,
    PRIMARY KEY (ID)
);

-- create the addUser procedure and store it
DELIMITER //
CREATE PROCEDURE addUser(
    IN userEmail VARCHAR(255),
    IN userPassword VARCHAR(255),
    IN userType VARCHAR(255)
)
BEGIN
    -- Insert a new user into the users table
    INSERT INTO users (email, password, type) VALUES (userEmail, userPassword, userType);
END //
DELIMITER ;

-- call addUser to insert  new user
CALL addUser('md.muktadirul.haque.maruf@gmail.com', 'password123', 'regular');

-- show a list of all tables
-- SHOW TABLES;
-- describe structure of users table
-- DESC users;
-- select all rows from users table
-- SELECT * FROM users;
