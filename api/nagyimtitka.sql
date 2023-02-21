-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Feb 21. 13:00
-- Kiszolgáló verziója: 10.4.6-MariaDB
-- PHP verzió: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `2123szft_nagyititka`
--
CREATE DATABASE IF NOT EXISTS `2123szft_nagyititka` DEFAULT CHARACTER SET utf8 COLLATE utf8_hungarian_ci;
USE `2123szft_nagyititka`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `food`
--

CREATE TABLE `food` (
  `ID` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8_hungarian_ci NOT NULL,
  `description` text COLLATE utf8_hungarian_ci NOT NULL,
  `makingof` text COLLATE utf8_hungarian_ci NOT NULL,
  `image` varchar(255) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `foodingredients`
--

CREATE TABLE `foodingredients` (
  `ID` int(11) NOT NULL,
  `foodID` int(11) NOT NULL,
  `ingredientID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `ingredients`
--

CREATE TABLE `ingredients` (
  `ID` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_hungarian_ci NOT NULL,
  `amount` int(11) NOT NULL,
  `unit` varchar(15) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- A nézet helyettes szerkezete `recipeingredients`
-- (Lásd alább az aktuális nézetet)
--
CREATE TABLE `recipeingredients` (
`ID` int(11)
,`foodID` int(11)
,`ingredientID` int(11)
,`name` varchar(255)
,`amount` int(11)
,`unit` varchar(15)
);

-- --------------------------------------------------------

--
-- Nézet szerkezete `recipeingredients`
--
DROP TABLE IF EXISTS `recipeingredients`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `recipeingredients`  AS  select `foodingredients`.`ID` AS `ID`,`food`.`ID` AS `foodID`,`ingredients`.`ID` AS `ingredientID`,`ingredients`.`name` AS `name`,`ingredients`.`amount` AS `amount`,`ingredients`.`unit` AS `unit` from ((`foodingredients` join `ingredients` on(`ingredients`.`ID` = `foodingredients`.`ingredientID`)) join `food` on(`food`.`ID` = `foodingredients`.`foodID`)) ;

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `food`
--
ALTER TABLE `food`
  ADD PRIMARY KEY (`ID`);

--
-- A tábla indexei `foodingredients`
--
ALTER TABLE `foodingredients`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `foodID` (`foodID`),
  ADD KEY `ingredientID` (`ingredientID`);

--
-- A tábla indexei `ingredients`
--
ALTER TABLE `ingredients`
  ADD PRIMARY KEY (`ID`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `food`
--
ALTER TABLE `food`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `foodingredients`
--
ALTER TABLE `foodingredients`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `ingredients`
--
ALTER TABLE `ingredients`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `foodingredients`
--
ALTER TABLE `foodingredients`
  ADD CONSTRAINT `foodingredients_ibfk_1` FOREIGN KEY (`foodID`) REFERENCES `food` (`ID`),
  ADD CONSTRAINT `foodingredients_ibfk_2` FOREIGN KEY (`ingredientID`) REFERENCES `ingredients` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
