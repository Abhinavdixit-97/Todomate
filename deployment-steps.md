# TodoMate Deployment: Netlify + Render

## 🚀 Step-by-Step Deployment Guide

### **Phase 1: Deploy Backend to Render**

1. **Go to [render.com](https://render.com)**
2. **Sign up/Login** with GitHub
3. **Create New Web Service**
   - Connect your GitHub repo: `Abhinavdixit-97/Todomate`
   - **Root Directory:** `backend`
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`

4. **Add Environment Variables:**
   ```
   NODE_ENV = production
   MONGODB_URI = mongodb+srv://username:password@cluster.mongodb.net/todomate
   PORT = 10000
   ```

5. **Deploy** - Wait for deployment to complete
6. **Copy your backend URL:** `https://your-app-name.onrender.com`

---

### **Phase 2: Setup MongoDB Atlas**

1. **Go to [mongodb.com/atlas](https://mongodb.com/atlas)**
2. **Create free cluster**
3. **Create database user**
4. **Whitelist all IPs** (0.0.0.0/0)
5. **Get connection string**
6. **Update Render environment variable** with MongoDB URI

---

### **Phase 3: Deploy Frontend to Netlify**

1. **Go to [netlify.com](https://netlify.com)**
2. **Sign up/Login** with GitHub
3. **New site from Git**
   - Choose GitHub
   - Select repo: `Abhinavdixit-97/Todomate`
   - **Base directory:** `frontend`
   - **Build command:** `npm run build`
   - **Publish directory:** `frontend/build`

4. **Add Environment Variable:**
   - Go to Site Settings → Environment Variables
   - Add: `REACT_APP_API_URL` = `https://your-backend-url.onrender.com/api`

5. **Deploy** - Wait for deployment

---

### **Phase 4: Update API URL**

1. **Update frontend/.env.production:**
   ```
   REACT_APP_API_URL=https://your-actual-backend-url.onrender.com/api
   ```

2. **Commit and push:**
   ```bash
   git add .
   git commit -m "Update API URL for production"
   git push origin main
   ```

3. **Netlify will auto-redeploy**

---

## 🔗 **Final URLs**

- **Frontend (Netlify):** `https://your-app.netlify.app`
- **Backend (Render):** `https://your-backend.onrender.com`
- **API Endpoints:** `https://your-backend.onrender.com/api/todos`

---

## ✅ **Testing Your Deployment**

1. **Visit your Netlify URL**
2. **Try adding a todo**
3. **Check if it saves and loads**
4. **Test all CRUD operations**

---

## 🔧 **Troubleshooting**

### **Common Issues:**

1. **CORS Error:**
   - Backend automatically handles CORS
   - Check if API URL is correct

2. **Database Connection:**
   - Verify MongoDB Atlas connection string
   - Check IP whitelist (use 0.0.0.0/0)

3. **Build Failures:**
   - Check build logs in Netlify/Render
   - Verify Node.js version compatibility

---

## 💡 **Pro Tips**

- **Free Tiers:** Both Netlify and Render offer generous free tiers
- **Auto Deploy:** Both platforms auto-deploy on Git push
- **Custom Domains:** Add your own domain later
- **SSL:** Both provide free SSL certificates

**Your TodoMate will be live and fully functional! 🎉**