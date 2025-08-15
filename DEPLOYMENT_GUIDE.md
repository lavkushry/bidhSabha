# BLAS Website - cPanel Deployment Guide

## 📋 Prerequisites
- cPanel hosting account with Python support
- Python 3.6+ available on server
- SSH access (optional but recommended)

## 🚀 Deployment Steps

### Step 1: Prepare Files for Upload
1. ✅ All files are ready in this directory
2. ✅ `passenger_wsgi.py` - Required for cPanel Python apps
3. ✅ `requirements.txt` - Python dependencies
4. ✅ `.htaccess` - Web server configuration
5. ✅ Production-ready `app.py`

### Step 2: Upload to cPanel
1. **Login to cPanel**
   - Go to your hosting provider's cPanel login
   - Enter your credentials

2. **Create Python App**
   - Go to "Python Apps" or "Setup Python App"
   - Click "Create Application"
   - Select Python version (3.6 or higher)
   - Set Application Root: `/public_html` (or subdirectory)
   - Set Application URL: `/` (for main domain) or `/blas` (for subdirectory)
   - Set Application Startup File: `passenger_wsgi.py`
   - Click "Create"

3. **Upload Files**
   - Use File Manager or FTP client
   - Upload all files to the application directory
   - Maintain folder structure:
     ```
     /public_html/
     ├── passenger_wsgi.py
     ├── app.py
     ├── requirements.txt
     ├── .htaccess
     ├── static/
     │   ├── css/
     │   ├── js/
     │   └── img/
     ├── templates/
     │   └── index.html
     └── data/ (will be created automatically)
     ```

### Step 3: Install Dependencies
1. **Access Terminal** (if available):
   ```bash
   cd /home/yourusername/public_html
   pip install -r requirements.txt
   ```

2. **OR Use cPanel Python App Manager**:
   - Go back to Python Apps
   - Click on your app
   - In the "Configuration" tab, add packages:
     - Flask
     - Werkzeug
     - Jinja2
     - MarkupSafe
     - click
     - itsdangerous
     - requests

### Step 4: Set Environment Variables (Optional)
1. In Python App settings, add:
   - `FLASK_ENV` = `production`
   - `SECRET_KEY` = `your-secret-key-here`

### Step 5: Test the Application
1. Visit your domain: `https://yourdomain.com`
2. Test the form submission
3. Check that data is saved (if you have file access)

## 🔧 Troubleshooting

### Common Issues:

1. **500 Internal Server Error**
   - Check Python version compatibility
   - Verify all dependencies are installed
   - Check file permissions (755 for directories, 644 for files)
   - Review error logs in cPanel

2. **Module Not Found Errors**
   - Ensure all dependencies are installed
   - Check Python path in `passenger_wsgi.py`

3. **Permission Errors**
   - Ensure data directory has write permissions
   - Check file ownership

4. **Static Files Not Loading**
   - Verify static folder structure
   - Check .htaccess file

### File Permissions:
```bash
# If you have SSH access, set proper permissions:
chmod 755 /path/to/your/app
chmod 644 /path/to/your/app/*.py
chmod 644 /path/to/your/app/.htaccess
chmod -R 755 /path/to/your/app/static
chmod 755 /path/to/your/app/templates
chmod 775 /path/to/your/app/data  # For CSV writing
```

## 📊 Important Notes

1. **Data Storage**: CSV files will be stored in the `data/` directory
2. **Security**: The `.htaccess` file protects sensitive files
3. **SSL**: Uncomment HTTPS redirect in `.htaccess` if you have SSL
4. **Backups**: Regularly backup your CSV data files

## 🌐 Production URLs
- Main site: `https://yourdomain.com`
- Download endpoint: `https://yourdomain.com/download-admit-card` (POST only)

## 📞 Support
If you encounter issues:
1. Check cPanel error logs
2. Contact your hosting provider for Python app support
3. Verify Python version compatibility

---
**Last Updated**: August 15, 2025
**Version**: Production Ready