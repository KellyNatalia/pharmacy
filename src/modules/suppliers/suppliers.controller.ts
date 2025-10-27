import { Controller,  Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { CreateSupplierDto } from 'src/dto/create-suppliers.dto';
import { UpdateSupplierDto } from 'src/dto/update-suppliers.dto';

@Controller('suppliers')
export class SuppliersController {
    constructor(private readonly suppliersService: SuppliersService) {}

  @Get()
  findAll() {
    return this.suppliersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.suppliersService.findOne(id);
  }

  @Get(':id/productos')
  getProducts(@Param('id') id: number) {
  return this.suppliersService.getProductsBySupplier(id);
  }

  @Post()
  create(@Body() supplierData: CreateSupplierDto) {
    return this.suppliersService.create(supplierData);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() supplierData: UpdateSupplierDto) {
    return this.suppliersService.update(id, supplierData);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.suppliersService.remove(id);
  }
}
