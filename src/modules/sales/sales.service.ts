import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSalesDTO } from 'src/dto/create-sales.dto';
import { Sale } from 'src/entities/sales.entity';
import { SaleDetail } from 'src/entities/sale-detail.entity';
import { User } from 'src/entities/user.entity';    
import { Product } from 'src/entities/products.entity';
import { IProducts } from 'src/interfaces/IProducts';
import { Repository } from 'typeorm';

@Injectable()
export class SalesService {
  constructor(
    @InjectRepository(Sale) private salesRepo: Repository<Sale>,
    @InjectRepository(SaleDetail) private detailsRepo: Repository<SaleDetail>,
    @InjectRepository(Product) private productsRepo: Repository<Product>,
    @InjectRepository(User) private usersRepo: Repository<User>,
  ) {}
//* Crear una venta con detalles y actualizar el stock de productos
  async createSale(dto: CreateSalesDTO) {
    const usuario = await this.usersRepo.findOne({ where: { id: dto.usuarioId } });
    if (!usuario) throw new NotFoundException('Usuario no encontrado');
// Inicializar total de la venta y detalles
    let total = 0;
    const detalles: SaleDetail[] = [];
// Iterar sobre los productos en la venta
    for (const item of dto.productos) {
      const producto = await this.productsRepo.findOne({ where: { id: item.productoId } });
      if (!producto || producto.stock < item.cantidad) {
        throw new NotFoundException(`Producto ${item.productoId} no disponible`);
      }
// Calcular el total de la venta
      total += producto.price * item.cantidad;
// Crear el detalle de la venta
      detalles.push(this.detailsRepo.create({
        producto,
        cantidad: item.cantidad,
        precio_unitario: producto.price,
      }));
// Actualizar el stock del producto
      producto.stock -= item.cantidad;
      await this.productsRepo.save(producto);
    }
// Crear y guardar la venta con sus detalles
    const venta = this.salesRepo.create({
      usuario,
      fecha_venta: new Date(),
      total,
      detalles,
    });
// Guardar la venta en la base de datos
    return this.salesRepo.save(venta);
  }
}