import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SupplierNotFoundException } from 'src/common/exceptions/pharmacy.exception';
import { CreateSupplierDto } from 'src/dto/create-suppliers.dto';
import { UpdateSupplierDto } from 'src/dto/update-suppliers.dto';
import { Supplier } from 'src/entities/suppliers.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SuppliersService {
  constructor(
    @InjectRepository(Supplier)
    private suppliersRepository: Repository<Supplier>,
  ) { }

  findAll() {
    return this.suppliersRepository.find();
  }

 async findOne(id: number) {
  const suppliersFind = await this.suppliersRepository.findOne({
    where: { id },
    relations: ['productos'],
  });

  if (!suppliersFind) throw new SupplierNotFoundException(id);
  return suppliersFind;
}

/*async getProductsBySupplier(id: number) {
  const supplier = await this.suppliersRepository.findOne({
    where: { id },
    relations: ['productos'],
  });

  if (!supplier) throw new NotFoundException('Proveedor no encontrado');
  return supplier.productos;
}*/

  create(newSupplier: CreateSupplierDto) {
    const supplier = this.suppliersRepository.create(newSupplier);
    return this.suppliersRepository.save(supplier);
  }

  async update(id: number, supplierData: UpdateSupplierDto) {
    await this.suppliersRepository.update(id, supplierData);
    return { message: `the supplier with id ${id} was successfully updated` };
  }

  async remove(id: number) {
    const result = await this.suppliersRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Supplier not found');
    }
    return { message: `the supplier with id ${id} was successfully deleted` }
  }
}
