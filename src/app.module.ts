import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SalesController } from './sales/sales.controller';
import { SalesModule } from './sales/sales.module';
import { Sale } from './sales/sale.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [Sale],
      synchronize: false,
      ssl: {
        rejectUnauthorized: false
      },
    }),
    SalesModule,
  ],
  controllers: [AppController, SalesController],
  providers: [AppService],
})
export class AppModule {}
