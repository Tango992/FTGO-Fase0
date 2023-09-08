-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 08, 2023 at 08:24 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `setup`
--

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE `book` (
  `isbn` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `author` varchar(100) NOT NULL,
  `publisher` varchar(100) NOT NULL,
  `year` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`isbn`, `title`, `author`, `publisher`, `year`) VALUES
(1, 'Pengantar Biologi', 'Budi', 'Erlangga', '2000-01-01'),
(2, 'Fisika', 'Andi', 'Pearson', '2014-05-14'),
(3, 'Kalkulus', 'Arjo', 'Kompas', '2010-09-11');

-- --------------------------------------------------------

--
-- Table structure for table `lending_transaction`
--

CREATE TABLE `lending_transaction` (
  `transaction_id` int(11) NOT NULL,
  `member_id` int(11) NOT NULL,
  `isbn` int(11) NOT NULL,
  `lending_date` date NOT NULL,
  `return_date` date DEFAULT NULL,
  `condition_at_return` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `lending_transaction`
--

INSERT INTO `lending_transaction` (`transaction_id`, `member_id`, `isbn`, `lending_date`, `return_date`, `condition_at_return`) VALUES
(1, 1, 1, '2023-09-07', NULL, NULL),
(2, 2, 1, '2023-08-10', '2023-08-14', 'Good'),
(3, 1, 2, '2023-06-10', '2023-07-10', 'Bad'),
(4, 3, 3, '2023-08-21', '2023-08-28', 'Good'),
(5, 1, 3, '2023-09-07', NULL, NULL),
(6, 3, 2, '2023-05-10', '2023-05-14', 'Bad');

--
-- Triggers `lending_transaction`
--
DELIMITER $$
CREATE TRIGGER `Before_LendingTransaction_Insert` BEFORE INSERT ON `lending_transaction` FOR EACH ROW BEGIN
    DECLARE BorrowedBooksCount INT;
    
    SELECT COUNT(*) INTO BorrowedBooksCount
    FROM lending_transaction
    WHERE member_id = NEW.member_id AND return_date IS NULL;
    
    IF BorrowedBooksCount >= 5 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'A member cannot borrow more than 5 books at a time';
    END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE `member` (
  `member_id` int(11) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `birth` date DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`member_id`, `first_name`, `last_name`, `birth`, `address`) VALUES
(1, 'John', 'Doe', '2001-09-11', 'Jalan Cemara'),
(2, 'Daniel', 'Rahmanto', '2001-05-14', 'Jalan Asri'),
(3, 'Foo', 'Bar', '1999-09-09', 'Jalan Perjuangan');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`isbn`);

--
-- Indexes for table `lending_transaction`
--
ALTER TABLE `lending_transaction`
  ADD PRIMARY KEY (`transaction_id`),
  ADD KEY `member_id` (`member_id`),
  ADD KEY `isbn` (`isbn`);

--
-- Indexes for table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`member_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `book`
--
ALTER TABLE `book`
  MODIFY `isbn` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `lending_transaction`
--
ALTER TABLE `lending_transaction`
  MODIFY `transaction_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `member`
--
ALTER TABLE `member`
  MODIFY `member_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `lending_transaction`
--
ALTER TABLE `lending_transaction`
  ADD CONSTRAINT `lending_transaction_ibfk_1` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`),
  ADD CONSTRAINT `lending_transaction_ibfk_2` FOREIGN KEY (`isbn`) REFERENCES `book` (`isbn`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
