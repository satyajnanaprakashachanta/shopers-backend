# 🛒 E-Commerce Application

A full-stack e-commerce application built with Spring Boot and React.

## 🚀 Live Demo

- **Frontend**: [Your Netlify URL]
- **Backend API**: [Your Render URL]
- **API Documentation**: [Your Render URL]/swagger-ui/index.html

## 🛠️ Tech Stack

### Backend
- **Java 17** with **Spring Boot 3.3.3**
- **Spring Security** with **JWT Authentication**
- **PostgreSQL** (Production) / **H2** (Development)
- **Maven** for dependency management
- **Swagger/OpenAPI** for API documentation

### Frontend
- **React 19** with **Vite**
- **TailwindCSS** for styling
- **React Router** for navigation
- **Axios** for API calls
- **Context API** for state management

## 📋 Features

### ✅ Authentication System
- User registration and login
- JWT-based authentication
- Protected routes
- Session management

### ✅ Product Management
- Browse products with images
- Product categories and descriptions
- Stock management
- Search and filtering (extensible)

### ✅ Shopping Cart
- Add/remove products
- Update quantities
- Persistent cart (localStorage)
- Real-time total calculation

### ✅ Order Management
- Place orders with cart items
- Order history
- Order details with itemized list
- User-specific order tracking

## 🏗️ Architecture

```
Frontend (React)     Backend (Spring Boot)     Database
     ↓                        ↓                   ↓
   Netlify      ←→       Render Web Service  ←→  PostgreSQL
     ↓                        ↓                   ↓
Static Files             REST API              Data Storage
```

## 🚀 Local Development

### Prerequisites
- Java 17+
- Node.js 18+
- Maven 3.6+

### Backend Setup
```bash
cd shopers-backend
mvn clean install
mvn spring-boot:run
```
Backend runs on `http://localhost:8080`

### Frontend Setup
```bash
cd shop-frontend
npm install
npm run dev
```
Frontend runs on `http://localhost:3000`

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Products
- `GET /api/products` - Get all products
- `GET /api/products/{id}` - Get product by ID

### Orders (Protected)
- `POST /api/orders` - Create new order
- `GET /api/orders/my` - Get user's orders

## 🔧 Environment Variables

### Backend (Render)
```env
DATABASE_URL=postgresql://...
JWT_SECRET=your-secret-key
SPRING_PROFILES_ACTIVE=production
FRONTEND_URL=https://your-frontend.netlify.app
```

### Frontend (Netlify)
```env
VITE_API_URL=https://your-backend.onrender.com
```

## 📦 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

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
