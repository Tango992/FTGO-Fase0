# Database Structure

## Create Database

```sql
CREATE DATABASE portofolio;
```

## Create User Table

### Table Sesuai Form

```sql
CREATE TABLE IF NOT EXISTS form (
    form_id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(100),
    role VARCHAR(100),
    availability VARCHAR(100),
    age INT,
    lokasi VARCHAR(100),
    experience INT,
    email VARCHAR(100),
    PRIMARY KEY (form_id)
);
```

### Table ERD (Draft)

```sql
CREATE TABLE IF NOT EXISTS users (
    user_id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(100),
    role_id INT,
    available_id INT,
    usia INT,
    location_id INT,
    experience (INT),
    email VARCHAR(100),
    submitted DATE DEFAULT CURRENT_DATE,
    PRIMARY KEY (user_id),
    FOREIGN KEY (role_id) REFERENCES roles(role_id),
    FOREIGN KEY (location_id) REFERENCES locations(location_id),
    FOREIGN KEY (available_id) REFERENCES availability(available_id)
);

CREATE TABLE IF NOT EXISTS roles (
    role_id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(100),
    description VARCHAR(100),
    PRIMARY KEY (role_id)
);

CREATE TABLE IF NOT EXISTS locations (
    location_id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(100),
    PRIMARY KEY (location_id)
);

CREATE TABLE IF NOT EXISTS availability (
    available_id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(100),
    PRIMARY KEY (availability_id)
);
```

## Insert Data

```sql
INSERT INTO 
    form (name, role, availability, age, lokasi, experience, email)
VALUES
    ('Daniel Osvaldo Rahmanto', 'Back End Developer', 'Full Time', 22, 'Bekasi', 2, 'daniel.rahmanto@gmail.com');
```

## Read

```sql
SELECT * FROM form;
```

## Update

```sql
UPDATE form
SET lokasi = 'Jl. Jendral Sudirman'
WHERE name = 'Daniel Osvaldo Rahmanto';
```