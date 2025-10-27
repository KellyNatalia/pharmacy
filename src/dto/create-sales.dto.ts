import { IsInt, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
export class CreateSaleDTO {
    
@IsInt()
  productoId: number;

  @IsInt()
  cantidad: number;
}

export class CreateSalesDTO {
  @IsInt()
  usuarioId: number;
// ID del usuario que realiza la venta
  @IsArray()
  @ValidateNested({ each: true })// Validar cada elemento del array
  //* Transformar cada elemento del array a la clase CreateSaleDTO
  @Type(() => CreateSaleDTO)
  productos: CreateSaleDTO[];
}