-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 29, 2018 at 01:41 PM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `brozone`
--

-- --------------------------------------------------------

--
-- Table structure for table `topfiveplayer`
--

CREATE TABLE `topfiveplayer` (
  `id` int(11) NOT NULL,
  `playername` varchar(25) NOT NULL,
  `solvingtime` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `topfiveplayer`
--

INSERT INTO `topfiveplayer` (`id`, `playername`, `solvingtime`) VALUES
(1, 'gaba', '03:30:16'),
(2, 'baba', '02:21:00'),
(42, 'ultimate bro', '00:00:01'),
(43, 'Classic Bro', '00:03:40'),
(44, '', '00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `topfiveplayer`
--
ALTER TABLE `topfiveplayer`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `topfiveplayer`
--
ALTER TABLE `topfiveplayer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
