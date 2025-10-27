import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./products.entity";

@Entity('suppliers')
export class Supplier {
    @PrimaryGeneratedColumn()
    id: number;

    @Column( { nullable: false } )
    name: string;
    
    @Column( { nullable: false } )
    email: string;

    @Column(( { nullable: false } ))
    phone: number;

    @Column(( { nullable: false } ))
    address: string;

    @OneToMany(() => Product, product => product.proveedor)
    productos: Product[];

    @ManyToOne(() => Supplier, supplier => supplier.productos)
    proveedor: Supplier;


}