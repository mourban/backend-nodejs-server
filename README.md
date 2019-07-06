# Node.js CRUD Usuarios + Login Postgres

Este proyecto backend Node.js CRUD Usuarios + To Do List + Login te permite hacer lo siguiente:
  - Puedes registrar usuarios.
  - Puedes editar usuarios.
  - Puedes eliminar usuarios.
  - Puedes listar usuarios.
  - Puedes hacer login con un usuario registrado.
  - Puedes registrar tareas.
  - Puedes editar tareas.
  - Puedes eliminar tareas.

Este proyecto es para aprendizaje.

##  Requisitos

  - Node.js
  - Postgres

##  Como instalar

```bash
git clone git@github.com:mourban/backend-nodejs-server.git
cd backend-nodejs-server
npm install
```

## Servidor de Base de Datos

Instalar base de datos Postgres e iniciar servidor local. Luego correr el siguiente script:

```bash
-- Table: public."user"

-- DROP TABLE public."user";

CREATE TABLE public."user"
(
    id_user uuid NOT NULL,
    first_name character varying(50) COLLATE pg_catalog."default",
    last_name character varying(50) COLLATE pg_catalog."default",
    email character varying(100) COLLATE pg_catalog."default",
    password character varying(250) COLLATE pg_catalog."default",
    created character varying(100) COLLATE pg_catalog."default",
    CONSTRAINT users_pkey PRIMARY KEY (id_user)
)
```

## Como iniciar la aplicación

```bash
cd backend-nodejs-server
npm start
```
Al iniciar la aplicación lo hará en la url http://localhost:5000

## Como iniciar las pruebas automáticas

```bash
cd backend-nodejs-server
npm test
```

# Rest API

La API Rest para la aplicación se describe a continuación.

## Lista de Usuarios

### Request

`GET /list`

## Buscar Usuario

### Request

`GET /:id`

## Agregar Usuario

### Request

`POST /add`

## Editar Usuario

### Request

`PUT /update/:id`

## Eliminar Usuario

### Request

`DELETE /delete/:id`

## Login

### Request

`POST /login`

## Licencia

The MIT License (MIT)

Copyright (c) 2019 SitePoint

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
