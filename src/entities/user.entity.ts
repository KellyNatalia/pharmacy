import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Sale } from "./sales.entity";

export type Roles = 'admin' | 'user'

export enum RolesEnum {
   ADMIN = 'admin',
   USER = 'user'
}

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: false, unique: true })
    email: string;

    @Column({ nullable: false })
    password: string;

    @Column({ nullable: false, default: true })
    status: boolean;

    @Column({ default: RolesEnum.USER })
    role: Roles

    @OneToMany(() => Sale, sale => sale.usuario)
    ventas: Sale[];
}