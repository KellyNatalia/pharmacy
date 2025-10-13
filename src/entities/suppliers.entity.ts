import { Column, Entity, PrimaryColumnCannotBeNullableError, PrimaryGeneratedColumn } from "typeorm";

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
}