import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, ParseIntPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDTO } from 'src/dto/create-product.dto';
import { UpdateProductDTO } from 'src/dto/update-product.dto';
import { ParseUpperTrimPipe } from 'src/common/pipes/parse-uppertrim.pipe';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Get()
    findAll() {
        return this.productsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.productsService.findOne(id)
    }

    @Get('by-name/:name') //La ruta es http://localhost:3000/products/by-name/perro
    findByName(@Param('name', ParseUpperTrimPipe) name: string) {
        return this.productsService.findByName(name);
    }

    @Post()
    create(@Body() body: CreateProductDTO) {
        return this.productsService.create(body);
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateProductDTO) {
        return this.productsService.update(id, body)
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.productsService.disabled(id)
    }
}