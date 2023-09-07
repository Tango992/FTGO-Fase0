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

## Insert Data

```sql
INSERT INTO 
    form (name, role, availability, age, lokasi, experience, email)
VALUES
    ('Daniel Osvaldo Rahmanto', 'Back End Developer', 'Full Time', 22, 'Bekasi', 2, 'daniel.rahmanto@gmail.com');
```

## Read

```sql
SELECT * 
FROM form
WHERE name = 'Daniel Osvaldo Rahmanto';
```

## Update

```sql
UPDATE form
SET lokasi = 'Jl. Jendral Sudirman'
WHERE name = 'Daniel Osvaldo Rahmanto';
```

## Delete

```sql
DELETE FROM FORM
WHERE name = ' Daniel Osvaldo Rahmanto';
```