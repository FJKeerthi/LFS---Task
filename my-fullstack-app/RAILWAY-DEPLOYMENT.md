# WeatherView - Railway Deployment Guide

## 🚂 Quick Deploy to Railway

### Method 1: Deploy from GitHub (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Prepare for Railway deployment"
   git push origin main
   ```

2. **Deploy on Railway:**
   - Go to [railway.app](https://railway.app)
   - Sign up/Login with GitHub
   - Click "Deploy from GitHub repo"
   - Select your WeatherView repository
   - Railway will automatically build and deploy

3. **Set Environment Variables:**
   In Railway dashboard, add these variables:
   - `DATABASE`: Your MongoDB connection string
   - `NODE_ENV`: `production`
   - `REACT_APP_WEATHER_API_KEY`: `63f28bb6262d43888c1194350252306`

### Method 2: Deploy with Railway CLI

1. **Install Railway CLI:**
   ```bash
   npm install -g @railway/cli
   ```

2. **Login and Initialize:**
   ```bash
   railway login
   railway init
   ```

3. **Deploy:**
   ```bash
   railway up
   ```

## 🎯 Railway Free Tier

- **Usage**: 500 hours/month
- **Memory**: 512MB RAM  
- **Storage**: 1GB
- **Bandwidth**: 100GB/month
- **Custom Domain**: Available

Perfect for your weather app!

## 📋 Pre-Deployment Checklist

✅ Root package.json created
✅ Server updated for production
✅ Client API calls updated
✅ Railway configuration files added
✅ Environment variables configured
✅ Build process optimized

## 🔧 Environment Variables Needed

### On Railway Dashboard:
- `DATABASE`: MongoDB connection string
- `NODE_ENV`: `production`
- `REACT_APP_WEATHER_API_KEY`: `63f28bb6262d43888c1194350252306`

### MongoDB Setup:
1. Create free MongoDB Atlas account
2. Create a cluster
3. Get connection string
4. Replace username/password in the string

## 🚀 After Deployment

1. Your app will be available at: `https://your-app-name.railway.app`
2. Test all functionality:
   - User registration
   - User login
   - Weather forecasting
   - All pages loading correctly

## 🔍 Troubleshooting

### Common Issues:
1. **Build fails**: Check if all dependencies are in package.json
2. **Database connection**: Verify MongoDB connection string
3. **Environment variables**: Ensure all vars are set in Railway
4. **Port issues**: Railway automatically sets PORT variable

### Logs:
- View deployment logs in Railway dashboard
- Use Railway CLI: `railway logs`

## 📊 Project Structure (Railway Optimized)

```
weatherview-app/
├── client/                 # React frontend
│   ├── build/             # Production build (created during deployment)
│   ├── src/
│   └── package.json
├── server/                # Express backend
│   ├── index.js          # Updated for Railway
│   └── package.json
├── package.json          # Root package.json for Railway
├── railway.json          # Railway configuration
├── nixpacks.toml         # Build configuration
└── .gitignore           # Updated gitignore
```

## ✅ Benefits

- 🌍 **Global CDN**
- 🔒 **Automatic HTTPS**
- 📊 **Built-in monitoring**
- 🔄 **Auto-restart on failure**
- 💾 **Automatic backups**
- 🚀 **Zero-downtime deployments**
