# Pharmacy Management System

Sistema de gestión para farmacias desarrollado con NestJS, TypeORM y MySQL.

## Descripción

Este proyecto es una API RESTful que permite gestionar los aspectos fundamentales de una farmacia, incluyendo:
- Gestión de usuarios y autenticación
- Inventario de productos
- Gestión de proveedores
- Registro de ventas
- Control de stock

## Tecnologías Utilizadas

- **Backend**: NestJS (Node.js framework)
- **Base de datos**: MySQL
- **ORM**: TypeORM
- **Autenticación**: JWT (JSON Web Tokens)
- **Documentación**: Swagger/OpenAPI 3.0

## Requisitos Previos

- Node.js (v14 o superior)
- MySQL (v5.7 o superior)
- npm o yarn

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/KellyNatalia/pharmacy.git
cd pharmacy
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
   - Crear archivo `.env` en la raíz del proyecto
   - Copiar el contenido de `.env.example` y ajustar los valores

4. Configurar la base de datos:
```bash
# Ejecutar migraciones
npm run typeorm migration:run
```

## Estructura del Proyecto

```
pharmacy/
├── src/
│   ├── common/         # Pipes y utilidades comunes
│   ├── dto/           # Data Transfer Objects
│   ├── entities/      # Entidades de la base de datos
│   ├── interfaces/    # Interfaces TypeScript
│   ├── migrations/    # Migraciones de base de datos
│   └── modules/       # Módulos de la aplicación
│       ├── auth/      # Autenticación y autorización
│       ├── products/  # Gestión de productos
│       ├── sales/     # Gestión de ventas
│       ├── suppliers/ # Gestión de proveedores
│       └── users/     # Gestión de usuarios
├── docs/             # Documentación (Swagger)
└── test/            # Archivos de pruebas
```

## Funcionalidades Principales

### 1. Autenticación y Usuarios
- Registro de usuarios
- Login con JWT
- Roles: admin y user
- Gestión de perfiles

### 2. Gestión de Productos
- CRUD completo de productos
- Búsqueda por nombre
- Control de stock
- Asociación con proveedores

### 3. Gestión de Proveedores
- CRUD completo de proveedores
- Visualización de productos por proveedor
- Información de contacto

### 4. Sistema de Ventas
- Registro de ventas
- Detalle de productos vendidos
- Cálculo automático de totales
- Actualización de stock

## API Endpoints

La documentación completa de la API está disponible en Swagger UI:
```
http://localhost:3000/api
```

### Principales endpoints:

#### Autenticación
- POST `/auth/register` - Registro de usuarios
- POST `/auth/login` - Login de usuarios
- GET `/auth/profile` - Perfil del usuario actual

#### Usuarios
- GET `/users` - Listar usuarios
- GET `/users/:id` - Obtener usuario por ID
- PUT `/users/:id` - Actualizar usuario
- DELETE `/users/:id` - Eliminar usuario

#### Productos
- GET `/products` - Listar productos
- POST `/products` - Crear producto
- GET `/products/:id` - Obtener producto por ID
- PUT `/products/:id` - Actualizar producto
- GET `/products/by-name/:name` - Buscar producto por nombre

#### Proveedores
- GET `/suppliers` - Listar proveedores
- POST `/suppliers` - Crear proveedor
- GET `/suppliers/:id` - Obtener proveedor por ID
- PUT `/suppliers/:id` - Actualizar proveedor
- DELETE `/suppliers/:id` - Eliminar proveedor
- GET `/suppliers/:id/productos` - Productos por proveedor

#### Ventas
- POST `/sales` - Registrar nueva venta

## Scripts Disponibles

```bash
# Desarrollo
npm run start:dev

# Producción
npm run start:prod

# Pruebas
npm run test

# Migraciones
npm run typeorm migration:generate src/migrations/NombreMigracion
npm run typeorm migration:run
```

## Seguridad

- Autenticación mediante JWT
- Roles y permisos
- Encriptación de contraseñas
- Validación de datos con DTO
- Protección de rutas sensibles

## Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## Autor

- Kelly Natalia - [GitHub](https://github.com/KellyNatalia)

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
