import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Supplier } from "./suppliers.entity";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false })
    description: string;

    @Column({ nullable: false })
    price: number;

    @Column({ nullable: false })
    stock: number;

    @Column({ nullable: false, default: true })
    status: boolean;

    @ManyToOne(() => Supplier, supplier => supplier.productos)
    proveedor: Supplier;
}