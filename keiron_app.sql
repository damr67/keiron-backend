-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-05-2020 a las 18:13:01
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `keiron_app`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tickets`
--

CREATE TABLE `tickets` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `description` text NOT NULL,
  `ticket_pedido` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tickets`
--

INSERT INTO `tickets` (`id`, `id_user`, `description`, `ticket_pedido`) VALUES
(44, 25, 'Jamie (pagar) II', 1),
(45, 25, 'Jamie Ticket de reclamo', 0),
(46, 25, 'Floreros Cuenta', 0),
(47, 23, 'Cuentas Por Contratos', 1),
(48, 23, 'Cuentas Por Contratos II ', 1),
(49, 23, 'Cuentas Por Contratos III', 1),
(50, 23, 'Cuentas Por Contratos 2019', 1),
(51, 24, 'Archivar Carpetas II', 0),
(62, 27, 'jardineria', 0),
(63, 27, 'limpieza', 0),
(64, 27, 'reparaciones', 0),
(65, 28, 'gastos de papeleria', 1),
(66, 28, 'imprenta', 1),
(67, 28, 'sellos', 0),
(68, 29, 'gastos operativos', 0),
(69, 29, 'pago de nomina', 0),
(70, 23, 'pago festivos', 1),
(71, 24, 'Vacaciones', 1),
(72, 24, 'Retroactivo', 0),
(74, 24, 'Retroactivo   Vacaciones II', 1),
(75, 24, 'Bonificacion', 0),
(77, 24, 'Refrigerios', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_usuario`
--

CREATE TABLE `tipo_usuario` (
  `id_tipouser` int(11) NOT NULL,
  `nombre` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tipo_usuario`
--

INSERT INTO `tipo_usuario` (`id_tipouser`, `nombre`) VALUES
(1, 'usuario'),
(2, 'admin');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_user` int(11) NOT NULL,
  `id_tipouser` int(11) DEFAULT 1,
  `nombre` text DEFAULT NULL,
  `mail` text DEFAULT NULL,
  `pass` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_user`, `id_tipouser`, `nombre`, `mail`, `pass`) VALUES
(2, 2, 'admin', 'admin@gmail.com', 'admin'),
(23, 1, 'jane doe', 'user2@gmail.com', 'user'),
(24, 1, 'liz', 'user3@gmail.com', 'user'),
(25, 1, 'jamie', 'user4@gmail.com', 'user'),
(27, 1, 'user1', 'user1@gmail.com', 'user'),
(28, 1, 'user', 'user@gmail.com', 'user'),
(29, 2, 'admin2', 'admin2@gmail.com', 'admin'),
(30, 1, 'keiron app', 'keiron@keiron.com', 'keiron'),
(31, 1, 'keiron 2', 'keiron2@keiron.com', 'keiron');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tickets`
--
ALTER TABLE `tickets`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tipo_usuario`
--
ALTER TABLE `tipo_usuario`
  ADD PRIMARY KEY (`id_tipouser`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `mail` (`mail`) USING HASH,
  ADD KEY `id_tipouser` (`id_tipouser`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tickets`
--
ALTER TABLE `tickets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

--
-- AUTO_INCREMENT de la tabla `tipo_usuario`
--
ALTER TABLE `tipo_usuario`
  MODIFY `id_tipouser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
