import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Sale } from './sales.entity';
import { Product } from './products.entity';

@Entity()
export class SaleDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Sale, venta => venta.detalles)
  venta: Sale;

  @ManyToOne(() => Product)
  producto: Product;

  @Column()
  cantidad: number;

  @Column('decimal')
  precio_unitario: number;
}