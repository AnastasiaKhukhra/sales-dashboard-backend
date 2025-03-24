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
    ConfigModule.forRoot(), // Завантаження змінних середовища з .env
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432', 10), // Використовуємо `||` замість `??`
      username: process.env.DB_USER || 'user',
      password: process.env.DB_PASS || 'password',
      database: process.env.DB_NAME || 'salesdb',
      entities: [Sale], // Додаємо модель Sale
      synchronize: true, // Автоматичне створення таблиць (на етапі розробки)
    }),
    SalesModule, // Підключаємо модуль продажів
  ],
  controllers: [AppController, SalesController],
  providers: [AppService],
})
export class AppModule {}
