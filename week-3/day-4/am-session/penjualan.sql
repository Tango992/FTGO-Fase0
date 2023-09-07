-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 07, 2023 at 04:09 AM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `penjualan`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `customerNumber` int(11) NOT NULL,
  `customerName` varchar(255) NOT NULL,
  `contactLastName` varchar(255) NOT NULL,
  `contactFirstName` varchar(255) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `addressLine1` varchar(255) NOT NULL,
  `addressLine2` varchar(255) DEFAULT NULL,
  `city` varchar(100) NOT NULL,
  `state` varchar(100) DEFAULT NULL,
  `PostalCode` varchar(20) DEFAULT NULL,
  `country` varchar(100) NOT NULL,
  `salesRepEmployeeNumber` int(11) DEFAULT NULL,
  `creditLimit` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`customerNumber`, `customerName`, `contactLastName`, `contactFirstName`, `phone`, `addressLine1`, `addressLine2`, `city`, `state`, `PostalCode`, `country`, `salesRepEmployeeNumber`, `creditLimit`) VALUES
(1, 'Pelanggan1', 'Santoso', 'Budi', '0812345671', 'Jalan Merdeka 1', NULL, 'Jakarta', NULL, '10110', 'Indonesia', NULL, '5000000.00'),
(2, 'Pelanggan2', 'Wijaya', 'Ani', '0812345672', 'Jalan Sudirman 20', 'Blok B2', 'Jakarta', NULL, '10220', 'Indonesia', 1, '6000000.00'),
(3, 'Pelanggan3', 'Hartono', 'Citra', '0812345673', 'Jalan Thamrin 45', NULL, 'Surabaya', 'Jawa Timur', '60230', 'Indonesia', 2, '7000000.00'),
(4, 'Pelanggan4', 'Rahardjo', 'Dewi', '0812345674', 'Jalan Raya Kuningan', NULL, 'Jakarta', NULL, '12950', 'Indonesia', NULL, '8000000.00'),
(5, 'Pelanggan5', 'Purwanto', 'Eka', '0812345675', 'Jalan HR Rasuna Said', 'Gedung B, Lantai 2', 'Jakarta', NULL, '12920', 'Indonesia', 3, '5500000.00'),
(6, 'Pelanggan6', 'Nugroho', 'Fajar', '0812345676', 'Jalan Gatot Subroto 89', NULL, 'Bandung', 'Jawa Barat', '40150', 'Indonesia', 4, '6500000.00'),
(7, 'Pelanggan7', 'Widodo', 'Gina', '0812345677', 'Jalan A Yani 123', NULL, 'Surabaya', 'Jawa Timur', '60120', 'Indonesia', 1, '7000000.00'),
(8, 'Pelanggan8', 'Susanto', 'Hendra', '0812345678', 'Jalan Diponegoro 200', 'Komplek C', 'Yogyakarta', NULL, '55122', 'Indonesia', 2, '7500000.00'),
(9, 'Pelanggan9', 'Utomo', 'Intan', '0812345679', 'Jalan Dr Soetomo 300', NULL, 'Semarang', 'Jawa Tengah', '50130', 'Indonesia', NULL, '5000000.00'),
(10, 'Pelanggan10', 'Pratama', 'Joko', '0812345680', 'Jalan Imam Bonjol 400', 'Blok D3', 'Denpasar', 'Bali', '80119', 'Indonesia', 3, '6000000.00'),
(11, 'Pelanggan11', 'Nguyen', 'Kai', '0812345681', 'Boulevard de la Villette 1', NULL, 'Paris', NULL, '75010', 'France', 5, '9000000.00'),
(12, 'Pelanggan12', 'Smith', 'Lena', '0812345682', 'Market Street 202', 'Apt 3B', 'San Francisco', 'CA', '94105', 'USA', 6, '8000000.00'),
(13, 'Pelanggan13', 'Garcia', 'Miguel', '0812345683', 'Calle de Alcalá 100', NULL, 'Madrid', NULL, '28009', 'Spain', NULL, '7500000.00'),
(14, 'Pelanggan14', 'Rossi', 'Nicole', '0812345684', 'Via del Corso 45', NULL, 'Rome', NULL, '00186', 'Italy', 7, '6500000.00'),
(15, 'Pelanggan15', 'Fernandes', 'Olga', '0812345685', 'Avenida da Liberdade 120', 'Blok B2', 'Lisbon', NULL, '1250-147', 'Portugal', 8, '7000000.00'),
(16, 'Pelanggan16', 'Müller', 'Peter', '0812345686', 'Bahnhofstrasse 50', NULL, 'Zurich', NULL, '8001', 'Switzerland', NULL, '9500000.00'),
(17, 'Pelanggan17', 'Johansson', 'Quincy', '0812345687', 'Drottninggatan 82', NULL, 'Stockholm', NULL, '11136', 'Sweden', 9, '6000000.00'),
(18, 'Pelanggan18', 'Suzuki', 'Rika', '0812345688', 'Chuo Dori 160', 'Bldg 2', 'Tokyo', NULL, '100-0001', 'Japan', 10, '10000000.00'),
(19, 'Pelanggan19', 'Kim', 'Seo-yun', '0812345689', 'Gangnam-daero 102', NULL, 'Seoul', NULL, '06001', 'South Korea', NULL, '9500000.00'),
(20, 'Pelanggan20', 'Van der Meer', 'Theo', '0812345690', 'Damrak 70', '3rd Floor', 'Amsterdam', NULL, '1012LM', 'Netherlands', 11, '8000000.00');

-- --------------------------------------------------------

--
-- Table structure for table `Employees`
--

CREATE TABLE `Employees` (
  `emp_no` int(11) NOT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `gender` enum('M','F') DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `hire_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Employees`
--

INSERT INTO `Employees` (`emp_no`, `first_name`, `last_name`, `gender`, `birth_date`, `hire_date`) VALUES
(1, 'Ali', 'Bin Hassan', 'M', '1980-05-20', '2005-06-15'),
(2, 'Aisha', 'Binti Ahmed', 'F', '1987-11-14', '2011-03-20'),
(3, 'Ahmed', 'Bin Abdul', 'M', '1975-09-30', '2000-01-05');

-- --------------------------------------------------------

--
-- Table structure for table `pelanggan`
--

CREATE TABLE `pelanggan` (
  `id_pelanggan` int(11) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `alamat` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pelanggan`
--

INSERT INTO `pelanggan` (`id_pelanggan`, `nama`, `alamat`) VALUES
(1, 'Budi', 'Jalan ABC No.1'),
(2, 'Andi', 'Jalan DEF No 1'),
(3, 'Adi', 'Jalan GHI No.1');

-- --------------------------------------------------------

--
-- Table structure for table `pesanan`
--

CREATE TABLE `pesanan` (
  `ID_Pesanan` int(11) NOT NULL,
  `ID_Pelanggan` int(11) DEFAULT NULL,
  `Tanggal_Pesanan` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pesanan`
--

INSERT INTO `pesanan` (`ID_Pesanan`, `ID_Pelanggan`, `Tanggal_Pesanan`) VALUES
(1, 1, '2023-09-01'),
(2, 2, '2023-09-03');

-- --------------------------------------------------------

--
-- Table structure for table `Salary`
--

CREATE TABLE `Salary` (
  `salary_id` int(11) NOT NULL,
  `salary` decimal(10,2) DEFAULT NULL,
  `from_date` date DEFAULT NULL,
  `to_date` date DEFAULT NULL,
  `emp_no` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Salary`
--

INSERT INTO `Salary` (`salary_id`, `salary`, `from_date`, `to_date`, `emp_no`) VALUES
(1, '5000.00', '2005-06-15', '2023-09-07', 1),
(2, '5500.50', '2011-03-20', '2023-09-07', 2),
(3, '6000.75', '2000-01-05', '2023-09-07', 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`customerNumber`);

--
-- Indexes for table `Employees`
--
ALTER TABLE `Employees`
  ADD PRIMARY KEY (`emp_no`);

--
-- Indexes for table `pelanggan`
--
ALTER TABLE `pelanggan`
  ADD PRIMARY KEY (`id_pelanggan`);

--
-- Indexes for table `pesanan`
--
ALTER TABLE `pesanan`
  ADD PRIMARY KEY (`ID_Pesanan`),
  ADD KEY `ID_Pelanggan` (`ID_Pelanggan`);

--
-- Indexes for table `Salary`
--
ALTER TABLE `Salary`
  ADD PRIMARY KEY (`salary_id`),
  ADD KEY `emp_no` (`emp_no`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `customerNumber` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `Employees`
--
ALTER TABLE `Employees`
  MODIFY `emp_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `pelanggan`
--
ALTER TABLE `pelanggan`
  MODIFY `id_pelanggan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `pesanan`
--
ALTER TABLE `pesanan`
  MODIFY `ID_Pesanan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `Salary`
--
ALTER TABLE `Salary`
  MODIFY `salary_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `pesanan`
--
ALTER TABLE `pesanan`
  ADD CONSTRAINT `pesanan_ibfk_1` FOREIGN KEY (`ID_Pelanggan`) REFERENCES `pelanggan` (`id_pelanggan`);

--
-- Constraints for table `Salary`
--
ALTER TABLE `Salary`
  ADD CONSTRAINT `salary_ibfk_1` FOREIGN KEY (`emp_no`) REFERENCES `Employees` (`emp_no`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
