import { Controller, Get, Post, Delete, Param, Body, ParseIntPipe, UseGuards } from '@nestjs/common';
import { SalesService } from './sales.service';
import { CreateSalesDTO } from 'src/dto/create-sales.dto';
import { JwtAuthGuard } from 'src/modules/auth/jwt.guard';
import { Roles } from 'src/modules/auth/roles.decorator';
import { RolesGuard } from 'src/modules/auth/roles.guard';
import { RolesEnum } from 'src/entities/user.entity';

@Controller('sales')
@UseGuards(JwtAuthGuard, RolesGuard)
export class SalesController {
  constructor(private readonly salesService: SalesService) { }

  @Get()
  @Roles(RolesEnum.ADMIN)
  findAll() {
    return this.salesService.findAll();
  }

  @Get(':id')
  @Roles(RolesEnum.ADMIN)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.salesService.findOne(id);
  }

  @Get(':id/usuario')
  @Roles(RolesEnum.ADMIN)
  getSalesByUser(@Param('id', ParseIntPipe) id: number) {
    return this.salesService.getSalesByUser(id);
  }

  @Post()
  @Roles(RolesEnum.ADMIN)
  create(@Body() dto: CreateSalesDTO) {
    return this.salesService.createSale(dto);
  }

  @Delete(':id')
  @Roles(RolesEnum.ADMIN)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.salesService.remove(id);
  }
}