# Sales Dashboard Backend

A robust NestJS backend service that powers the Sales Dashboard application, providing RESTful APIs for sales data management and analytics.

## 🚀 Live Demo

Backend API: [Sales Dashboard API](https://sales-dashboard-backend-v20k.onrender.com)
Frontend Demo: [Sales Dashboard Frontend](https://sales-dashboard-frontend-its6.onrender.com/)

## ✨ Features

- 📊 Comprehensive Sales API
  - CRUD operations for sales records
  - Bulk data import support
  - Pagination and sorting
  - Advanced filtering options

- 📈 Analytics Endpoints
  - Total sales calculations
  - Product performance metrics
  - Sales trends analysis
  - Data aggregation

- 🗄️ Database Features
  - PostgreSQL integration
  - TypeORM for data modeling
  - Efficient query optimization
  - Data validation

- 🔒 Security & Performance
  - CORS configuration
  - Error handling
  - Request validation
  - Performance optimization

## 🛠 Tech Stack

- **Framework:**
  - NestJS (Node.js framework)
  - TypeScript
  - Express.js

- **Database:**
  - PostgreSQL
  - TypeORM (ORM)
  - Migrations support

- **Development Tools:**
  - ESLint
  - Prettier
  - TypeScript compiler
  - Git for version control

## 🚦 Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd sales-dashboard-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```env
   # Database Configuration
   DATABASE_URL=postgresql://username:password@localhost:5432/sales_database

   # Server Configuration
   PORT=3000
   ```

4. Run database migrations:
   ```bash
   npm run migration:run
   ```

5. Start the development server:
   ```bash
   npm run start:dev
   ```

## 📁 Project Structure

```
src/
├── sales/             # Sales module
│   ├── sale.entity.ts    # Database entity
│   ├── sales.service.ts  # Business logic
│   ├── sales.controller.ts # API routes
│   └── sales.repository.ts # Data access
├── database/          # Database configuration
│   ├── migrations/    # Database migrations
│   └── data-source.ts # TypeORM config
├── app.module.ts      # Main application module
└── main.ts           # Application entry point
```

## 🔌 API Endpoints

### Sales Endpoints

```
GET    /sales              # Get sales (with pagination)
POST   /sales              # Create new sale
PUT    /sales/:id          # Update sale
DELETE /sales/:id          # Delete sale
POST   /sales/bulk         # Bulk create sales
```

### Query Parameters
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 10)
- `sortField`: Field to sort by (default: 'date')
- `sortDirection`: Sort direction ('asc' or 'desc')

## 📝 Available Scripts

- `npm run start:dev` - Start development server
- `npm run build` - Build for production
- `npm run start:prod` - Start production server
- `npm run migration:generate` - Generate new migration
- `npm run migration:run` - Run migrations
- `npm run migration:revert` - Revert last migration

## 🔑 Environment Variables

```env
# Database Configuration
DATABASE_URL=postgresql://username:password@localhost:5432/sales_database

# Server Configuration
PORT=3000
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [NestJS](https://nestjs.com/) for the excellent Node.js framework
- [TypeORM](https://typeorm.io/) for the database ORM
- [PostgreSQL](https://www.postgresql.org/) for the reliable database system
- [Render](https://render.com/) for hosting the application
