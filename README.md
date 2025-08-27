# �️ Shopers - Full-Stack E-Commerce Platform

> A modern, fully-functional e-commerce application built with **Spring Boot** and **React**

[![Java](https://img.shields.io/badge/Java-17+-orange.svg)](https://www.oracle.com/java/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.3.3-brightgreen.svg)](https://spring.io/projects/spring-boot)
[![React](https://img.shields.io/badge/React-19.1.1-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.2-purple.svg)](https://vitejs.dev/)

## 🚀 Live Demo

**Frontend**: `http://localhost:3003` (Development)  
**Backend API**: `http://localhost:8080` (Development)  
**API Documentation**: `http://localhost:8080/swagger-ui.html`  
**Database Console**: `http://localhost:8080/h2-console`

## ✨ Features

### 🎯 Core Functionality
- **User Authentication**: Secure JWT-based registration and login
- **Product Catalog**: Browse 20+ demo products across multiple categories
- **Shopping Cart**: Real-time cart management with React Context
- **Order Management**: Complete checkout flow and order history
- **Responsive Design**: Mobile-first UI with Tailwind CSS

### 🔧 Technical Features
- **RESTful API**: Clean, documented backend endpoints
- **Real-time Updates**: Seamless frontend-backend integration
- **Security**: BCrypt password hashing, JWT tokens, CORS protection
- **Database**: H2 in-memory (dev) / PostgreSQL (production)
- **Error Handling**: Comprehensive error messages and logging

## 🛠️ Tech Stack

| Layer | Technology | Version |
|-------|------------|---------|
| **Backend** | Spring Boot | 3.3.3 |
| **Frontend** | React | 19.1.1 |
| **Build Tool** | Maven | 3.6+ |
| **Build Tool** | Vite | 7.1.2 |
| **Database** | H2 Database | In-memory |
| **Styling** | Tailwind CSS | 4.1.12 |
| **HTTP Client** | Axios | Latest |
| **Security** | Spring Security + JWT | Latest |

## 🚀 Quick Start

### Prerequisites
- **Java 17+** installed
- **Node.js 18+** and npm installed
- **Maven 3.6+** installed

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/shopers-backend.git
cd shopers-backend
```

### 2. Start the Backend
```bash
# Navigate to project root
cd shopers-backend

# Start Spring Boot application
mvn spring-boot:run

# Backend will start on http://localhost:8080
```

### 3. Start the Frontend
```bash
# Open new terminal and navigate to frontend
cd shop-frontend

# Install dependencies
npm install

# Start development server
npm run dev

# Frontend will start on http://localhost:3003
```

### 4. Test the Application
Open your browser and navigate to `http://localhost:3003`

**Test Credentials:**
- Email: `test@test.com`
- Password: `123456`

## � API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/register` | User registration |
| `POST` | `/api/auth/login` | User login |

### Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/products` | Get all products |
| `GET` | `/api/products/{id}` | Get product by ID |

### Orders (Protected)
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/orders` | Create new order |
| `GET` | `/api/orders` | Get user orders |

## 🗂️ Project Structure

```
shopers-backend/
├── src/main/java/com/shopers/
│   ├── auth/                    # Authentication components
│   ├── product/                 # Product management
│   ├── order/                   # Order processing
│   ├── config/                  # Configuration files
│   └── common/                  # Shared utilities
├── shop-frontend/
│   └── src/
│       ├── components/          # Reusable UI components
│       ├── pages/               # Application pages
│       ├── services/            # API services
│       └── context/             # React context providers
└── README.md
```
## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Encryption**: BCrypt password hashing
- **CORS Protection**: Configured for development and production
- **Input Validation**: Server-side validation for all inputs
- **SQL Injection Protection**: JPA/Hibernate parameterized queries

## 🎨 UI Components

### Pages
- **Home/Products**: Product catalog with search and filter
- **Login/Register**: Secure authentication forms
- **Shopping Cart**: Real-time cart management
- **Checkout**: Complete order processing
- **Dashboard**: User account and order history

### Components
- **Navbar**: Navigation with auth state
- **ProtectedRoute**: Route-level authentication
- **ProductCard**: Product display component
- **CartContext**: Global cart state management

## 🛢️ Database

### Development (H2)
- **URL**: `jdbc:h2:mem:shopersdb`
- **Username**: `sa`
- **Password**: *(empty)*
- **Console**: `http://localhost:8080/h2-console`

### Sample Data
- **20 Products** across Electronics, Accessories, Apparel, Footwear, Home
- **Test Users** for immediate testing
- **Order History** examples

## 🚀 Deployment

### Environment Variables
```bash
# Database
DATABASE_URL=your_postgresql_url
JWT_SECRET=your_jwt_secret_key

# CORS (if needed)
CORS_ALLOWED_ORIGINS=https://your-frontend-domain.com
```

### Build Commands
```bash
# Backend
mvn clean package

# Frontend
cd shop-frontend
npm run build
```

## 🧪 Testing

### Manual Testing
1. **Registration**: Create new user account
2. **Login**: Authenticate with test credentials
3. **Products**: Browse product catalog
4. **Cart**: Add/remove items from cart
5. **Checkout**: Complete order process

### API Testing
```bash
# Test products endpoint
curl http://localhost:8080/api/products

# Test registration
curl -X POST http://localhost:8080/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'

# Test login
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

## 🐛 Troubleshooting

### Common Issues

**Backend not starting?**
- Ensure Java 17+ is installed: `java -version`
- Check if port 8080 is available
- Verify Maven installation: `mvn -version`

**Frontend not loading?**
- Ensure Node.js 18+ is installed: `node -version`
- Clear npm cache: `npm cache clean --force`
- Delete node_modules and reinstall: `rm -rf node_modules && npm install`

**CORS errors?**
- Backend automatically handles CORS for development ports
- Check browser console for specific error messages

**Login not working?**
- Open browser console (F12) for detailed error messages
- Verify backend is running on port 8080
- Use test credentials: `test@test.com` / `123456`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## � License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Spring Boot team for the excellent framework
- React team for the powerful frontend library
- Tailwind CSS for the beautiful styling system
- H2 Database for easy development setup

## � Contact

**Developer**: Your Name  
**Email**: your.email@example.com  
**GitHub**: [@yourusername](https://github.com/yourusername)

---

**⭐ If you found this project helpful, please give it a star!**

Made with ❤️ by [Your Name]

### Quick Deploy
1. **Backend**: Push to GitHub → Connect to Render → Auto-deploy
2. **Frontend**: Push to GitHub → Connect to Netlify → Auto-deploy
3. **Database**: PostgreSQL automatically provisioned on Render

## 🧪 Testing

### Manual Testing Checklist
- [ ] User registration and login
- [ ] Product browsing and images
- [ ] Add/remove items from cart
- [ ] Place orders successfully
- [ ] View order history
- [ ] CORS working between domains
- [ ] Mobile responsive design

### API Testing
```bash
# Test products endpoint
curl https://your-backend.onrender.com/api/products

# Test authentication
curl -X POST https://your-backend.onrender.com/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

## 🐛 Troubleshooting

### Common Issues

**CORS Errors**:
- Verify `FRONTEND_URL` environment variable
- Check CORS configuration in `CorsConfig.java`

**Database Connection**:
- Check `DATABASE_URL` format
- Verify PostgreSQL driver in `pom.xml`

**Build Failures**:
- Ensure Java 17 compatibility
- Check Maven wrapper permissions: `chmod +x mvnw`

**Render Free Tier Sleep**:
- First request after 15min takes 30-60 seconds
- Use health check pings to keep warm

## 📈 Future Enhancements

- [ ] Order status tracking
- [ ] Payment integration (Stripe)
- [ ] Product reviews and ratings
- [ ] Admin dashboard
- [ ] Email notifications
- [ ] Advanced search and filters
- [ ] Inventory management
- [ ] Multi-vendor support

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Spring Boot documentation
- React and Vite communities
- TailwindCSS for amazing styling utilities
- Render and Netlify for free hosting tiers
