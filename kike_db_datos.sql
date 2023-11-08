-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-11-2023 a las 05:04:19
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
(1, 'Futbol', '2022-11-04', '2023-11-02', NULL),
(2, 'Basquet', '2023-11-02', '2023-11-02', NULL);

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `price`, `discount`, `category_producto_id`, `description`, `image`, `type_category`, `stock`, `fecha_creacion`, `fecha_modificacion`, `fecha_borrado`) VALUES
(1, 'CAMISETA DE RIVER ADIDAS 2023 OFICIAL ORIGINAL', 25000.00, 10, 1, 'Esta nueva camiseta oficial de River Plate ADIDAS muestra elegancia en su diseño con una banda roja que le cruza simulando aquellos uniformes de los inicios del Siglo XX. Un diseño sobrio para un equipo que se supera cada día.', '1699397453545-camiseta-de-river-adidas-oficial-blanca.jpg', 'in-sale', 30, '2022-11-04', '2023-07-11', NULL),
(2, 'CAMISETA DE BOCA ADIDAS OFICIAL', 99.00, 3, 1, 'Esta nueva camiseta titular de Boca Juniors ADIDAS une la pasión y el barrio con diferentes tonos que logran un efecto visual y una prominente franja central que resaltan sus colores, el azul y oro.', 'camiseta-de-boca-adidas-oficial-azul.jpg', 'in-sale', 30, '2022-11-04', '2023-11-02', NULL),
(3, 'CAMISETA DE ARGENTINA ADIDAS FAN CAMPEONES BLANCA', 24000.00, 7, 1, '¡UNA CAMISETA CON LOS COLORES DE LA SELECCIÓN PARA QUE LOS HINCHAS FESTEJEN LA TERCERA ESTRELLA! Camiseta de fútbol de la Selección Argentina hecha para los fanáticos que quieren celebrar la tercera estrella conquistada en la última Copa del Mundo.', '1699399527370-camiseta-de-argentina-adidas-campeones-fan-blanca.jpg', 'visited', 25, '2022-11-04', '2023-07-11', NULL),
(4, 'ZAPATILLAS REbook', 5600.00, 12, 1, 'zapa blanca y negra', '1699399461639-1699394176897-zapatilla1.jpg', 'in-sale', 50, '2023-07-11', '2023-07-11', NULL),
(7, 'CAMISETA RIVER ALTERNATIVA 2023', 37000.00, 18, 1, 'river4', '1699416164507-camiseta_river2022.jpg', 'visited', 12, '2023-08-11', '2023-08-11', NULL);

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `email`, `contrasenia`, `categoria`, `fecha_nacimiento`, `sexo`, `imagen`, `fecha_creacion`, `fecha_modificacion`, `fecha_borrado`) VALUES
(1, 'Juan Sebastian', 'Perez', 'juanperez@gmail.com', '$2a$10$COYVR/qEQRE2ftUm7MY4ROBtcZfXbrJsr2nKcU6rewucN8zSSxVJO', 'Admin', '2000-08-06', 'M', '/images/perfiles/1699415259870-1699336008414-adida', '2022-11-04', '2023-08-11', NULL),
(2, 'Sofia Noelia', 'Lopez', 'sofialopez@gmail.com', '$2a$10$0PWYEJ0otEC3.eb7n.0U0ey8fvfPeDl9SHuFCDyMAaN0P9KCJKzPe', 'Customer', '2001-02-10', 'F', '/images/perfiles/1699415287765-1699394373794-zapat', '2022-11-04', '2023-08-11', NULL),
(3, 'Lucas martin', 'Torres', 'lucastorres@gmail.com', '$2a$10$ZyiukvhnKVCDIDKfMjefs.Ei4C.TBRL7nM352rI8wPaRTGd0vvxTO', 'Admin', '2003-06-15', 'O', '', '2022-11-04', '2023-08-11', NULL),
(4, 'Leonel Andres', 'Messias', 'lio@gmail.com', '$2a$10$ew/dZkEz3/EOQVDd9ch8dOdKpKmBjmgLqP5j8wyaCB1DxOhrk60cm', 'Customer', '1987-06-24', 'M', '/images/perfiles/1699415332022-1699395170805-zapat', '2023-07-11', '2023-08-11', NULL),
(5, 'Jorge', 'Zoto', 'jorge@gmail.com', '$2a$10$uTUNbilPvzJxBmmFTHXsG.C2PZ/ehaXSVqEoZj2fx/SFF1ckFbKcO', 'Admin', '1991-06-03', 'M', '/images/perfiles/1699415346949-camiseta_river2022.', '2023-08-11', '2023-08-11', NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
