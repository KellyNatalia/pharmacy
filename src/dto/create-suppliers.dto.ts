import { IsEmail, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateSupplierDto {

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsInt()
  phone: number;

  @IsNotEmpty()
  @IsString()
  address: string;
}
