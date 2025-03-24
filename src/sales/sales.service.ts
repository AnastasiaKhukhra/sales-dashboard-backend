import { Injectable } from '@nestjs/common';
import { SalesRepository } from './sales.repository';
import { Sale } from './sale.entity';

@Injectable()
export class SalesService {
  constructor(private readonly salesRepository: SalesRepository) {}

  async findAll(
    page: number = 1,
    limit: number = 10,
    sortField: string = 'date',
    sortDirection: 'asc' | 'desc' = 'desc'
  ): Promise<{ data: Sale[]; total: number }> {
    return this.salesRepository.find(page, limit, sortField, sortDirection);
  }

  async create(sale: Partial<Sale>): Promise<Sale> {
    return this.salesRepository.create(sale);
  }

  async bulkCreate(sales: Partial<Sale>[]): Promise<Sale[]> {
    const createdSales = await Promise.all(
      sales.map(sale => this.salesRepository.create(sale))
    );
    return createdSales;
  }

  async update(id: number, sale: Partial<Sale>): Promise<Sale> {
    return this.salesRepository.update(id, sale);
  }

  async delete(id: number): Promise<void> {
    await this.salesRepository.delete(id);
  }
}
