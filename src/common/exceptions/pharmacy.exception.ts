import { HttpException, HttpStatus } from "@nestjs/common";
//* General Pharmacy Exception
export class PharmacyException extends HttpException {
    constructor(message: string) {
        super({ error: 'PharmacyError', message }, HttpStatus.BAD_REQUEST)
    }
}
//* Exception for product not found
export class ProductNotFoundException extends HttpException {
  constructor(id: number | string) {
    super(
      {
        error: 'ProductNotFound',
        message: `Producto con ID ${id} no fue encontrado`,
      },
      HttpStatus.NOT_FOUND,
    );
  }
}
//* Exception for supplier not found
export class SupplierNotFoundException extends HttpException {
  constructor(id: number | string) {
    super(
      {
        error: 'SupplierNotFound',
        message: `Proveedor con ID ${id} no fue encontrado`,
      },
      HttpStatus.NOT_FOUND,
    );
  }
}


//* Exception for unauthorized access
export class UnauthorizedAccessException extends HttpException {
  constructor(action: string) {
    super(
      {
        error: 'UnauthorizedAccess',
        message: `No tienes permisos para ${action}`,
      },
      HttpStatus.UNAUTHORIZED,
    );
  }
}
//* Exception for validation errors
export class ValidationException extends HttpException {
  constructor(errors: string[]) {
    super(
      {
        error: 'ValidationError',
        message: 'Datos inválidos',
        details: errors,
      },
      HttpStatus.BAD_REQUEST,
    );
  }
}
