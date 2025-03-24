import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { SalesService } from './sales.service';
import { Sale } from './sale.entity';

@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Get()
  async getSales(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
    @Query('sortField') sortField: string = 'date',
    @Query('sortDirection') sortDirection: 'asc' | 'desc' = 'desc',
  ): Promise<{ data: Sale[]; total: number }> {
    // If limit is greater than 100, treat it as an analytics request and return all records
    if (limit > 100) {
      return this.salesService.findAll(1, 100000, sortField, sortDirection);
    }
    return this.salesService.findAll(page, limit, sortField, sortDirection);
  }

  @Post()
  async createSale(@Body() sale: Partial<Sale>): Promise<Sale> {
    return this.salesService.create(sale);
  }

  @Post('bulk')
  async bulkCreateSales(@Body() sales: Partial<Sale>[]): Promise<Sale[]> {
    return this.salesService.bulkCreate(sales);
  }

  @Put(':id')
  async updateSale(@Param('id') id: string, @Body() sale: Partial<Sale>): Promise<Sale> {
    return this.salesService.update(parseInt(id, 10), sale);
  }

  @Delete(':id')
  async deleteSale(@Param('id') id: string): Promise<void> {
    await this.salesService.delete(parseInt(id, 10));
  }
}
