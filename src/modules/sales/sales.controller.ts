import { Controller, Post, Body } from '@nestjs/common';
import { SalesService } from './sales.service';
import { CreateSalesDTO } from 'src/dto/create-sales.dto';



@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Post()
  create(@Body() dto: CreateSalesDTO) {
    return this.salesService.createSale(dto);
  }
}