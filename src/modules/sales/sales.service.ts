import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSalesDTO } from 'src/dto/create-sales.dto';
import { Sale } from 'src/entities/sales.entity';
import { SaleDetail } from 'src/entities/sale-detail.entity';
import { User } from 'src/entities/user.entity';
import { Product } from 'src/entities/products.entity';
import { Repository } from 'typeorm';
import { instanceToPlain } from 'class-transformer';


@Injectable()
export class SalesService {
  constructor(
    @InjectRepository(Sale) private salesRepo: Repository<Sale>,
    @InjectRepository(SaleDetail) private detailsRepo: Repository<SaleDetail>,
    @InjectRepository(Product) private productsRepo: Repository<Product>,
    @InjectRepository(User) private usersRepo: Repository<User>,
  ) { }

async findAll() {
  const ventas = await this.salesRepo.find({
    relations: ['usuario', 'detalles', 'detalles.producto'],
  });

  return ventas.map((venta) => instanceToPlain(venta)); 
}

//* Obtener una venta por ID
  async findOne(id: number) {
    const venta = await this.salesRepo.findOne({
      where: { id },
      relations: ['usuario', 'detalles', 'detalles.producto'],
    });
 if (!venta) throw new NotFoundException('Venta no encontrada');
    return instanceToPlain(venta);
  }

//* Obtener ventas por usuario
  async getSalesByUser(usuarioId: number) {
    const usuario = await this.usersRepo.findOne({ where: { id: usuarioId } });
    if (!usuario) throw new NotFoundException('Usuario no encontrado');
    const ventas = await this.salesRepo.find({
      where: { usuario: { id: usuarioId } },
      relations: ['detalles', 'detalles.producto'],
    });

    return ventas.map((venta) => instanceToPlain(venta));

  }

  //* Crear una venta con detalles y actualizar el stock de productos
  async createSale(dto: CreateSalesDTO) {
  const usuario = await this.usersRepo.findOne({ where: { id: dto.usuarioId } });
  if (!usuario) throw new NotFoundException('Usuario no encontrado');

  let total = 0;
  const detalles: SaleDetail[] = [];

  for (const item of dto.productos) {
    // Validar cantidad mínima y máxima
    if (item.cantidad <= 0) {
      throw new BadRequestException(`La cantidad del producto ${item.productoId} debe ser mayor a cero`);
    }
    if (item.cantidad > 10) {
      throw new BadRequestException(`No se pueden vender más de 10 unidades del producto ${item.productoId}`);
    }

    const producto = await this.productsRepo.findOne({ where: { id: item.productoId } });
    if (!producto || producto.stock < item.cantidad) {
      throw new NotFoundException(`Producto ${item.productoId} no disponible`);
    }

    total += producto.price * item.cantidad;

    detalles.push(this.detailsRepo.create({
      producto,
      cantidad: item.cantidad,
      precio_unitario: producto.price,
    }));

    producto.stock -= item.cantidad;
    await this.productsRepo.save(producto);
  }

  const venta = this.salesRepo.create({
    usuario,
    fecha_venta: new Date(),
    total,
    detalles,
  });

  const ventaGuardada = await this.salesRepo.save(venta);

  return instanceToPlain(ventaGuardada);
}
  async remove(id: number) {
    const venta = await this.salesRepo.findOne({ where: { id } });
    if (!venta) throw new NotFoundException('Venta no encontrada');
    return this.salesRepo.remove(venta);
  }
}