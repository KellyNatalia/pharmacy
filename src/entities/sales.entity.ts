import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from 'src/entities/user.entity';
import { SaleDetail } from './sale-detail.entity';

@Entity('Sale')
export class Sale {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fecha_venta: Date;

  @Column('decimal')
  total: number;

  @ManyToOne(() => User, user => user.ventas)
  usuario: User;

  @OneToMany(() => SaleDetail, detalle => detalle.venta, { cascade: true })
  detalles: SaleDetail[];
}