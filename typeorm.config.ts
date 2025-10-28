import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import { User } from './src/entities/user.entity';
import { Supplier } from './src/entities/suppliers.entity';
import { Product } from './src/entities/products.entity';
import { Sale } from './src/entities/sales.entity';
import { SaleDetail } from './src/entities/sale-detail.entity';

dotenv.config();

export default new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [ 
    User,
    Supplier,
    Product,
    Sale,
    SaleDetail
  ],
  migrations: ['src/migrations/*.ts']
});
