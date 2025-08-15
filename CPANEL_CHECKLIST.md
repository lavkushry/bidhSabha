# 🚀 cPanel Deployment Checklist for BLAS Website

## ✅ Pre-Deployment Checklist
- [x] Fixed requirements.txt format
- [x] Created passenger_wsgi.py for cPanel
- [x] Updated app.py for production
- [x] Created .htaccess for security and optimization
- [x] Created data directory for CSV storage
- [x] Created deployment package
- [x] Created comprehensive deployment guide

## 📦 What's in your deployment package:
```
deployment/
├── app.py                 # Main Flask application (production-ready)
├── passenger_wsgi.py      # Required for cPanel Python apps
├── requirements.txt       # Python dependencies
├── .htaccess             # Web server configuration & security
├── DEPLOYMENT_GUIDE.md   # Detailed deployment instructions
├── static/               # CSS, JS, images
│   ├── css/
│   ├── js/
│   └── img/
├── templates/            # HTML templates
│   └── index.html
└── data/                 # CSV storage directory
    └── README.md
```

## 🎯 Quick Deployment Steps:

### 1. **Compress the deployment folder**
   - Right-click on `deployment` folder
   - Select "Send to" → "Compressed (zipped) folder"
   - Name it `blas-website.zip`

### 2. **Access your cPanel**
   - Login to your hosting provider's cPanel
   - Look for "Python Apps" or "Setup Python App"

### 3. **Create Python Application**
   - Click "Create Application"
   - Python Version: 3.6+ (choose latest available)
   - Application Root: `/public_html` (for main domain)
   - Application URL: `/` (for main domain) or `/blas` (for subdirectory)
   - Application Startup File: `passenger_wsgi.py`
   - Click "Create"

### 4. **Upload Files**
   - Use cPanel File Manager or FTP
   - Extract `blas-website.zip` to your application directory
   - Ensure all files are in the correct location

### 5. **Install Dependencies**
   - In Python Apps, go to your application
   - Add these packages one by one:
     * Flask
     * Werkzeug
     * Jinja2
     * MarkupSafe
     * click
     * itsdangerous
     * requests

### 6. **Set Permissions** (if needed)
   - data/ folder: 755 or 775 (for CSV writing)
   - All .py files: 644
   - .htaccess: 644

### 7. **Test Your Website**
   - Visit your domain
   - Test form submission
   - Verify data is saved

## 🔧 Troubleshooting Quick Fixes:

| Problem | Solution |
|---------|----------|
| 500 Error | Check Python version, verify dependencies installed |
| Module not found | Ensure all packages from requirements.txt are installed |
| Permission denied | Set data/ folder to 775, check file ownership |
| Static files 404 | Verify static/ folder structure, check .htaccess |
| Form not submitting | Check CSRF token, verify POST endpoint works |

## 📞 Support Resources:
1. **Read DEPLOYMENT_GUIDE.md** for detailed instructions
2. Contact your hosting provider for Python app support
3. Check cPanel error logs for specific issues
4. Verify Python version compatibility (3.6+)

## 🌐 Expected URLs after deployment:
- **Main Site**: `https://yourdomain.com`
- **Form Submission**: `https://yourdomain.com/download-admit-card` (POST only)
- **Data Storage**: CSV files saved in protected `data/` directory

---
**Status**: ✅ Ready for deployment
**Created**: August 15, 2025
**Package**: deployment.zip