-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 18 Lut 2022, 23:30
-- Wersja serwera: 10.4.22-MariaDB
-- Wersja PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `warriors_arena`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `warriors`
--

CREATE TABLE `warriors` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT uuid(),
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `power` tinyint(2) NOT NULL,
  `defence` tinyint(2) NOT NULL,
  `stamina` tinyint(2) NOT NULL,
  `agility` tinyint(2) NOT NULL,
  `wins` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Zrzut danych tabeli `warriors`
--

INSERT INTO `warriors` (`id`, `name`, `power`, `defence`, `stamina`, `agility`, `wins`) VALUES
('a4733e52-1388-49ce-bc1b-7ba308c15f31', '123', 4, 3, 2, 1, 3),
('d8bec927-5e8f-4c9e-9ff9-4ed0e6d1ba6d', '1231231', 7, 1, 1, 1, 1),
('1662a523-3933-4832-b99f-022e7dbc2c4c', '1233', 4, 4, 1, 1, 1),
('55dcec8d-3eb1-44b3-98b7-be17b09b4907', '12331321', 1, 7, 1, 1, 2),
('80a10839-8ad3-11ec-8e10-54ab3ae1ad30', 'Abc', 4, 2, 2, 2, 1),
('80a10839-8ad3-11ec-8e10-54ab3ae1ad30', 'Abcd', 3, 3, 2, 2, 1),
('18ba97a0-203e-422b-9884-76515feacffc', 'asdasasd', 4, 4, 1, 1, 1),
('2aff0e1a-897a-4077-9fab-b5c7847c48ae', 'asdasd', 1, 7, 1, 1, 1),
('cf188e9d-bcfb-45eb-8643-ebca7c48361d', 'HUJ', 1, 3, 3, 3, 5),
('80a10839-8ad3-11ec-8e10-54ab3ae1ad30', 'Nuu', 4, 2, 2, 2, 1),
('132ccdfe-c9a3-4bc5-ad17-80db6bf7ae02', 'qwd', 7, 1, 1, 1, 1);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `warriors`
--
ALTER TABLE `warriors`
  ADD UNIQUE KEY `name` (`name`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
