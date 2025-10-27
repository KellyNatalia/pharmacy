import * as dotenv from 'dotenv';
import { Supplier } from './src/entities/suppliers.entity';
import { DataSource } from 'typeorm';

dotenv.config()

export default new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Supplier],
    migrations: [ './src/migrations/*.ts' ],
});
