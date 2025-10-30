import { Controller,  Get, Post, Body, Param, Delete, Put, UseGuards, ParseIntPipe } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { CreateSupplierDto } from 'src/dto/create-suppliers.dto';
import { UpdateSupplierDto } from 'src/dto/update-suppliers.dto';
import { JwtAuthGuard } from 'src/modules/auth/jwt.guard';
import { Roles } from 'src/modules/auth/roles.decorator';
import { RolesGuard } from 'src/modules/auth/roles.guard';
import { RolesEnum } from 'src/entities/user.entity';

@Controller('suppliers')
@UseGuards(JwtAuthGuard, RolesGuard)
export class SuppliersController {
    constructor(private readonly suppliersService: SuppliersService) {}
  @Get()
  @Roles(RolesEnum.ADMIN)
  findAll() {
    return this.suppliersService.findAll();
  }

  @Get(':id')
  @Roles(RolesEnum.ADMIN)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.suppliersService.findOne(id);
  }

  @Get(':id/productos')
  @Roles(RolesEnum.ADMIN)
  getProducts(@Param('id') id: number) {
  return this.suppliersService.getProductsBySupplier(id);
  }

  @Post()
  @Roles(RolesEnum.ADMIN)
  create(@Body() supplierData: CreateSupplierDto) {
    return this.suppliersService.create(supplierData);
  }

  @Put(':id')
  @Roles(RolesEnum.ADMIN)
  update(@Param('id', ParseIntPipe) id: number, @Body() supplierData: UpdateSupplierDto) {
    return this.suppliersService.update(id, supplierData);
  }

  @Delete(':id')
  @Roles(RolesEnum.ADMIN)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.suppliersService.remove(id);
  }
}
