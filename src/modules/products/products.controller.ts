import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, ParseIntPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDTO } from 'src/dto/create-product.dto';
import { UpdateProductDTO } from 'src/dto/update-product.dto';
import { ParseUpperTrimPipe } from 'src/common/pipes/parse-uppertrim.pipe';
import { JwtAuthGuard } from 'src/modules/auth/jwt.guard';
import { Roles } from 'src/modules/auth/roles.decorator';
import { RolesGuard } from 'src/modules/auth/roles.guard';
import { RolesEnum } from 'src/entities/user.entity';

@Controller('products')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Get()
    @Roles(RolesEnum.ADMIN)
    findAll() {
        return this.productsService.findAll();
    }

    @Get(':id')
    @Roles(RolesEnum.ADMIN)
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.productsService.findOne(id)
    }

    @Get('by-name/:name')
    @Roles(RolesEnum.USER)
    findByName(@Param('name', ParseUpperTrimPipe) name: string) {
        return this.productsService.findByName(name);
    }

    @Post()
    @Roles(RolesEnum.ADMIN)
    create(@Body() body: CreateProductDTO) {
        return this.productsService.create(body);
    }

    @Put(':id')
    @Roles(RolesEnum.ADMIN)
    update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateProductDTO) {
        return this.productsService.update(id, body)
    }

    @Delete(':id')
    @Roles(RolesEnum.ADMIN)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.productsService.disabled(id)
    }
}