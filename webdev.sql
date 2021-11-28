-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 28, 2021 at 10:53 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `webdev`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `User ID` int(10) UNSIGNED NOT NULL,
  `User Name` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`User ID`, `User Name`, `Password`) VALUES
(1, 'Mã Hải Nhật', '1231'),
(1000000000, 'mahainhat', '1231');

-- --------------------------------------------------------

--
-- Table structure for table `area`
--

CREATE TABLE `area` (
  `ID Area` int(10) UNSIGNED NOT NULL,
  `Name Area` varchar(255) NOT NULL,
  `Description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `Comment ID` int(10) UNSIGNED NOT NULL,
  `Content` varchar(255) DEFAULT NULL,
  `Title` varchar(255) DEFAULT NULL,
  `User ID` int(10) UNSIGNED NOT NULL,
  `Area ID` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `rate`
--

CREATE TABLE `rate` (
  `Rate ID` int(10) UNSIGNED NOT NULL,
  `User ID` int(10) UNSIGNED NOT NULL,
  `Area ID` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `Review ID` int(10) UNSIGNED NOT NULL,
  `User Name` varchar(255) NOT NULL,
  `Content` varchar(255) DEFAULT NULL,
  `Title` varchar(255) DEFAULT NULL,
  `User ID` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `User ID` int(10) UNSIGNED NOT NULL,
  `SĐT` int(11) DEFAULT NULL,
  `Địa Chỉ` varchar(255) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `Avatar` blob DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`User ID`) USING HASH,
  ADD KEY `User ID` (`User ID`);

--
-- Indexes for table `area`
--
ALTER TABLE `area`
  ADD PRIMARY KEY (`ID Area`) USING HASH,
  ADD KEY `ID Area` (`ID Area`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`Comment ID`) USING HASH,
  ADD KEY `User ID` (`User ID`),
  ADD KEY `Area ID` (`Area ID`);

--
-- Indexes for table `rate`
--
ALTER TABLE `rate`
  ADD PRIMARY KEY (`Rate ID`),
  ADD KEY `User ID` (`User ID`),
  ADD KEY `Area ID` (`Area ID`);

--
-- Indexes for table `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`Review ID`) USING HASH,
  ADD KEY `User ID` (`User ID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`User ID`) USING HASH;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`User ID`) REFERENCES `user` (`User ID`),
  ADD CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`Area ID`) REFERENCES `area` (`ID Area`);

--
-- Constraints for table `rate`
--
ALTER TABLE `rate`
  ADD CONSTRAINT `rate_ibfk_1` FOREIGN KEY (`Area ID`) REFERENCES `area` (`ID Area`),
  ADD CONSTRAINT `rate_ibfk_2` FOREIGN KEY (`User ID`) REFERENCES `user` (`User ID`);

--
-- Constraints for table `review`
--
ALTER TABLE `review`
  ADD CONSTRAINT `review_ibfk_1` FOREIGN KEY (`User ID`) REFERENCES `user` (`User ID`);

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_2` FOREIGN KEY (`User ID`) REFERENCES `account` (`User ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
