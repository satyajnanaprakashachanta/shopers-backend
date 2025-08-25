# 🚀 Day 5: Complete Deployment Guide

## Overview
Deploy your e-commerce application with:
- **Backend**: Spring Boot → Render (with PostgreSQL)
- **Frontend**: React + Vite → Netlify
- **Database**: PostgreSQL on Render

---

## 📋 Prerequisites
- GitHub account with your code pushed
- Render account (free tier)
- Netlify account (free tier)

---

## 🖥️ Part 1: Backend Deployment to Render

### Step 1.1: Push Your Code to GitHub
```bash
# Make sure all files are committed
git add .
git commit -m "Prepare for deployment"
git push origin main
```

### Step 1.2: Deploy to Render

1. **Go to [Render Dashboard](https://dashboard.render.com/)**

2. **Connect GitHub Repository**:
   - Click "New +" → "Web Service"
   - Connect your GitHub account
   - Select your `shopers-backend` repository
   - Click "Connect"

3. **Configure Build Settings**:
   ```
   Name: shopers-backend
   Environment: Java
   Build Command: ./mvnw clean package -DskipTests
   Start Command: java -Dserver.port=$PORT -jar target/shopers-backend-0.0.1-SNAPSHOT.jar
   ```

4. **Add Environment Variables**:
   Click "Advanced" → "Add Environment Variable":
   ```
   JWT_SECRET = your-super-secret-jwt-key-here
   SPRING_PROFILES_ACTIVE = production
   FRONTEND_URL = https://your-frontend-app.netlify.app
   ```

5. **Create PostgreSQL Database**:
   - In the same service setup, scroll to "Add Database"
   - Click "Add Database" → "PostgreSQL"
   - Name: `shopers-db`
   - This automatically creates `DATABASE_URL` environment variable

6. **Deploy**:
   - Click "Create Web Service"
   - Wait 5-10 minutes for deployment
   - Your backend will be available at: `https://your-app-name.onrender.com`

### Step 1.3: Test Backend Deployment

Once deployed, test these endpoints:
```bash
# Test health
curl https://your-app-name.onrender.com/api/products

# Test registration
curl -X POST https://your-app-name.onrender.com/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

---

## 🌐 Part 2: Frontend Deployment to Netlify

### Step 2.1: Update Frontend Configuration

1. **Update `.env.production`** in your `shop-frontend` folder:
   ```env
   VITE_API_URL=https://your-backend-app.onrender.com
   ```

2. **Commit and push changes**:
   ```bash
   cd shop-frontend
   git add .
   git commit -m "Update production API URL"
   git push origin main
   ```

### Step 2.2: Deploy to Netlify

1. **Go to [Netlify Dashboard](https://app.netlify.com/)**

2. **Import from Git**:
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" and authorize
   - Select your repository
   - Choose the `shop-frontend` folder as base directory

3. **Configure Build Settings**:
   ```
   Base directory: shop-frontend
   Build command: npm run build
   Publish directory: shop-frontend/dist
   ```

4. **Add Environment Variables**:
   - Go to Site settings → Environment variables
   - Add:
     ```
     VITE_API_URL = https://your-backend-app.onrender.com
     ```

5. **Deploy**:
   - Click "Deploy site"
   - Your frontend will be available at: `https://random-name.netlify.app`

### Step 2.3: Update CORS Configuration

1. **Update Backend CORS**:
   - Go back to Render dashboard
   - Open your backend service
   - Go to Environment → Add Environment Variable:
     ```
     FRONTEND_URL = https://your-frontend-app.netlify.app
     ```
   - Click "Manual Deploy" to redeploy

---

## 🧪 Part 3: Final Verification

### Test Complete User Flow:

1. **Visit your frontend**: `https://your-frontend-app.netlify.app`

2. **Register a new user**:
   - Go to Register page
   - Create account with email/password

3. **Login**:
   - Use the credentials you just created

4. **Browse Products**:
   - Check that products load from backend
   - Verify images display correctly

5. **Test Cart & Orders**:
   - Add products to cart
   - Place an order
   - Check "My Orders" page

### Debug Common Issues:

**CORS Errors**:
```bash
# Check if CORS is properly configured
curl -H "Origin: https://your-frontend-app.netlify.app" \
     -H "Access-Control-Request-Method: GET" \
     -H "Access-Control-Request-Headers: X-Requested-With" \
     -X OPTIONS \
     https://your-backend-app.onrender.com/api/products
```

**Database Connection Issues**:
- Check Render logs: Dashboard → Service → Logs
- Verify `DATABASE_URL` environment variable exists

**Build Failures**:
- Check Maven build logs in Render
- Ensure Java 17 is specified in `pom.xml`

---

## 📊 Part 4: Monitoring & Maintenance

### Render Free Tier Limitations:
- **Sleep after 15 minutes** of inactivity
- **750 hours/month** of runtime
- **First request** after sleep takes 30-60 seconds

### Netlify Free Tier:
- **100GB bandwidth/month**
- **300 build minutes/month**
- **Automatic deployments** on git push

### Performance Tips:

1. **Keep Backend Warm**:
   ```bash
   # Create a simple health check cron job
   curl https://your-backend-app.onrender.com/api/products
   ```

2. **Monitor Logs**:
   - Render: Dashboard → Service → Logs
   - Netlify: Site overview → Functions → View logs

3. **Database Backups**:
   - Render automatically backs up PostgreSQL
   - Download backups from database dashboard

---

## 🎯 Part 5: Production Checklist

### Security:
- ✅ Strong JWT secret
- ✅ HTTPS enforced
- ✅ CORS properly configured
- ✅ No sensitive data in frontend

### Performance:
- ✅ Database connection pooling
- ✅ Proper HTTP caching headers
- ✅ Compressed assets (automatic on Netlify)

### Monitoring:
- ✅ Error logging enabled
- ✅ Health check endpoints
- ✅ Database connection monitoring

---

## 🚨 Troubleshooting Guide

### Backend Won't Start:
1. Check Render build logs
2. Verify `DATABASE_URL` format
3. Check Java version compatibility
4. Validate `pom.xml` dependencies

### Frontend API Calls Fail:
1. Verify `VITE_API_URL` environment variable
2. Check CORS configuration
3. Test backend endpoints directly
4. Check browser network tab for errors

### Database Issues:
1. Check connection string format
2. Verify PostgreSQL driver is included
3. Check database logs in Render
4. Ensure schema.sql runs successfully

---

## 🎉 Success! 

Your e-commerce application is now live at:
- **Frontend**: https://your-frontend-app.netlify.app
- **Backend**: https://your-backend-app.onrender.com
- **API Docs**: https://your-backend-app.onrender.com/swagger-ui/index.html

**Test the complete flow**:
1. Register → Login → Browse Products → Add to Cart → Place Order → View Orders

Your Day 5 deployment is complete! 🚀
