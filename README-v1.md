# 🛒 Shopers E-commerce Platform

A full-stack e-commerce platform built with Spring Boot backend and React frontend, designed for modern online shopping experiences.

![Version](https://img.shields.io/badge/version-1.0-blue.svg)
![Java](https://img.shields.io/badge/Java-17-orange.svg)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.3.3-brightgreen.svg)
![React](https://img.shields.io/badge/React-19.1.1-blue.svg)
![Build](https://img.shields.io/badge/build-passing-brightgreen.svg)

## 🌟 Features

### 🔐 Authentication & Security
- JWT-based user authentication
- Secure password hashing
- Protected routes and API endpoints
- CORS configuration for cross-origin requests

### 🛍️ Shopping Experience
- Product catalog browsing
- Shopping cart management
- User registration and login
- Responsive design for all devices

### 🏗️ Architecture
- RESTful API design
- Clean separation of concerns
- Database abstraction with JPA
- Production-ready configuration

## 🚀 Quick Start

### Prerequisites
- Java 17+
- Node.js 18+
- Maven 3.6+
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/satyajnanaprakashachanta/shopers-backend.git
   cd shopers-backend
   ```

2. **Start the Backend**
   ```bash
   mvn spring-boot:run
   ```
   Backend will run on http://localhost:8080

3. **Start the Frontend**
   ```bash
   cd shop-frontend
   npm install
   npm run dev
   ```
   Frontend will run on http://localhost:3001

## 📋 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Products
- `GET /api/products` - Get all products
- `GET /api/products/{id}` - Get product by ID
- `POST /api/products` - Create product (admin)
- `PUT /api/products/{id}` - Update product (admin)
- `DELETE /api/products/{id}` - Delete product (admin)

### Health Check
- `GET /api/health` - Application health status

## 🛠️ Tech Stack

### Backend
- **Java 17** - Programming language
- **Spring Boot 3.3.3** - Application framework
- **Spring Security** - Authentication & authorization
- **Spring Data JPA** - Database abstraction
- **H2 Database** - Development database
- **PostgreSQL** - Production database
- **Maven** - Dependency management

### Frontend
- **React 19.1.1** - UI library
- **Vite 7.1.3** - Build tool
- **Tailwind CSS** - Styling framework
- **Axios** - HTTP client
- **React Router** - Navigation

### Development Tools
- **Swagger/OpenAPI** - API documentation
- **Lombok** - Code generation
- **Git** - Version control

## 🌐 Deployment

### Production Deployment

This application is configured for deployment on:
- **Backend**: Render (with PostgreSQL)
- **Frontend**: Netlify

#### Deploy to Render
1. Push code to GitHub
2. Create new Web Service on Render
3. Connect GitHub repository
4. Use existing `render.yaml` configuration
5. Add PostgreSQL database

#### Deploy Frontend to Netlify
1. Build the frontend: `npm run build`
2. Deploy `dist` folder to Netlify
3. Set environment variable: `VITE_API_URL=https://your-backend.onrender.com`

## 📁 Project Structure

```
shopers-backend/
├── src/main/java/com/shopers/
│   ├── auth/              # Authentication module
│   ├── product/           # Product management
│   ├── config/            # Configuration classes
│   └── common/            # Shared utilities
├── shop-frontend/
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React context
│   │   └── config/        # Configuration
│   └── public/            # Static assets
├── render.yaml           # Render deployment config
├── Procfile             # Production startup script
└── README.md           # Project documentation
```

## 🔧 Configuration

### Environment Variables

#### Backend
- `SPRING_PROFILES_ACTIVE` - Active Spring profile
- `JWT_SECRET` - JWT signing secret
- `DATABASE_URL` - PostgreSQL connection string (production)

#### Frontend
- `VITE_API_URL` - Backend API base URL

## 🧪 Testing

```bash
# Backend tests
mvn test

# Frontend tests
cd shop-frontend
npm run test

# Build verification
mvn clean package
npm run build
```

## 📈 Version History

### v1.0 (Current)
- ✅ Complete user authentication system
- ✅ Product catalog management
- ✅ Shopping cart functionality
- ✅ Responsive React frontend
- ✅ Production deployment configuration
- ✅ API documentation

### Upcoming Features
- 🔄 Order management system
- 💳 Payment integration
- 📧 Email notifications
- ⭐ Product reviews and ratings
- 📊 Admin dashboard

## 👥 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Spring Boot team for the excellent framework
- React team for the powerful UI library
- Tailwind CSS for the utility-first CSS framework
- All open-source contributors

---

**Status**: Production Ready ✅ | **Build**: Passing ✅ | **Version**: 1.0 🚀
