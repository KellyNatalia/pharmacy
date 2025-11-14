import { IsEmail, IsNotEmpty, Length } from "class-validator";
import { RolesEnum } from 'src/entities/user.entity';

export class CreateUserDTO {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    role?: RolesEnum;

    @IsNotEmpty()
    @Length(8, 10, {message: 'La contraseña debe tener entre 8 y 10 caracteres' })
    password: string;
}