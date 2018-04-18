-- MySQL dump 10.13  Distrib 5.7.21, for Win64 (x86_64)
--
-- Host: localhost    Database: db_verify_html
-- ------------------------------------------------------
-- Server version	5.7.21-log
DROP DATABASE IF EXISTS `db_verify_html`;
CREATE DATABASE `db_verify_html`;

USE `db_verify_html`;

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `verify`
--

DROP TABLE IF EXISTS `verify`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `verify` (
  `name` varchar(55) DEFAULT NULL,
  `content` varchar(1000) DEFAULT NULL,
  `htmlComments` varchar(1000) DEFAULT NULL,
  `htmlCount` int(11) DEFAULT NULL,
  `appComments` varchar(1000) DEFAULT NULL,
  `appCount` int(11) DEFAULT NULL,
  `ipAddress` varchar(1000) DEFAULT NULL,
  `ipCount` int(11) DEFAULT NULL,
  `emailAddress` varchar(1000) DEFAULT NULL,
  `emailCount` int(11) DEFAULT NULL,
  `sqlQueries` varchar(1000) DEFAULT NULL,
  `queriesCount` int(11) DEFAULT NULL,
  `dbConnections` varchar(1000) DEFAULT NULL,
  `connectCount` int(11) DEFAULT NULL,
  `hiddenInputs` varchar(1000) DEFAULT NULL,
  `inputsCount` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `verify`
--

LOCK TABLES `verify` WRITE;
/*!40000 ALTER TABLE `verify` DISABLE KEYS */;
INSERT INTO `verify` VALUES ('Prueba','This is the content HTML','<!--comment-->',1,'/*comment*/',1,'192.168.0.1',1,'__pm@outlook.com',1,'SELECT * FROM users',1,'server=mysql; Port=3306; Database=testing; \n            user=Paco; Password=myPassword',1,'<input type=\'hidden\' name=\'primer hidden\'>',1);
/*!40000 ALTER TABLE `verify` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-04-17 19:25:08
