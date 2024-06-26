-- MySQL dump 10.13  Distrib 8.0.34, for macos13 (arm64)
--
-- Host: 127.0.0.1    Database: cloudsound
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Addresses`
--

DROP TABLE IF EXISTS `Addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Addresses` (
  `aID` int NOT NULL AUTO_INCREMENT,
  `nUserID` int NOT NULL,
  `vchAddress1` varchar(45) DEFAULT NULL,
  `vchAddress2` varchar(45) DEFAULT NULL,
  `vchCity` varchar(45) DEFAULT NULL,
  `nStateID` int DEFAULT NULL,
  `vchZIP` varchar(45) DEFAULT NULL,
  `nCountryID` int NOT NULL,
  `bIsActive` int NOT NULL DEFAULT '0',
  `bIsDeleted` int NOT NULL DEFAULT '0',
  `bUpdateDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `bInsertDate` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`aID`),
  UNIQUE KEY `ID_UNIQUE` (`aID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Addresses`
--

LOCK TABLES `Addresses` WRITE;
/*!40000 ALTER TABLE `Addresses` DISABLE KEYS */;
/*!40000 ALTER TABLE `Addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `BanRequests`
--

DROP TABLE IF EXISTS `BanRequests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `BanRequests` (
  `aID` int NOT NULL AUTO_INCREMENT,
  `nRequesterUserID` int DEFAULT NULL,
  `nRequestedUserID` int DEFAULT NULL,
  `vchReason` varchar(1000) DEFAULT NULL,
  `dtRequested` datetime DEFAULT CURRENT_TIMESTAMP,
  `dtResolved` datetime DEFAULT NULL,
  `bResolved` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`aID`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `BanRequests`
--

LOCK TABLES `BanRequests` WRITE;
/*!40000 ALTER TABLE `BanRequests` DISABLE KEYS */;
INSERT INTO `BanRequests` VALUES (3,1,2,'just cause','2024-04-15 19:44:07','2024-04-16 21:00:56',-1),(8,0,2,'i said so','2024-04-16 14:21:55','2024-04-16 21:22:00',1),(9,0,2,'wefwf','2024-04-16 14:27:00','2024-04-16 21:27:06',1),(10,0,2,'ererbeb','2024-04-16 14:32:42','2024-04-16 21:32:49',1),(12,1,123,'123','2024-05-11 18:06:03',NULL,0);
/*!40000 ALTER TABLE `BanRequests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Cart`
--

DROP TABLE IF EXISTS `Cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Cart` (
  `aID` int NOT NULL AUTO_INCREMENT,
  `nUserID` int DEFAULT NULL,
  `nStoreID` int DEFAULT NULL,
  `nProductID` int DEFAULT NULL,
  `nQuantity` int DEFAULT NULL,
  `nActive` int DEFAULT '0',
  PRIMARY KEY (`aID`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Cart`
--

LOCK TABLES `Cart` WRITE;
/*!40000 ALTER TABLE `Cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `Cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Followers`
--

DROP TABLE IF EXISTS `Followers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Followers` (
  `aID` int NOT NULL AUTO_INCREMENT,
  `nUserID` int DEFAULT NULL,
  `nFollowingID` int DEFAULT NULL,
  `dtUpdateDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `dtInsertDate` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`aID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Followers`
--

LOCK TABLES `Followers` WRITE;
/*!40000 ALTER TABLE `Followers` DISABLE KEYS */;
INSERT INTO `Followers` VALUES (1,1,11,'2024-05-13 02:23:39','2024-05-13 02:23:39');
/*!40000 ALTER TABLE `Followers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Genres`
--

DROP TABLE IF EXISTS `Genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Genres` (
  `aID` int NOT NULL AUTO_INCREMENT,
  `vchName` varchar(45) DEFAULT NULL,
  `txtDescription` text,
  `bIsDeleted` int NOT NULL DEFAULT '0',
  `dtUpdateDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `dtInsertDate` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`aID`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Genres`
--

LOCK TABLES `Genres` WRITE;
/*!40000 ALTER TABLE `Genres` DISABLE KEYS */;
INSERT INTO `Genres` VALUES (1,'Rock','A genre that evolved from rock and roll and pop music during the 1950s and 1960s. It\'s characterized by the use of electric guitars, bass guitar, drums, and often keyboards.',0,'2024-03-20 23:41:23','2024-03-20 23:41:23'),(2,'Pop','Short for \"popular music,\" pop is a commercially recorded music genre, often aimed at young audiences, consisting of relatively short, simple songs featuring technological innovations to enhance their appeal.',0,'2024-03-20 23:41:23','2024-03-20 23:41:23'),(3,'Jazz','Originating in the African-American communities of New Orleans in the late 19th and early 20th centuries, jazz is characterized by swing and blue notes, complex chords, and call and response vocals.',0,'2024-03-20 23:41:23','2024-03-20 23:41:23'),(4,'Classical','Spanning over 1000 years, classical music includes both sacred and secular music composed for orchestras, choirs, ensembles, or solo instruments, characterized by its highly structured nature.',0,'2024-03-20 23:41:23','2024-03-20 23:41:23'),(5,'Hip-Hop/Rap','Originating in the 1970s in New York City, hip-hop culture includes rapping (MCing), DJing (audio mixing and scratching), graffiti painting, and break dancing, with an emphasis on lyrical expression and beat.',0,'2024-03-20 23:41:23','2024-03-20 23:41:23'),(6,'EDM','Electronic/Dance - Encompassing a wide range of styles including disco, techno, house, and EDM, electronic music is characterized by the use of electronic instruments and digital technology to produce sound.',0,'2024-03-20 23:41:23','2024-03-20 23:41:23'),(7,'Country','Originating in the Southern United States in the 1920s, country music often consists of ballads and dance tunes with generally simple forms and harmonies, accompanied by string instruments such as banjos, electric and acoustic guitars, and fiddles.',0,'2024-03-20 23:41:23','2024-03-20 23:41:23'),(8,'Blues',' Originated in the African-American communities in the Deep South of the United States around the end of the 19th century, the blues form is characterized by its specific chord progressions and the melancholic themes of its lyrics.',0,'2024-03-20 23:41:23','2024-03-20 23:41:23'),(9,'Reggae','Originating in Jamaica in the late 1960s, reggae is characterized by a slow tempo, accentuated off-beat rhythms, and lyrics often addressing social and political issues.',0,'2024-03-20 23:41:23','2024-03-20 23:41:23'),(10,'Folk','Often seen as the music of the common people, folk music includes traditional songs and styles that are typically passed down through oral traditions. It often reflects the cultural life of a community.',0,'2024-03-20 23:41:23','2024-03-20 23:41:23'),(11,'Heavy Metal','Characterized by its loud, aggressive sound, heavy metal music features amplified distortion, extended guitar solos, emphatic beats, and overall loudness.',0,'2024-03-20 23:41:23','2024-03-20 23:41:23'),(12,'Punk Rock','Emerging in the 1970s, punk rock is characterized by short, fast-paced songs with hard-edged melodies and singing styles, stripped-down instrumentation, and often political, anti-establishment lyrics.',0,'2024-03-20 23:41:23','2024-03-20 23:41:23'),(13,'Opera','A part of the classical music tradition, opera combines singing with orchestral accompaniment and visual elements such as stage, scenery, costumes, and sometimes dance.',0,'2024-03-20 23:41:23','2024-03-20 23:41:23'),(14,'Soul','Combining elements of African-American gospel music, rhythm and blues, and jazz, soul music became popular in the United States in the 1950s and 1960s, characterized by its emotional vocal delivery and depth of feeling.',0,'2024-03-20 23:41:23','2024-03-20 23:41:23'),(15,'Reggaeton','A music style originating in Puerto Rico during the late 1990s, reggaeton blends Puerto Rican music with influences from hip-hop and Caribbean music, known for its dembow rhythm.',0,'2024-03-20 23:41:23','2024-03-20 23:41:23'),(16,'K-Pop','Short for Korean pop music, K-pop is characterized by its wide variety of audiovisual elements. Although it incorporates all forms of Korean music, it often refers to the more modern forms that have gained international popularity since the 2000s.',0,'2024-03-20 23:41:23','2024-03-20 23:41:23'),(17,'R&B','Rhythm and Blues - Originating in the 1940s, R&B is known for its soulful vocals and incorporates elements of gospel, blues, and jazz music. It\'s a genre that focuses on themes of love, relationships, and personal struggle.',0,'2024-03-20 23:51:33','2024-03-20 23:51:33'),(18,'Indie Rock','A genre of alternative rock that originated in the 1980s. Indie rock is characterized by its diverse sound, DIY ethic towards production, and its independence from major commercial record labels.',0,'2024-03-20 23:51:33','2024-03-20 23:51:33'),(19,'Gospel','A genre of Christian music characterized by dominant vocals (often with strong use of harmony) and lyrics that express personal or communal belief regarding Christian life and faith.',0,'2024-03-20 23:51:33','2024-03-20 23:51:33'),(20,'Blues Rock','A fusion genre combining elements of blues and rock music, known for its amplified blues style, featuring electric guitar, bass guitar, and drums.',0,'2024-03-20 23:51:33','2024-03-20 23:51:33'),(21,'Ska','Originating in Jamaica in the late 1950s, ska combines elements of Caribbean mento and calypso with American jazz and rhythm and blues. It is characterized by a walking bass line accented with rhythms on the off-beat.',0,'2024-03-20 23:51:33','2024-03-20 23:51:33'),(22,'Funk','Originated in the mid-1960s, funk is known for its rhythmic groove of drums, bass guitar riffs, and funky guitar, emphasizing the downbeat and danceability.',0,'2024-03-20 23:51:33','2024-03-20 23:51:33'),(23,'Disco','Popular in the late 1970s, disco is known for its upbeat, danceable music featuring a steady four-on-the-floor beat, with bass drum on every beat, rich orchestration, and often, strings, horns, electric piano, and electric rhythm guitars.',0,'2024-03-20 23:51:33','2024-03-20 23:51:33'),(24,'Techno','A form of electronic dance music (EDM) that emerged in Detroit, Michigan, in the late 1980s. Techno is generally repetitive instrumental music, often produced for use in a continuous DJ set, with a focus on rhythm and a futuristic sound.',0,'2024-03-20 23:51:33','2024-03-20 23:51:33'),(25,'Trance','A genre of electronic music developed in the 1990s, characterized by its tempo lying between 125 to 150 beats per minute, repeating melodic phrases, and a musical form that builds up and down throughout a track.',0,'2024-03-20 23:51:33','2024-03-20 23:51:33'),(26,'Grime','Originating in London in the early 2000s, grime combines elements of dancehall, hip-hop, and UK garage, known for its rapid breakbeats, electronic sounds, and aggressive lyrics.',0,'2024-03-20 23:51:33','2024-03-20 23:51:33'),(27,'New Wave','Originating in the late 1970s, new wave incorporated elements of punk rock, electronic music, reggae, and funk to create a pop-oriented music that was more accessible and radio-friendly.',0,'2024-03-20 23:51:33','2024-03-20 23:51:33'),(28,'Ambient','A genre of music that emphasizes tone and atmosphere over traditional musical structure or rhythm. Ambient music is often intended to induce a sense of calm and relaxation on its listeners.',0,'2024-03-20 23:51:33','2024-03-20 23:51:33'),(29,'Dubstep','Originating in South London in the late 1990s, dubstep is characterized by sparse, syncopated rhythmic patterns with bass lines that contain prominent sub-bass frequencies.',0,'2024-03-20 23:51:33','2024-03-20 23:51:33'),(30,'World Music','A broad category that includes traditional music, folk music, and music where more than one cultural tradition, such as non-Western music and Western popular music, intermingle.',0,'2024-03-20 23:51:33','2024-03-20 23:51:33'),(31,'Afrobeat','A genre that combines traditional Nigerian music, jazz, highlife, funk, and chanted vocals, fused with percussion and vocal styles, popularized in Africa in the 1970s.',0,'2024-03-20 23:51:33','2024-03-20 23:51:33'),(32,'Latin','Encompasses a wide variety of genres and styles that originate from Spanish and Portuguese-speaking areas of the Americas and are influenced by various South American and Caribbean cultures.',0,'2024-03-20 23:51:33','2024-03-20 23:51:33'),(33,'Psychadelic Rock','Developed during the mid-1960s, psychedelic rock attempts to replicate and enhance the mind-altering experiences of psychedelic drugs, featuring extended solos, surreal lyrics, and elaborate studio effects.',0,'2024-03-20 23:51:33','2024-03-20 23:51:33'),(34,'Industrial','A genre of experimental music that draws on harsh, transgressive or provocative sounds and themes. It\'s characterized by repetitive beats, atmospheric noise, and often, themes of political or cultural critique.',0,'2024-03-20 23:51:33','2024-03-20 23:51:33'),(35,'Emo','Short for \"emotional hardcore\" or \"emocore,\" emo emerged in the 1980s as a style of post-hardcore music but evolved over the years to include pop-punk and indie rock sounds, characterized by expressive, often confessional, lyrics.',0,'2024-03-20 23:51:33','2024-03-20 23:51:33'),(36,'Fusion',' A genre that developed in the late 1960s when musicians combined jazz harmony and improvisation with rock music, funk, and rhythm and blues. ',0,'2024-03-20 23:51:33','2024-03-20 23:51:33');
/*!40000 ALTER TABLE `Genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `OrderItems`
--

DROP TABLE IF EXISTS `OrderItems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `OrderItems` (
  `aID` int NOT NULL AUTO_INCREMENT,
  `nProductID` int NOT NULL,
  `nQuantity` int NOT NULL DEFAULT '1',
  `fPrice` float DEFAULT NULL,
  `dtUpdateDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `dtInsertDate` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`aID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `OrderItems`
--

LOCK TABLES `OrderItems` WRITE;
/*!40000 ALTER TABLE `OrderItems` DISABLE KEYS */;
/*!40000 ALTER TABLE `OrderItems` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Orders`
--

DROP TABLE IF EXISTS `Orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Orders` (
  `aID` int NOT NULL AUTO_INCREMENT,
  `nUserID` int DEFAULT NULL,
  `nItemCount` int DEFAULT NULL,
  `fCostTotal` float DEFAULT NULL,
  `fTaxTotal` float DEFAULT NULL,
  `fShippingTotal` float DEFAULT NULL,
  `fGrandTotal` float DEFAULT NULL,
  `bIsPaid` int DEFAULT '0',
  `nCCInfoID` int DEFAULT NULL,
  `nShippingAddressID` int DEFAULT NULL,
  `nBillingAddressID` int DEFAULT NULL,
  `bIsShipped` int DEFAULT '0',
  `bIsCanceled` int DEFAULT '0',
  `dtUpdateDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `dtInsertDate` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`aID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Orders`
--

LOCK TABLES `Orders` WRITE;
/*!40000 ALTER TABLE `Orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `Orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Products`
--

DROP TABLE IF EXISTS `Products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Products` (
  `aID` int NOT NULL AUTO_INCREMENT,
  `nStoreID` int DEFAULT NULL,
  `vchName` varchar(255) DEFAULT NULL,
  `txtDescription` text,
  `fPrice` float DEFAULT NULL,
  `fShipping` float DEFAULT NULL,
  `nInventory` int DEFAULT NULL,
  `vchImagePath` varchar(255) DEFAULT NULL,
  `bIsDeleted` int DEFAULT '0',
  `dtUpdateDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `dtInsertDate` datetime DEFAULT NULL,
  PRIMARY KEY (`aID`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Products`
--

LOCK TABLES `Products` WRITE;
/*!40000 ALTER TABLE `Products` DISABLE KEYS */;
INSERT INTO `Products` VALUES (1,1,'Art Print','I made something cool',10.83,2,44,'',0,'2024-03-21 15:40:42',NULL),(2,1,'Strained Glass Art','This is also really cool',10,2,123,'',0,'2024-03-21 15:57:15',NULL),(3,2,'My brain','Not using anymore',5,1,1,'',0,'2024-03-21 16:02:46',NULL);
/*!40000 ALTER TABLE `Products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Reports`
--

DROP TABLE IF EXISTS `Reports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Reports` (
  `idReports` int NOT NULL,
  `ReportType` varchar(45) DEFAULT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `UserID` int DEFAULT NULL,
  `ProductID` int DEFAULT NULL,
  PRIMARY KEY (`idReports`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Reports`
--

LOCK TABLES `Reports` WRITE;
/*!40000 ALTER TABLE `Reports` DISABLE KEYS */;
/*!40000 ALTER TABLE `Reports` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `StoreFollowers`
--

DROP TABLE IF EXISTS `StoreFollowers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `StoreFollowers` (
  `aID` int NOT NULL AUTO_INCREMENT,
  `nUserID` int DEFAULT NULL,
  `nStoreID` int DEFAULT NULL,
  `dtUpdateDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `dtInsertDate` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`aID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `StoreFollowers`
--

LOCK TABLES `StoreFollowers` WRITE;
/*!40000 ALTER TABLE `StoreFollowers` DISABLE KEYS */;
/*!40000 ALTER TABLE `StoreFollowers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Stores`
--

DROP TABLE IF EXISTS `Stores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Stores` (
  `aID` int NOT NULL AUTO_INCREMENT,
  `nUserID` int DEFAULT NULL,
  `vchName` varchar(255) DEFAULT NULL,
  `txtDescription` text,
  `dtUpdateDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `dtInsertDate` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`aID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Stores`
--

LOCK TABLES `Stores` WRITE;
/*!40000 ALTER TABLE `Stores` DISABLE KEYS */;
INSERT INTO `Stores` VALUES (1,1,'Nova Nook','Welcome to Nova Nook, your cosmic haven for celestial decor, futuristic gadgets, and space-themed treasures. Discover a universe of wonder and inspiration in every product, bringing the enchantment of the stars into your everyday life.','2024-03-19 16:50:16','2024-03-21 12:27:49'),(2,2,'Solstice Shoppe','Discover the magic of every season at Solstice Shoppe, where we offer unique, seasonal decor, gifts, and apparel to celebrate the solstices and beyond. From festive holiday treasures to summer solstice essentials, find everything you need to make each season special.','2024-03-21 05:09:30','2024-03-21 12:27:49'),(3,3,'Mystic Market','Immerse yourself in the enchanting world of Mystic Market, where we offer a curated selection of mystical and eclectic music to elevate your listening experience. From ambient soundscapes to ethereal melodies, find the perfect soundtrack for your soul\'s journey.','2024-03-21 12:29:17','2024-03-21 12:29:17');
/*!40000 ALTER TABLE `Stores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Tracks`
--

DROP TABLE IF EXISTS `Tracks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Tracks` (
  `aID` int NOT NULL AUTO_INCREMENT,
  `nAuthorID` int DEFAULT NULL,
  `vchTitle` varchar(255) DEFAULT NULL,
  `txtDescription` text,
  `vchAudioURL` varchar(255) DEFAULT NULL,
  `vchImagePath` varchar(255) DEFAULT NULL,
  `nGenreID` int DEFAULT NULL,
  `dtUpdateDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `dtInsertDate` datetime DEFAULT NULL,
  PRIMARY KEY (`aID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Tracks`
--

LOCK TABLES `Tracks` WRITE;
/*!40000 ALTER TABLE `Tracks` DISABLE KEYS */;
INSERT INTO `Tracks` VALUES (1,1,'play me','best song','someurl',NULL,1,'2024-04-16 17:29:55',NULL),(2,1,'play me 2','description','basic',NULL,NULL,'2024-04-16 17:29:55',NULL),(3,2,'my best song',NULL,NULL,NULL,2,'2024-05-16 11:41:30',NULL),(4,3,'walk at the beach',NULL,NULL,NULL,NULL,'2024-05-16 11:42:32',NULL),(5,3,'walk in the park',NULL,NULL,NULL,NULL,'2024-05-16 11:42:32',NULL),(6,3,'walk in my house',NULL,NULL,NULL,NULL,'2024-05-16 11:42:32',NULL);
/*!40000 ALTER TABLE `Tracks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `aID` int NOT NULL AUTO_INCREMENT,
  `vchUsername` varchar(45) NOT NULL,
  `vchPassword` varchar(45) NOT NULL,
  `dtLastLogin` datetime DEFAULT NULL,
  `vchFirstName` varchar(45) DEFAULT NULL,
  `vchLastName` varchar(45) DEFAULT NULL,
  `vchNickname` varchar(45) DEFAULT NULL,
  `vchEmail` varchar(45) DEFAULT NULL,
  `bIsVerified` int DEFAULT '0',
  `txtBio` text,
  `vchProfilePicPath` varchar(255) DEFAULT NULL,
  `nShippingAddressID` int DEFAULT NULL,
  `nBillingAddressID` int DEFAULT NULL,
  `bIsBanned` int DEFAULT '0',
  `dtUpdateDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `dtInsertDate` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`aID`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'johndoe','password',NULL,'John','Doe','JD','johndoe@gmail.com',1,'Just a guy who likes music',NULL,NULL,NULL,0,'2024-03-18 16:55:55','2024-03-18 16:55:55'),(2,'janedoe','password',NULL,'Jane','Doe','','janedoe@gmail.com',1,'The girl he told you not to worry about',NULL,NULL,NULL,0,'2024-03-19 16:54:12','2024-03-19 16:54:12'),(3,'storeOwner3','asdf',NULL,'store','owner',NULL,'storeowner3@gmail.com',1,NULL,NULL,NULL,NULL,0,'2024-05-16 11:32:27','2024-05-16 11:32:27'),(17,'joesmith','idkbro',NULL,'Joe','Smith',NULL,'joesmith@gmail.com',0,NULL,NULL,NULL,NULL,0,'2024-05-16 11:45:46','2024-05-16 11:45:46');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-16 12:11:41
