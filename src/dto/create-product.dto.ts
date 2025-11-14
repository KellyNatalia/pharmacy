import { IsInt, IsNotEmpty, IsPositive} from "class-validator";

export class CreateProductDTO {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    @IsInt()
    price: number;
    
    @IsNotEmpty()
    @IsInt()
    stock: number;

    @IsNotEmpty()
    @IsInt()
    @IsPositive()
    supplierId: number;
}