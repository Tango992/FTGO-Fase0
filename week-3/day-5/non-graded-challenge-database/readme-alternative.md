# README

## Analysis

- Membuat tabel bernama Buku yang berisi ISBN (Primary), Title, Author_ID (Foreign), Publisher_ID (Foreign), dan Year of Publication. Karena Author dan Publisher dapat menerbitkan banyak buku, sehingga lebih baik jika kedua column ini dijadikan foreign key untuk dihubungkan ke tabel lain.

- Membuat tabel bernama Author yang berisi ID (Primary), Name, dan Birth.

- Karena setiap buku dapat memiliki beberapa Co-Author, maka dibuat tabel Co_Author yang berisi ID (Primary), ISBN (Foreign), dan Author_ID (Foreign).

- Karena sebuah publisher dapat menerbitkan banyak baru, maka dibuat tabel bernama Publisher yang berisi ID (Primary), Name, Address, dan Telephone. Sehingga jika ada buku yang perlu direstorasi, pihak perusahaan dapat menghubungi publisher.

- Membuat tabel bernama Member yang berisi ID (Primary), First_Name, Last_Name, Birth, dan Address.

- Membuat tabel bernama Borrow yang berisi ID (Primary), Member_ID (Foreign), ISBN (Foreign), Lending_Date, dan Return_Date, Condition.


## Setup Queries

### Create Database

```sql
CREATE DATABASE setup;
```

### Create Tables

```sql
CREATE TABLE IF NOT EXISTS author (
    author_id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(100) NOT NULL,
    birth DATE,
    PRIMARY KEY (author_id)
);

CREATE TABLE IF NOT EXISTS publisher (
    publisher_id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(100) NOT NULL,
    address VARCHAR(255),
    telephone INT,
    PRIMARY KEY (publisher_id)
);

CREATE TABLE IF NOT EXISTS book (
    isbn INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(100) NOT NULL,
    author_id INT NOT NULL,
    publisher_id INT NOT NULL,
    year DATE NOT NULL,
    PRIMARY KEY (isbn),
    FOREIGN KEY (author_id) REFERENCES author(author_id),
    FOREIGN KEY (publisher_id) REFERENCES publisher(publisher_id)
);

CREATE TABLE IF NOT EXISTS co_author (
    id INT AUTO_INCREMENT NOT NULL,
    isbn INT NOT NULL,
    author_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (isbn) REFERENCES book(isbn),
    FOREIGN KEY (author_id) REFERENCES author(author_id)
);

CREATE TABLE IF NOT EXISTS member (
    member_id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100),
    birth DATE,
    address VARCHAR(255),
    PRIMARY KEY (member_id)
);

CREATE TABLE IF NOT EXISTS lending_transaction (
    transaction_id INT AUTO_INCREMENT NOT NULL,
    member_id INT NOT NULL,
    isbn INT NOT NULL,
    lending_date DATE NOT NULL,
    return_date DATE,
    condition_at_return VARCHAR(100),
    PRIMARY KEY (transaction_id),
    FOREIGN KEY (member_id) REFERENCES member(member_id),
    FOREIGN KEY (isbn) REFERENCES book(isbn)
);
```

### Delimiter

#### Adding a constraint to ensure a member can't borrow more than 5 books at a time

```sql
DELIMITER //
CREATE TRIGGER Before_LendingTransaction_Insert
BEFORE INSERT ON Lending_Transaction
FOR EACH ROW
BEGIN
    DECLARE BorrowedBooksCount INT;
    
    SELECT COUNT(*) INTO BorrowedBooksCount
    FROM Lending_Transaction
    WHERE Member_ID = NEW.Member_ID AND Date_of_Return IS NULL;
    
    IF BorrowedBooksCount >= 5 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'A member cannot borrow more than 5 books at a time';
    END IF;
END;
//
DELIMITER ;
```

## Insert Values

### Member Table