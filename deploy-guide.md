# TodoMate Deployment Guide

## 🚀 Hosting Options

### **1. Heroku (Recommended - Free Tier Available)**

#### Setup:
```bash
# Install Heroku CLI
# Create Heroku app
heroku create your-todomate-app

# Add MongoDB Atlas (free)
heroku addons:create mongolab:sandbox

# Set environment variables
heroku config:set NODE_ENV=production

# Deploy
git push heroku main
```

**Your app will be at:** `https://your-todomate-app.herokuapp.com`

---

### **2. Vercel (Frontend) + Railway (Backend)**

#### Frontend on Vercel:
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy frontend
cd frontend
vercel --prod
```

#### Backend on Railway:
1. Go to [railway.app](https://railway.app)
2. Connect GitHub repo
3. Deploy backend folder
4. Add MongoDB database

---

### **3. Netlify (Frontend) + Render (Backend)**

#### Frontend on Netlify:
1. Go to [netlify.com](https://netlify.com)
2. Connect GitHub repo
3. Build command: `cd frontend && npm run build`
4. Publish directory: `frontend/build`

#### Backend on Render:
1. Go to [render.com](https://render.com)
2. Connect GitHub repo
3. Root directory: `backend`
4. Build command: `npm install`
5. Start command: `npm start`

---

### **4. DigitalOcean App Platform**

1. Go to [digitalocean.com](https://digitalocean.com)
2. Create new app from GitHub
3. Configure build settings:
   - **Backend**: Node.js service
   - **Frontend**: Static site
   - **Database**: MongoDB

---

## 🔧 Environment Variables for Production

### Backend (.env):
```
PORT=5001
MONGODB_URI=your_mongodb_connection_string
NODE_ENV=production
```

### Frontend:
```
REACT_APP_API_URL=/api
```

## 📋 Pre-Deployment Checklist

- [ ] MongoDB Atlas account created
- [ ] Environment variables configured
- [ ] CORS settings updated for production domain
- [ ] Build process tested locally
- [ ] Git repository created and pushed

## 🌐 Quick Deploy Commands

```bash
# 1. Initialize git
git init
git add .
git commit -m "Initial commit"

# 2. Create GitHub repo and push
git remote add origin https://github.com/yourusername/todomate.git
git push -u origin main

# 3. Deploy to Heroku
heroku create your-app-name
git push heroku main
```

**Your TodoMate will be live! 🎉**