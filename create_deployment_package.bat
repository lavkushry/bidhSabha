@echo off
echo Creating deployment package for cPanel...
echo.

REM Create deployment directory
if exist "deployment" rmdir /s /q "deployment"
mkdir "deployment"

REM Copy necessary files
echo Copying application files...
copy "app.py" "deployment\"
copy "passenger_wsgi.py" "deployment\"
copy "requirements.txt" "deployment\"
copy ".htaccess" "deployment\"
copy "DEPLOYMENT_GUIDE.md" "deployment\"

REM Copy directories
echo Copying static files...
xcopy "static" "deployment\static" /e /i /q
xcopy "templates" "deployment\templates" /e /i /q
xcopy "data" "deployment\data" /e /i /q

echo.
echo ✅ Deployment package ready in 'deployment' folder
echo.
echo Next steps:
echo 1. Compress the 'deployment' folder to ZIP
echo 2. Upload to your cPanel hosting
echo 3. Follow DEPLOYMENT_GUIDE.md instructions
echo.
pause