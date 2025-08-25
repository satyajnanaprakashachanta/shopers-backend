# 🚀 Day 5 Deployment Checklist

## ✅ Pre-Deployment Checklist

### Backend Ready ✅
- [x] Procfile configured with production profile
- [x] render.yaml with build and environment settings
- [x] application-production.yml with PostgreSQL config
- [x] schema.sql for database initialization
- [x] PostgreSQL dependency in pom.xml
- [x] CORS configuration for production domains
- [x] Build test passed ✅

### Frontend Ready ✅
- [x] .env.production with API URL configuration
- [x] API configuration abstracted in api.js
- [x] Build test passed ✅
- [x] All components use centralized API endpoints

---

## 🎯 Quick Deployment Steps

### 1. Deploy Backend to Render (5 minutes)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for Day 5 deployment"
   git push origin main
   ```

2. **Create Render Web Service:**
   - Go to [render.com](https://render.com) → New Web Service
   - Connect GitHub repo: `shopers-backend`
   - Use existing `render.yaml` configuration
   - Create PostgreSQL database: `shopers-db`

3. **Set Environment Variables:**
   ```
   SPRING_PROFILES_ACTIVE=production
   JWT_SECRET=(auto-generated)
   CORS_ALLOWED_ORIGINS=https://your-app.netlify.app
   ```

4. **Deploy and get URL:** `https://your-backend.onrender.com`

### 2. Deploy Frontend to Netlify (3 minutes)

1. **Update API URL:**
   ```bash
   cd shop-frontend
   echo "VITE_API_URL=https://your-backend.onrender.com" > .env.production
   npm run build
   ```

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Drag `dist` folder OR connect GitHub
   - Set build command: `npm run build`
   - Set publish directory: `dist`

3. **Get URL:** `https://your-app.netlify.app`

### 3. Update CORS (1 minute)

Update Render environment variable:
```
CORS_ALLOWED_ORIGINS=https://your-app.netlify.app,http://localhost:3001
```

---

## 🧪 Test Your Live Application

Visit your Netlify URL and test:
- [x] User registration/login
- [x] Browse products
- [x] Add to cart
- [x] Checkout process
- [x] View orders
- [x] All API calls working

---

## 🎉 Deployment Complete!

**Your e-commerce app is now live on the internet!**

- **Frontend:** https://your-app.netlify.app
- **Backend:** https://your-backend.onrender.com
- **Database:** PostgreSQL on Render

**Time to deploy:** ~10 minutes total

### What's Working:
✅ User authentication (JWT)
✅ Product browsing
✅ Shopping cart
✅ Order checkout
✅ Order history
✅ Responsive design
✅ Production database
✅ CORS configured
✅ Environment-based configuration

**Congratulations on completing Day 5! Your e-commerce project is production-ready! 🚀**
