import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { join } from 'path';
import { Sale } from '../sales/sale.entity';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [Sale],
  migrations: [join(__dirname, 'migrations', '*.{ts,js}')],
  synchronize: false,
  ssl: {
    rejectUnauthorized: false
  },
});
