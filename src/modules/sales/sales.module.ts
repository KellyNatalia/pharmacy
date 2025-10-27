import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';
import { Sale } from './entities/sales.entity';
import { SaleDetail } from './entities/sale-detail.entity';
import { Product } from 'src/entities/products.entity';
import { User } from 'src/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sale, SaleDetail, Product, User])],
  controllers: [SalesController],
  providers: [SalesService],
})
export class SalesModule {}