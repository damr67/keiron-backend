
### REQUISITOS
## 1. MySQL DATABASE
Debe Instalar previamente MySQL Database, puede user XAMPP si desea. Y posteriormente realizar la importacion de la base de datos con el script que se encuentra en este proyecto. 

`keiron_app.sql`

Es importante hace enfasis que la base de datos debera llevar el nombre `keiron_app` de forma tal que el backend pueda hacer conexion con la misma. Ya que fue configurado para una base de datos con dicho nombre.


Una vez importada la base datos de forma satisfactoria, se procece a la instalacion del proyecto Backend.


## 2.[Keiron Backend](https://github.com/damr67/keiron-backend)
Debe instalar la version del backend localmente. `keiron-backend`. Para ellos debe clonar el repositorio `keiron-backend`, cuyo link se encuentra en el titulo de este paso.



## Antes de Iniciar
Se requiere de Node Js
### `npm install`

## Iniciar Backend Localmente
### `keiron-backend-$ npm run start`


## 3.[Keiron Frontend](https://github.com/damr67/keiron-frontend)
Debe instalar la version del frontend localmente. `keiron-frontend`. Para ellos debe clonar el repositorio `keiron-frontend`, cuyo link se encuentra en el titulo de este paso. 

## Antes de Iniciar
Se requiere de Node Js
### `npm install`


## Antes de Iniciar
Se requiere de Node Js
### `npm install`

## Para Iniciar Localmente
### `npm run start`

### IMPORTANTE 
Los 3 servidores requieren estar activos en el mismo momento para que los datos de la aplicacion pueden fluir de forma Correcta
- Server Base de Datos Mysql
- Server Keiron Backend
- Server Keiron Frontend


### Description de Aplicativo
## Test:
- Debes crear una app en React + Node + MySql en la cual se pueda registrar y logear usuario (sin recuperación de contraseña) y en la que existan dos perfiles de usuario: Administrador y Usuario.
- El perfil administrador solo tiene una tabla para gestionar tickets (Crud) en donde se los puede asignar a usuarios.
- El perfil de usuario solo posee una lista de tickets asignados a el y un boton para pedirlos (setear el ticket_pedido).
- El login de usuarios debe discriminar y redireccionar según su perfil.
- Debes subir el proyecto a git y enviarnos las instrucciones para levantar el proyecto (incluye el script de SQL en el proyecto).
- El proyecto cuenta con 3 Tablas:
1. usuarios: id, id_tipouser, nombre, mail, pass
2. ticket: id , id_user , ticket_pedido
3. tipo_usuario: id, nombre



## Login
Acceder a http://localhost:3000/login

Cuentas Creadas

|email|password|
|:-------:|:--------:|
| admin@gmail.com| admin|
|admin2@gmail.com| admin|
| keiron@keiron.com| keiron|
| user@gmail.com | user|
|user1@gmail.com| user|
|user2@gmail.com| user|
|user3@gmail.com| user|
|user4@gmail.com| user|

# Register
Acceder a http://localhost:3000/register



