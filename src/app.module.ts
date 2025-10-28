import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuppliersModule } from './modules/suppliers/suppliers.module';
<<<<<<< HEAD
import { UsersModule } from './modules/suppliers/users/users.module';
import { AuthModule } from './modules/auth/auth.module';

=======
import { ProductsModule } from './modules/products/products.module';  
<<<<<<< HEAD
>>>>>>> adbe9d2cab446a832de6a917b0653eeb10ee1c16
=======
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { SalesModule } from './modules/sales/sales.module';
>>>>>>> c9250f2bdc5ec015dc138991fda014a693449aba
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get<string>('DB_HOST'),
        port: config.get<number>('DB_PORT'),
        username: config.get<string>('DB_USER'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get<string>('DB_NAME'),
        autoLoadEntities: true,
        synchronize: false,
      })
    }),
<<<<<<< HEAD
<<<<<<< HEAD
    UsersModule,
    AuthModule,
    SuppliersModule],
=======
    SuppliersModule, ProductsModule],
>>>>>>> adbe9d2cab446a832de6a917b0653eeb10ee1c16
=======
    UsersModule,
    AuthModule,
    SuppliersModule,
    ProductsModule,
    SalesModule,
  ],
>>>>>>> c9250f2bdc5ec015dc138991fda014a693449aba
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
