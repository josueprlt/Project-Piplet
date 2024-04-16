-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : mysql
-- Généré le : sam. 06 avr. 2024 à 20:32
-- Version du serveur : 8.3.0
-- Version de PHP : 8.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `SAE4_DWeb_DI_01`
--

-- --------------------------------------------------------

--
-- Structure de la table `category`
--

CREATE TABLE `category` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `img` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `description` longtext COLLATE utf8mb3_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Déchargement des données de la table `category`
--

INSERT INTO `category` (`id`, `name`, `img`, `description`) VALUES
(1, 'Comedy', '/category/comedy.jpg', 'Découvrez l\'univers hilarant de la comédie sur notre site. Plongez dans une sélection de films, séries et sketches qui vous feront rire aux éclats.'),
(2, 'Drama', '/category/drama.jpg', 'Découvrez l\'intensité émotionnelle du drame à travers notre catégorie dédiée. Plongez-vous dans des récits captivants.'),
(3, 'Action', '/category/action.jpg', 'Découvrez l\'excitation et l\'adrénaline avec notre sélection de films d\'action. Plongez dans des aventures palpitantes, des combats épiques et des courses poursuites à couper le souffle.'),
(4, 'Fantasy', '/category/fantasy.jpg', 'Découvrez un monde fantastique rempli d\'aventures épiques, de créatures mythiques et de magie en explorant notre collection de films. Plongez dans des univers enchanteurs où les limites de l\'imagination sont repoussées.'),
(5, 'Horror', '/category/horror.jpg', 'Découvrez l\'angoisse et l\'excitation avec notre catégorie Horror. Plongez dans un monde de frissons et de suspens, où les cauchemars prennent vie.');

-- --------------------------------------------------------

--
-- Structure de la table `doctrine_migration_versions`
--

CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8mb3_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Déchargement des données de la table `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20240315101219', '2024-03-23 12:27:23', 249),
('DoctrineMigrations\\Version20240315132447', '2024-03-23 12:27:23', 26),
('DoctrineMigrations\\Version20240329103953', '2024-03-30 10:49:50', 160),
('DoctrineMigrations\\Version20240402095418', '2024-04-02 09:54:32', 86),
('DoctrineMigrations\\Version20240403070333', '2024-04-03 07:03:55', 188),
('DoctrineMigrations\\Version20240403070912', '2024-04-03 07:09:33', 165),
('DoctrineMigrations\\Version20240403124122', '2024-04-03 12:41:40', 71),
('DoctrineMigrations\\Version20240403130927', '2024-04-03 13:09:44', 89),
('DoctrineMigrations\\Version20240405080804', '2024-04-05 08:08:25', 123),
('DoctrineMigrations\\Version20240405171622', '2024-04-05 17:16:58', 583);

-- --------------------------------------------------------

--
-- Structure de la table `movie`
--

CREATE TABLE `movie` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb3_unicode_ci NOT NULL,
  `img` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `link_yt` longtext COLLATE utf8mb3_unicode_ci,
  `realisateur` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `time` varchar(20) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `date_deb` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `date_fin` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Déchargement des données de la table `movie`
--

INSERT INTO `movie` (`id`, `name`, `description`, `img`, `link_yt`, `realisateur`, `time`, `date_deb`, `date_fin`) VALUES
(1, 'BladeRunner 2049', 'En 2049, la société est fragilisée par les nombreuses tensions entre les humains et leurs esclaves créés par bio-ingénierie. L\'officier K est un blade runner: il fait partie d\'une force d\'intervention d\'élite chargée de trouver et d\'éliminer ceux qui n\'obéissent pas aux ordres des humains.', '/film/bladerunner.jpg', 'https://www.youtube.com/embed/gCcx85zbxz4?si=86Eed7INJKHPeIVY', 'Denis Villeneuve', '2h 43min', '25 avril 2012', '30 avril 2049'),
(2, 'Joker', 'Arthur Fleck, comédien raté, rencontre des voyous violents en errant dans les rues de Gotham City déguisé en clown. Méprisé par la société, Fleck s\'enfonce peu à peu dans la démence et devient le génie criminel connu sous le nom de Joker, un dangereux tueur psychotique.', '/film/joker.jpg', 'https://www.youtube.com/embed/zAGVQLHvwOY?si=blWcDCZWBFwU9Mo2', 'Todd Phillips', '2h 2min', '17 juin 2018', '7 novembre 2025'),
(3, 'Parrain', 'En 1945, à New York, les Corleone sont une des 5 familles de la mafia. Don Vito Corleone, `parrain\' de cette famille, marie sa fille à un bookmaker. Sollozzo, `parrain\' de la famille Tattaglia, propose à Don Vito une association dans le trafic de drogue, mais celui-ci refuse.', '/film/parrain.jpg', 'https://www.youtube.com/embed/bmtuIhesQWA?si=6KL9mJ-3UlqkMtIU', 'Francis Ford Coppola', '2h 55min', '15 décembre 2004', '31 janvier 2028'),
(4, 'Tenet', 'Muni d\'un seul mot, \"Tenet,\" et décidé à se battre pour sauver le monde, un homme sillonne l\'univers crépusculaire de l\'espionnage international. Sa mission le projettera dans une dimension qui dépasse le temps. Pourtant, il ne s\'agit pas d\'un voyage dans le temps, mais d\'un renversement temporel.', '/film/tenet.jpg', 'https://www.youtube.com/embed/L3pk_TBkihU?si=S3Cvfr08uM981_-s', 'Christopher Nolan', '2h 30min', '1 juin 2014', '10 juin 2075'),
(7, 'Oppenheimer', 'En 1942, convaincus que l\'Allemagne nazie est en train de développer une arme nucléaire, les États-Unis initient, dans le plus grand secret, le Projet Manhattan destiné à mettre au point la première bombe atomique de l\'histoire. Pour piloter ce dispositif, le gouvernement engage J.', '/film/oppenheimer.jpg', 'https://www.youtube.com/embed/uYPbbksJxIg?si=ceCdeAzqDdwiuyHU', 'Christopher Nolan', '3h', '5 avril 1999', '23 octobre 2054'),
(8, 'A l\'Ouest, rien de nouveau', '1914, la guerre éclate en Allemagne. Paul Baumer et quelques camarades incités par leurs professeurs, s\'enrôlent très vite dans l\'armée, prêts à servir leur patrie. À peine engagés, l\'esprit volontaire fait place aux désillusions', '/film/alouestriendenouveau.jpg', 'https://www.youtube.com/embed/5ABgVzSc_BY?si=2rKYVb_pT5o-H8Ya', 'Edward Berger', '2h 27min', '25 mars 2018', '21 juillet 2026'),
(9, 'Ready Player One', 'En 2045, la planète frôle le chaos et s\'effondre, mais les gens trouvent du réconfort dans l\'OASIS, un monde virtuel créé par James Halliday. Lorsque Halliday meurt, il promet son immense fortune à la première personne qui découvre un oeuf de Pâques numérique caché dans l\'OASIS.', '/film/readyplayerone.jpg', 'https://www.youtube.com/embed/oYGkAMHCOC4?si=foefo6TPXq9HbvHW', 'Steven Spielberg', '2h 20min', '14 avril 2015', '15 juin 2025'),
(10, 'Hunger Games', 'Katniss Everdeen s\'est réfugiée dans le District 13 après avoir détruit à jamais l\'arène et les Jeux. Sous le commandement de la présidente Coin, chef du district, et suivant les conseils de ses amis en qui elle a toute confiance, Katniss déploie ses ailes pour devenir le symbole de la rébellion.', '/film/hungergames.jpg', 'https://www.youtube.com/embed/mfmrPu43DF8?si=KZZBLclS_x_U-uFO', 'Francis Lawrence', '2h 3min', '13 mai 2017', '6 juin 2024'),
(11, 'The Boys', 'Lorsque les super-héros abusent de leurs super-pouvoirs au lieu de les utiliser pour faire le bien, les Boys se lancent dans une quête héroïque pour révéler la vérité sur The Seven et Vought, le conglomérat qui couvre leurs sales secrets.', '/film/theboys.jpg', 'https://www.youtube.com/embed/yRwGoS-KPVE?si=orEHlL0I6u3_40ym', 'Eric Kripke', '4 saisons', '1 juin 2019', '5 juillet 2029');

-- --------------------------------------------------------

--
-- Structure de la table `movie_category`
--

CREATE TABLE `movie_category` (
  `movie_id` int NOT NULL,
  `category_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Déchargement des données de la table `movie_category`
--

INSERT INTO `movie_category` (`movie_id`, `category_id`) VALUES
(1, 2),
(1, 3),
(2, 2),
(3, 3),
(4, 3),
(4, 4),
(7, 2),
(7, 3),
(8, 2),
(8, 3),
(8, 5),
(9, 1),
(9, 3),
(9, 4),
(10, 3),
(10, 4),
(11, 1),
(11, 2),
(11, 3);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int NOT NULL,
  `email` varchar(180) COLLATE utf8mb3_unicode_ci NOT NULL,
  `roles` json NOT NULL,
  `password` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `img_profile` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email`, `roles`, `password`, `name`, `img_profile`) VALUES
(3, 'test.test@gmail.com', '[\"ROLE_USER\", \"ROLE_ADMIN\"]', '$2y$13$V2rZIFDD7DS2v0KhjGkR5.RtzyUN4/bszndkQvREqp8LckeOtzkva', 'test', '/user/profileImage2.png'),
(4, 'testotest@gmail.com', '[\"ROLE_USER\"]', '$2y$13$LhkOCfkXIw0Bi7krD36DhOFQOM0h/ogAWRqpGqgM0.eWbEhQfi7Ri', 'Jean', '/user/profileImage3.png'),
(5, 'tostestas@gmail.com', '[\"ROLE_USER\"]', '$2y$13$Yop/IP523CNjqvlr1XsxFOdzRoLFAmUD7zHd7fd6Fbrltettpg5rS', 'Tostestas Luis', '/user/profileImage5.png'),
(6, 'jeantesteur@gmail.com', '[\"ROLE_USER\"]', '$2y$13$iJL/SLmsLHMeYFTFskqLE.xzdf7kxUcs2EaktiFD.YUI0qYk68E2m', 'Jean Testeur', '/user/profileImage1.png'),
(10, 'josue.perrault@etu.unilim.fr', '[\"ROLE_USER\"]', '$2y$13$A2QJe9Jo8O1j/G.mSq03HO5cBj6ALRag6iubICRGiufDF/RpPRn9i', 'Josue', '/user/profileImage1.png');

-- --------------------------------------------------------

--
-- Structure de la table `user_movie`
--

CREATE TABLE `user_movie` (
  `user_id` int NOT NULL,
  `movie_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Déchargement des données de la table `user_movie`
--

INSERT INTO `user_movie` (`user_id`, `movie_id`) VALUES
(5, 4),
(6, 1),
(6, 7);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `doctrine_migration_versions`
--
ALTER TABLE `doctrine_migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Index pour la table `movie`
--
ALTER TABLE `movie`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `movie_category`
--
ALTER TABLE `movie_category`
  ADD PRIMARY KEY (`movie_id`,`category_id`),
  ADD KEY `IDX_DABA824C8F93B6FC` (`movie_id`),
  ADD KEY `IDX_DABA824C12469DE2` (`category_id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_IDENTIFIER_EMAIL` (`email`);

--
-- Index pour la table `user_movie`
--
ALTER TABLE `user_movie`
  ADD PRIMARY KEY (`user_id`,`movie_id`),
  ADD KEY `IDX_FF9C0937A76ED395` (`user_id`),
  ADD KEY `IDX_FF9C09378F93B6FC` (`movie_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `category`
--
ALTER TABLE `category`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `movie`
--
ALTER TABLE `movie`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `movie_category`
--
ALTER TABLE `movie_category`
  ADD CONSTRAINT `FK_DABA824C12469DE2` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_DABA824C8F93B6FC` FOREIGN KEY (`movie_id`) REFERENCES `movie` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `user_movie`
--
ALTER TABLE `user_movie`
  ADD CONSTRAINT `FK_FF9C09378F93B6FC` FOREIGN KEY (`movie_id`) REFERENCES `movie` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_FF9C0937A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
