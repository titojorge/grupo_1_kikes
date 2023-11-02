-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-11-2023 a las 16:52:12
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `kike_db`
--

--
-- Volcado de datos para la tabla `categoria_productos`
--

INSERT INTO `categoria_productos` (`id`, `nombre`, `fecha_creacion`, `fecha_modificacion`, `fecha_borrado`) VALUES
(1, 'Futbol', '2022-11-04', '2023-11-02', NULL);

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `price`, `discount`, `category_producto_id`, `description`, `image`, `type_category`, `stock`, `fecha_creacion`, `fecha_modificacion`, `fecha_borrado`) VALUES
(1, 'CAMISETA DE RIVER ADIDAS 2023 OFICIAL ORIGINAL', 99, 12, 1, 'Esta nueva camiseta oficial de River Plate ADIDAS muestra elegancia en su diseño con una banda roja que le cruza simulando aquellos uniformes de los inicios del Siglo XX. Un diseño sobrio para un equipo que se supera cada día.', 'camiseta-de-river-adidas-oficial-blanca.jpg', 'in-sale', 30, '2022-11-04', '2023-11-02', NULL),
(2, 'CAMISETA DE BOCA ADIDAS OFICIAL', 99, 3, 1, 'Esta nueva camiseta titular de Boca Juniors ADIDAS une la pasión y el barrio con diferentes tonos que logran un efecto visual y una prominente franja central que resaltan sus colores, el azul y oro.', 'camiseta-de-boca-adidas-oficial-azul.jpg', 'in-sale', 30, '2022-11-04', '2023-11-02', NULL),
(3, 'CAMISETA DE ARGENTINA ADIDAS FAN CAMPEONES BLANCA', 99, 12, 1, '¡UNA CAMISETA CON LOS COLORES DE LA SELECCIÓN PARA QUE LOS HINCHAS FESTEJEN LA TERCERA ESTRELLA! Camiseta de fútbol de la Selección Argentina hecha para los fanáticos que quieren celebrar la tercera estrella conquistada en la última Copa del Mundo.', 'camiseta-de-argentina-adidas-campeones-fan-blanca.jpg', 'visited', 25, '2022-11-04', '2023-11-02', NULL);

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `email`, `contrasenia`, `categoria`, `fecha_nacimiento`, `sexo`, `imagen`, `fecha_creacion`, `fecha_modificacion`, `fecha_borrado`) VALUES
(1, 'Juan', 'Perez', 'juanperez@gmail.com', 'juanpe', 'admin', '2000-08-17', 'M', '', '2022-11-04', '2023-11-02', NULL),
(2, 'Sofia', 'Lopez', 'sofialopez@gmail.com', 'sofialo', 'customer', '2001-02-10', 'F', '', '2022-11-04', '2023-11-02', NULL),
(3, 'Lucas', 'Torres', 'lucastorres@gmail.com', 'lucasto', 'customer', '2003-06-15', 'M', '', '2022-11-04', '2023-11-02', NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
