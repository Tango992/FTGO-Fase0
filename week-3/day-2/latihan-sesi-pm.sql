-- Membuat Table (DDL)

CREATE TABLE IF NOT EXISTS Buku(
    ID_Buku INT AUTO_INCREMENT PRIMARY KEY,
    Judul VARCHAR(100),
    Pengarang VARCHAR(100),
    Tahun_Terbit YEAR,
    Kategori VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS Anggota(
    ID_Anggota INT AUTO_INCREMENT,
    Nama VARCHAR(100),
    Alamat VARCHAR(255),
    Nomor_Telepon VARCHAR(15),
    Tanggal_Bergabung DATE,
    PRIMARY KEY (ID_Anggota)
);

-- Mengisi Values (DML)
INSERT INTO Buku (Judul, Pengarang, Tahun_Terbit, Kategori) 
VALUES 
	('Buku Teknologi', 'John Doe', 1995, 'Science'),
    ('Buku Musik', 'Jane Doe', 2003, 'Music'),
    ('Buku Seni', 'Foo Bar', 1999, 'Arts');

INSERT INTO Anggota (Nama, Alamat, Nomor_Telepon, Tanggal_Bergabung) 
VALUES 
	('Ali', 'Jalan Sutomo 10', '0812345678', '2023-01-01'),
    ('Bima', 'Jalan A. Yani No. 20', '0855667788', '2023-05-11'),
    ('Chalie', 'Jalan M.H. Thamrin no. 3', '081122223333', '2023-08-15');

-- Select
SELECT * FROM Buku WHERE Kategori = "Arts";

SELECT * FROM Anggota WHERE Tanggal_Bergabung > '2023-01-01';


-- Update
UPDATE Buku
SET Pengarang = 'Tony Stark'
WHERE ID_Buku = 2;

UPDATE Anggota
SET Alamat = 'Jl. Soekarno Hatta 17'
WHERE ID_Anggota = 2;


-- Delete
DELETE FROM Buku
WHERE ID_Buku = 3;

DELETE FROM Anggota
WHERE ID_Anggota = 1;

-- Tambah Table dengan Foreign Key
CREATE TABLE Peminjaman(
    ID_Peminjaman INT AUTO_INCREMENT NOT NULL,
    ID_Buku INT,
    ID_Anggota INT,
    Tanggal_Peminjaman DATE,
    Tanggal_Pengembalian DATE,
    Status VARCHAR(50),
    PRIMARY KEY (ID_Peminjaman),
    FOREIGN KEY (ID_Buku) REFERENCES Buku(ID_Buku),
    FOREIGN KEY (ID_Anggota) REFERENCES Anggota(ID_Anggota)
);

-- Update Value Peminjaman
INSERT INTO Peminjaman(ID_Buku, ID_anggota, Tanggal_Peminjaman, Tanggal_Pengembalian, Status)
VALUES 
	(1, 1, '2023-09-01', NULL, 'Dipinjam'),
    (2, 2, '2023-09-01', NULL, 'Dipinjam');

-- Menghitung ada berapa banyak peminjaman dalam satu bulan
SELECT
	YEAR(Tanggal_Peminjaman) AS Tahun,
    MONTH(Tanggal_Peminjaman) AS Bulan,
    COUNT(ID_Peminjaman) AS Jumlah_Peminjaman
FROM
	Peminjaman
WHERE
	Tanggal_Peminjaman BETWEEN '2023-09-01' AND '2023-09-30'
GROUP BY
	YEAR(Tanggal_Peminjaman), MONTH(Tanggal_Peminjaman);