# PowerShell script to create deployment package
Write-Host "Creating deployment package for cPanel..." -ForegroundColor Green
Write-Host ""

# Create deployment directory
if (Test-Path "deployment") {
    Remove-Item "deployment" -Recurse -Force
}
New-Item -ItemType Directory -Name "deployment" | Out-Null

# Copy necessary files
Write-Host "Copying application files..." -ForegroundColor Yellow
Copy-Item "app.py" "deployment\"
Copy-Item "passenger_wsgi.py" "deployment\"
Copy-Item "requirements.txt" "deployment\"
Copy-Item ".htaccess" "deployment\"
Copy-Item "DEPLOYMENT_GUIDE.md" "deployment\"

# Copy directories
Write-Host "Copying static files..." -ForegroundColor Yellow
Copy-Item "static" "deployment\" -Recurse
Copy-Item "templates" "deployment\" -Recurse
Copy-Item "data" "deployment\" -Recurse

Write-Host ""
Write-Host "✅ Deployment package ready in 'deployment' folder" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Compress the 'deployment' folder to ZIP" -ForegroundColor White
Write-Host "2. Upload to your cPanel hosting" -ForegroundColor White
Write-Host "3. Follow DEPLOYMENT_GUIDE.md instructions" -ForegroundColor White
Write-Host ""