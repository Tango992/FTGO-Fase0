# README

### Create the Database

```sql
CREATE DATABASE tourism;
```

### Switch to Newly Created Database

```sql
USE DATABASE tourism;
```

### Create Table for Destinations

```sql
CREATE TABLE IF NOT EXISTS destinations(
    id_destination INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(100),
    country VARCHAR(100),
    description VARCHAR(255),
    rating INT,
    PRIMARY KEY (id_destination)
);

CREATE TABLE IF NOT EXISTS hotels(
    id_hotel INT AUTO_INCREMENT NOT NULL,
    hotel_name VARCHAR(100),
    id_destination INT,
    hotel_rating INT,
    address VARCHAR(255),
    PRIMARY KEY (id_hotel),
    FOREIGN KEY (id_destination) REFERENCES destinations(id_destination)
);

CREATE TABLE IF NOT EXISTS bookings(
    id_booking INT AUTO_INCREMENT NOT NULL,
    guest_details VARCHAR(100),
    hotel_references INT,
    check_in DATE,
    check_out DATE,
    PRIMARY KEY (id_booking),
    FOREIGN KEY (hotel_references) REFERENCES hotels(id_hotel)
);
```

### Insert Values

```sql
INSERT INTO destinations (name, country, description, rating)
VALUES 
    ('Bali', 'Indonesia', 'Lots of beautiful resorts and water sports.', 4),
    ('Labuan Bajo', 'Indonesia', 'Beautiful savanna.', 5),
    ('Venice', 'Italy', 'Beautiful architecture surrounded by canals.', 3);

INSERT INTO hotels (hotel_name, id_destination, hotel_rating, address)
VALUES
    ('Mulia', 1, 5, 'Jl. Raya Nusa Dua Selatan Jl. Nusa Dua, Benoa, Kec. Kuta'),
    ('Plataran', 2, 4, 'Komodo, West Manggarai Regency, East Nusa Tenggara 86757'),
    ('Carlton', 3, 5, 'Santa Croce 578, Santa Croce, 30135 Venice, Italy');

INSERT INTO bookings (guest_details, hotel_references, check_in, check_out)
VALUES
    ('Daniel', 1, '2023-07-05', '2023-07-15'),
    ('John Doe', 2, '2023-05-14', '2023-05-28'),
    ('Samantha', 3, '2023-09-04', NULL);
```

### Data Retrieval

#### Retrieve all destinations stored in the database

```sql
SELECT 
    name, country, description 
FROM 
    destinations;
```

#### Retrieve all hotels stored in the database

```sql
SELECT 
    hotel_name
FROM
    hotels;
```

#### Retrieve all bookings stored in the datase

```sql
SELECT 
    id_booking, hotel_name, guest_details, hotel_rating, address, check_in, check_out
FROM 
    bookings 
INNER JOIN 
    hotels 
ON 
    bookings.hotel_references = hotels.id_hotel;
```

#### Retrieve hotels in a specific destination based on user input

```sql
SELECT 
    hotel_name, name, hotel_rating, address, country
FROM
    hotels
INNER JOIN
    destinations
ON
    hotels.id_destination = destinations.id_destination
WHERE
    country = 'Indonesia';
```

#### Calculate and display the average rating of hotels in a particular destination

```sql
SELECT 
    country,
    AVG(hotel_rating) AS hotel_rating_average
FROM
    hotels
INNER JOIN
    destinations
ON
    hotels.id_destination = destinations.id_destination
GROUP BY
    country;
```

### Data Modification

#### Update the rating of a destination

```sql
UPDATE destinations
SET rating = 5
WHERE name = 'Bali';
```

#### Update the address of a hotel

```sql
UPDATE hotels
SET address = 'Nusa Dua'
WHERE hotel_name = 'Mulia';
```

#### Delete a booking record based on its ID

```sql
DELETE from bookings
WHERE id_booking = 3;
```