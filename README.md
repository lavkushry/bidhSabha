# bidhSabha

This is a login system for BLAS (Bihar Legislative Assembly Secretariat) recruitment that authenticates users with their Application ID/Mobile Number and Date of Birth, storing the data in a CSV file using a Python Flask backend.

## Features

- Responsive login design that works on both desktop and mobile devices
- Form validation for required fields
- Backend Python Flask server to handle login submissions
- Data storage in CSV format
- Government-style interface with official branding
- Secure data handling with timestamp logging

## Prerequisites

- Python 3.6 or higher
- pip (Python package installer)

## Installation

1. Install Python 3.x
2. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```

## Usage

1. Start the Flask server:
   - On Windows, double-click `start_server.bat` or run `python app.py` in the terminal
   - On macOS/Linux, run `python app.py` in the terminal
2. Open your web browser and go to `http://localhost:5000`
3. Enter your Application ID/Mobile Number and Date of Birth
4. Click "Submit" to authenticate
5. Login data will be stored in `login_data.csv` in the project directory

## Testing

You can test the API endpoint directly using PowerShell:

```powershell
Invoke-WebRequest -Uri http://localhost:5000/login -Method POST -Body @{application_id='1234567890'; date_of_birth='15/03/1990'}
```

Or using curl:

```bash
curl -X POST -F "application_id=1234567890" -F "date_of_birth=15/03/1990" http://localhost:5000/login
```

You can also run the included test script to verify the application is working correctly:

```bash
python test_app.py
```

The login data will be stored in `login_data.csv` in the project directory.

## Files

- `index.html`: The main HTML file containing the login form
- `style.css`: CSS styling for the login form
- `script.js`: JavaScript for form handling and AJAX requests
- `app.py`: Python Flask backend server
- `requirements.txt`: Python package dependencies
- `test_app.py`: Test script for the application
- `start_server.bat`: Batch file to start the Flask server
- `login_data.csv`: CSV file where login data is stored (created automatically)
- `.gitignore`: Git ignore file to exclude unnecessary files from version control

## API Endpoints

- `GET /`: Serves the main HTML login page
- `POST /login`: Accepts login credentials and stores them in CSV format

## Data Storage

Login data is stored in `login_data.csv` in the project directory. The CSV file will be created automatically when the first login submission is made. The file will contain the following columns:

- Timestamp
- Application ID/Mobile Number
- Date of Birth

## Customization

You can customize the login form by modifying the following files:

- `index.html`: Update the login form fields and layout
- `style.css`: Modify the styling and appearance
- `script.js`: Change the form validation and submission behavior
- `app.py`: Modify the backend logic and data storage