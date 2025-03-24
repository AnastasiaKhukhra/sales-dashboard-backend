import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sale } from './sale.entity';

@Injectable()
export class SalesRepository {
  constructor(
    @InjectRepository(Sale)
    private readonly repository: Repository<Sale>,
  ) {}

  async find(
    page: number = 1,
    limit: number = 10,
    sortField: string = 'date',
    sortDirection: 'asc' | 'desc' = 'desc'
  ): Promise<{ data: Sale[]; total: number }> {
    // For analytics view (limit > 100), return all records without pagination
    if (limit > 100) {
      const [data, total] = await this.repository.findAndCount({
        order: { [sortField]: sortDirection }
      });
      return { data, total };
    }

    // For regular paginated view
    const [data, total] = await this.repository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      order: { [sortField]: sortDirection }
    });
    return { data, total };
  }

  async create(sale: Partial<Sale>): Promise<Sale> {
    const newSale = this.repository.create(sale);
    return this.repository.save(newSale);
  }

  async update(id: number, sale: Partial<Sale>): Promise<Sale> {
    await this.repository.update(id, sale);
    const updatedSale = await this.repository.findOne({ where: { id } });
    if (!updatedSale) {
      throw new NotFoundException(`Sale with ID ${id} not found`);
    }
    return updatedSale;
  }

  async delete(id: number): Promise<void> {
    const result = await this.repository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Sale with ID ${id} not found`);
    }
  }
} 