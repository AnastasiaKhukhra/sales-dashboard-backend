# Sales Dashboard Backend

A robust NestJS backend service for the Sales Dashboard application. This service provides RESTful APIs for managing sales data, including CRUD operations and data analysis endpoints.

## Features

- 🔄 RESTful API Endpoints
  - Sales CRUD operations
  - Bulk data import via CSV
  - Data export functionality
  - Analytics-specific endpoints
- 📊 Data Analysis
  - Sales statistics and trends
  - Product performance metrics
  - Revenue analytics
  - Latest sales by product
- 🔒 Data Validation
  - Input validation using class-validator
  - Type safety with TypeScript
  - CSV file validation
- 🗄️ Database Integration
  - PostgreSQL database
  - TypeORM for database operations
  - Efficient querying and pagination
- 🐳 Docker Support
  - Containerized application
  - Easy deployment setup
  - Development and production configurations

## Tech Stack

- NestJS
- TypeScript
- PostgreSQL
- TypeORM
- Docker
- Jest (for testing)
- class-validator
- class-transformer

## Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)
- PostgreSQL (v13 or higher)
- Docker (optional, for containerized deployment)

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd sales-dashboard-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following content:
   ```
   DATABASE_URL=postgresql://username:password@localhost:5432/sales_dashboard
   PORT=3000
   CORS_ORIGIN=http://localhost:5173
   ```

4. Start the development server:
   ```bash
   npm run start:dev
   ```

## Docker Setup

1. Build the Docker image:
   ```bash
   docker-compose build
   ```

2. Start the containers:
   ```bash
   docker-compose up -d
   ```

## Project Structure

```
src/
├── sales/             # Sales module
│   ├── dto/          # Data Transfer Objects
│   │   ├── create-sale.dto.ts
│   │   ├── update-sale.dto.ts
│   │   └── bulk-create-sales.dto.ts
│   ├── entities/     # Database entities
│   │   └── sale.entity.ts
│   ├── sales.controller.ts
│   ├── sales.service.ts
│   ├── sales.repository.ts
│   └── sales.module.ts
├── common/           # Shared resources
│   ├── decorators/  # Custom decorators
│   ├── filters/     # Exception filters
│   └── pipes/       # Custom pipes
├── config/          # Configuration files
├── app.module.ts    # Root module
└── main.ts         # Application entry point
```

## API Endpoints

### Sales

- `GET /sales` - Get all sales (paginated)
  - Query parameters:
    - `page` (default: 1)
    - `limit` (default: 10)
    - `sortField` (default: 'date')
    - `sortDirection` (default: 'desc')
- `GET /sales/:id` - Get a specific sale
- `POST /sales` - Create a new sale
- `PUT /sales/:id` - Update a sale
- `DELETE /sales/:id` - Delete a sale
- `POST /sales/bulk` - Bulk create sales from CSV
- `GET /sales/export` - Export sales data to CSV

### Analytics

- `GET /analytics/summary` - Get sales summary statistics
- `GET /analytics/product-performance` - Get product performance metrics
- `GET /analytics/latest-sales` - Get latest sales by product

## Testing

Run the test suite:
```bash
npm run test
```

Run tests with coverage:
```bash
npm run test:cov
```

## Available Scripts

- `npm run start` - Start the application
- `npm run start:dev` - Start in development mode
- `npm run build` - Build the application
- `npm run test` - Run tests
- `npm run test:cov` - Run tests with coverage
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
