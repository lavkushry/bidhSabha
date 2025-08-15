# BLAS Recruitment Website - Knowledge Base

## Project Overview

This project creates a login system for the BLAS (Bihar Legislative Assembly Secretariat) recruitment portal. The website includes a responsive login form that collects user credentials and stores them in a CSV file using a Python Flask backend.

## Website Reference

**Original Website**: <https://badv523.blasrecruit.in/>

The reference website is an e-admit card portal for Advertisement Number 05/2023 for recruitment of Office Attendant in Bihar Legislative Assembly Secretariat, Bihar.

### Key Features of Reference Site

- Clean, government-style interface
- Login form with Application ID/Mobile Number and Date of Birth fields
- Responsive design for desktop and mobile
- Official branding and color scheme
- Government of India emblem
- Support for Hindi and English languages

## Current Implementation Structure

### Backend (Python Flask)

- **File**: `app.py`
- **Framework**: Flask web framework
- **Database**: CSV file storage (`login_data.csv`)
- **Port**: 5000 (configurable)
- **Host**: 0.0.0.0 (accessible from network)

### Frontend

- **HTML Template**: `templates/index.html`
- **Styling**: `static/style.css`
- **JavaScript**: `static/script.js`
- **Responsive Design**: Mobile and desktop compatible
- **Government Logo**: `static/indian.png`

### Data Storage

- **Format**: CSV (Comma Separated Values)
- **File**: `login_data.csv`
- **Fields**: Timestamp, Application ID, Date of Birth

## Login Form Fields and Data Collection

### Current Form Fields

1. **Application ID/Mobile Number** (Text, Required)
   - Unique identifier for the applicant
   - Validation: Required field

2. **Date of Birth** (Text, Required)
   - Applicant's date of birth
   - Format: DD/MM/YYYY
   - Validation: Required field

### Data Processing Flow

1. User fills login form in browser
2. JavaScript validates and sends data via fetch API
3. Flask backend receives POST request at `/login`
4. Data is appended to CSV file with timestamp
5. Success/error response sent back to frontend
6. User sees confirmation or error message

## Design Requirements

### Desktop Design (Desktop.png)

- Professional government-style layout
- Clean typography and spacing
- Form centered on page
- Official color scheme
- Government of India emblem
- Proper branding elements

### Mobile Design (mobile.jpg)

- Responsive mobile-first approach
- Touch-friendly form elements
- Optimized for small screens
- Maintained branding consistency
- Easy navigation and input
- Responsive logo scaling

### Color Scheme (Based on Original BLAS Website)

- **Primary Navigation**: Orange (#EC6E15)
- **Background Gradient**:
  - Top: rgba(255,240,221,1) - Light peach
  - Middle: rgba(249,243,229,1) - Cream
  - Bottom: rgba(238,245,237,1) - Light green
- **Text Colors**:
  - Primary: Black/Dark gray
  - Secondary: White (on colored backgrounds)
  - Danger/Alert: Red (#f30000)
- **Form Elements**:
  - Background: Light gray (#f8f9fa)
  - Borders: Bootstrap default
  - Error borders: Red (#ff0000)
- **Loading Overlay**: rgba(249,249,249,0.8)

### Typography (From Original BLAS Website)

- **Primary Font**: Poppins (Google Fonts)
- **Font Weights**: 100, 200, 300, 400, 500, 600, 700, 800, 900
- **Font Styles**: Normal and italic
- **Responsive Font Sizes**:
  - Desktop: Standard Bootstrap sizes
  - Mobile: Reduced to 12px for tables and help text
  - Navigation: 11px on mobile, larger on desktop

### Navigation Bar Specifications

- **Background**: #EC6E15 (orange)
- **Logo**: Government of India emblem (indian.png)
- **Logo Dimensions**:
  - Desktop: 90px height
  - Mobile: 50px height
- **Text Elements**:
  - Hindi: "बिहार विधान सभा सचिवालय"
  - English: "BIHAR LEGISLATIVE ASSEMBLY SECRETARIAT"
- **Responsive Behavior**:
  - Secondary logo hidden on mobile
  - Text size adjusts based on screen size

## Technical Specifications

### Frontend Technologies (Based on Original BLAS Website)

- **HTML5**: Semantic markup with meta charset UTF-8
- **CSS3**: Bootstrap 5.3, Custom CSS, Flexbox, Grid, Gradients, Transitions
- **JavaScript Libraries**:
  - jQuery 3.6.3
  - Bootstrap 5.3.0-alpha1 Bundle
  - jQuery UI (Datepicker)
  - jQuery Validation Plugin
  - SweetAlert2 for notifications
- **Responsive Design**: Mobile-first approach with Bootstrap grid system
- **Fonts**: Google Fonts - Poppins family
- **Icons**: Bootstrap Icons 1.10.3

### Backend Technologies

- **Python 3.x**: Core language
- **Flask**: Web framework
- **CSV Module**: Data storage
- **Datetime**: Timestamp generation
- **CSRF Protection**: Token-based protection

### Original Website CSS Framework Details

- **Bootstrap Version**: 5.3.0-alpha1
- **Custom CSS File**: custom.css hosted on CDN
- **Responsive Breakpoints**:
  - Mobile: max-width 575.98px
  - Tablet: max-width 767.98px
  - Desktop: 768px and above
- **Color Scheme**:
  - Primary Orange: #EC6E15
  - Background Gradient: Linear gradient from #fff0dd to #f9f3e5 to #eef5ed
  - Text Colors: Standard Bootstrap text classes
  - Form Background: #f8f9fa (light gray)

### JavaScript Libraries and Functionality

1. **jQuery 3.6.3**: DOM manipulation and AJAX
2. **Bootstrap 5.3**: Responsive components and utilities
3. **jQuery UI**: Date picker functionality
4. **jQuery Validation**: Form validation
5. **SweetAlert2**: Modern alert notifications
6. **Custom Scripts**:
   - custom.js for general functionality
   - preference.js for user preferences

### File Structure (Updated Based on Original BLAS Website)

```
project/
├── app.py                 # Flask backend application
├── requirements.txt       # Python dependencies (Flask, etc.)
├── login_data.csv         # Data storage file
├── templates/
│   └── index.html        # Main HTML template (BLAS style)
├── static/
│   ├── css/
│   │   ├── custom.css    # Custom styling (based on BLAS)
│   │   └── jquery-ui.css # Date picker styling
│   ├── js/
│   │   ├── custom.js     # Custom JavaScript functionality
│   │   ├── preference.js # User preference handling
│   │   ├── jquery-ui.js  # Date picker functionality
│   │   ├── jquery-validation.js # Form validation
│   │   └── sweetalert2@11.js    # Alert notifications
│   ├── img/
│   │   ├── indian.png    # Government of India emblem
│   │   └── loading.gif   # Loading animation
│   └── assets/           # Additional assets from BLAS
├── start_server.bat      # Windows server startup
├── start_server.sh       # Linux server startup
└── Knowledge.md          # This documentation
```

### HTML Structure Analysis (From Original BLAS Website)

#### Document Head

- **Meta Tags**: UTF-8 charset, viewport for responsive design
- **Title**: "BLAS" (customizable)
- **CSRF Token**: Implemented for security
- **External Dependencies**:
  - Google Fonts (Poppins family)
  - Bootstrap 5.3.0-alpha1 CSS and JS
  - Bootstrap Icons 1.10.3
  - jQuery 3.6.3
  - jQuery UI for datepicker
  - Custom CSS and JS files

#### Body Structure

1. **Navigation Bar**:
   - Bootstrap navbar with orange background (#EC6E15)
   - Government of India emblem
   - Bilingual text (Hindi and English)
   - Responsive design with logo scaling

2. **Main Content Container**:
   - Bootstrap container with padding
   - Minimum height: 75vh
   - Centered form layout

3. **Page Header**:
   - Centered title with advertisement details
   - Highlighted text in red (#f30000)
   - Responsive typography

4. **Login Form**:
   - Bootstrap form with CSRF protection
   - Two input fields with bilingual labels
   - Date picker integration
   - Submit button with icon
   - Form validation

5. **Footer**:
   - Contact information
   - Help desk details
   - Copyright notice
   - Bootstrap container fluid

#### CSS Classes and Styling

##### Custom CSS Classes

- `.pageloader`: Full-screen loading overlay
- `.new-span`: Animated notification badge
- `.diagonal-split-background`: Gradient background
- `.crd-head`: Card header styling
- `.pol_logo`: Police/government logo sizing
- `.smj_logo`: Secondary logo (hidden on mobile)

##### Responsive Design

- **Mobile (<576px)**: Compressed layout, smaller fonts
- **Tablet (<768px)**: Adjusted spacing and logo sizes
- **Desktop (768px+)**: Full layout with all elements

##### Animation

- Blinking animation for notification badges
- Smooth transitions for interactive elements
- Loading animation with GIF

#### Form Implementation Details

##### Input Fields

1. **Application ID/Mobile Number**:
   - Input type: text
   - Name: "mobile"
   - Required: true
   - Autocomplete: disabled

2. **Date of Birth**:
   - Input type: text (with datepicker)
   - Name: "dob"
   - Required: true
   - Readonly: true (only datepicker input)
   - Format: DD-MM-YYYY

##### Form Validation

- jQuery Validation plugin integration
- Custom error styling (red borders and text)
- Real-time validation feedback
- AJAX form submission with error handling

##### Date Picker Configuration

```javascript
$('.date_view').datepicker({
    yearRange: "1970:+nn",
    changeMonth: true,
    changeYear: true,
    showButtonPanel: true,
    dateFormat: 'dd-mm-yy',
});
```

## Installation and Setup (Updated for BLAS Implementation)

### Prerequisites

- Python 3.7 or higher
- Flask framework
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Required Python Packages

```bash
Flask==2.3.2
Werkzeug==2.3.6
Jinja2==3.1.2
MarkupSafe==2.1.3
click==8.1.3
itsdangerous==2.1.2
```

### Installation Steps

1. **Install Python dependencies**:

   ```bash
   pip install -r requirements.txt
   ```

2. **Download external assets** (for offline use):
   - Bootstrap 5.3.0-alpha1 CSS and JS
   - Bootstrap Icons 1.10.3
   - jQuery 3.6.3
   - jQuery UI CSS and JS
   - Google Fonts (Poppins)

3. **Setup static files structure**:

   ```
   static/
   ├── css/
   │   ├── bootstrap.min.css
   │   ├── bootstrap-icons.css
   │   ├── jquery-ui.css
   │   └── custom.css
   ├── js/
   │   ├── jquery-3.6.3.min.js
   │   ├── bootstrap.bundle.min.js
   │   ├── jquery-ui.min.js
   │   ├── jquery.validate.min.js
   │   ├── sweetalert2@11.min.js
   │   ├── custom.js
   │   └── preference.js
   ├── img/
   │   ├── indian.png
   │   └── loading.gif
   └── fonts/
       └── (Poppins font files)
   ```

4. **Run the application**:

   ```bash
   python app.py
   ```

   Or use the provided scripts:
   - Windows: `start_server.bat`
   - Linux/Mac: `start_server.sh`

5. **Access the website**:
   - Local: <http://localhost:5000>
   - Network: http://[your-ip]:5000

### Configuration Options

- **Port**: Modify `app.run(port=5000)` in `app.py`
- **Host**: Modify `app.run(host='0.0.0.0')` in `app.py`
- **Debug Mode**: Set `debug=False` for production
- **CSV File**: Modify `CSV_FILE` variable in `app.py`
- **CSRF Secret**: Generate secure random key for Flask sessions

### CDN vs Local Assets

**For Development**: Use CDN links (as in original BLAS)
**For Production**: Download and serve locally for better performance and reliability

## Security Considerations

### Current Security Measures

- Input validation on frontend
- Server-side data sanitization
- CSRF protection (basic)
- Error handling

### Recommended Enhancements

- Input sanitization for XSS prevention
- Rate limiting for form submissions
- HTTPS implementation
- Database instead of CSV for production
- User authentication if required
- Input length validation
- Phone number format validation

## API Endpoints (Updated for BLAS Implementation)

### GET `/`

- **Description**: Serves the main login page with BLAS styling
- **Response**: HTML template with embedded CSRF token
- **Method**: GET
- **Template**: `templates/index.html`

### POST `/login-candidate` (Based on Original BLAS)

- **Description**: Handles candidate login form submission
- **Parameters**:
  - `_token` (string, required) - CSRF token
  - `mobile` (string, required) - Application ID or Mobile Number
  - `dob` (string, required) - Date of Birth in DD-MM-YYYY format
- **Response**: JSON with status and message or redirect
- **Method**: POST
- **Validation**:
  - CSRF token verification
  - Required field validation
  - Date format validation

### Security Implementation (From Original BLAS)

- **CSRF Protection**: Token-based with meta tag and AJAX headers
- **Input Sanitization**: Autocomplete disabled on all form elements
- **Error Handling**: Custom AJAX error message formatting
- **Form Validation**: Multi-level validation (client and server-side)

## JavaScript Implementation Details (From Original BLAS)

### Core JavaScript Functions

1. **CSRF Setup**:

```javascript
$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});
```

2. **Form Security**:

```javascript
$('input').attr('autocomplete', 'off');
$('select').attr('autocomplete', 'off');
$('textarea').attr('autocomplete', 'off');
```

3. **Date Picker Configuration**:

```javascript
$('.date_view').datepicker({
    yearRange: "1970:+nn",
    changeMonth: true,
    changeYear: true,
    showButtonPanel: true,
    dateFormat: 'dd-mm-yy',
});
```

4. **Error Handling Functions**:

```javascript
function ajaxErrorMsg(data) {
    var msg = 'Something missing.... try again'
    if (data.status == 422) {
        var errorData = data.responseJSON.errors;
        msg = ajaxErrorList(errorData);
    } else if (data.status == 403) {
        msg = data.responseJSON.msg;
    }
    return msg;
}

function ajaxErrorList(errorData) {
    var output = '<ul style="font-size: 1.2rem">';
    $.each(errorData, function (index, i) {
        output += '<li>' + i + '</li>';
    })
    output += '</ul>';
    return output;
}
```

### Form Validation Classes

- `input.error, select.error, textarea.error`: Red border for invalid fields
- `label.error`: Red text for error labels
- Error styling is automatically applied by jQuery Validation plugin

### Loading Animation

- `.pageloader` class with fixed positioning
- Background overlay with loading GIF
- Controlled via JavaScript for AJAX operations

### Responsive JavaScript Features

- Dynamic font size adjustments
- Mobile-specific hiding of elements
- Touch-friendly date picker on mobile devices

## BLAS Recruitment Login Specific Requirements

Based on the reference website (<https://badv523.blasrecruit.in/>), the login form should include:

### Login Fields for BLAS Compliance

1. **Application ID / Mobile Number** (Required)
   - Primary identifier for applicants
   - Can accept either application ID or mobile number
   - Validation for proper format

2. **Date of Birth** (Required)
   - Date input
   - Format validation (DD/MM/YYYY)
   - Required field validation

### Government Website Standards

- **Accessibility**: WCAG 2.1 AA compliance
- **Languages**: Hindi and English support
- **Design**: Clean, professional government styling
- **Validation**: Comprehensive form validation
- **Help**: Contact information prominently displayed

## Future Enhancements

### Planned Features

1. **Database Integration**: Replace CSV with SQLite/PostgreSQL
2. **User Authentication**: Login/logout functionality
3. **Admin Panel**: View and manage submissions
4. **Email Notifications**: Automatic confirmation emails
5. **File Uploads**: Support for document attachments
6. **Advanced Validation**: Phone number, ID validation
7. **Multi-language Support**: Hindi and English
8. **Pagination**: For large datasets
9. **Export Options**: PDF, Excel export
10. **Search and Filter**: Admin functionality

### Government Compliance

- Accessibility standards (WCAG 2.1)
- Government branding guidelines
- Data protection compliance
- Digital India initiative alignment

## Testing (Updated for BLAS Implementation)

### Manual Testing Checklist

- [ ] **Form Display**: Proper rendering of BLAS-styled login form
- [ ] **Navigation**: Logo and bilingual text display correctly
- [ ] **Responsive Design**:
  - Mobile view (< 576px): Logo scales, fonts adjust
  - Tablet view (< 768px): Layout adapts properly
  - Desktop view (768px+): Full layout with all elements
- [ ] **Form Functionality**:
  - [ ] Application ID/Mobile Number field validation
  - [ ] Date picker functionality and format validation
  - [ ] Required field validation (red borders on empty fields)
  - [ ] CSRF token inclusion in form submission
- [ ] **JavaScript Libraries**:
  - [ ] jQuery functionality working
  - [ ] Bootstrap components responsive
  - [ ] Date picker opens and closes properly
  - [ ] Form validation triggers correctly
  - [ ] SweetAlert notifications display
- [ ] **Error Handling**:
  - [ ] Network errors handled gracefully
  - [ ] Server errors show appropriate messages
  - [ ] Validation errors highlight problem fields
- [ ] **Loading States**:
  - [ ] Page loader displays during AJAX calls
  - [ ] Loading GIF animation works
- [ ] **Cross-Browser Compatibility**:
  - [ ] Chrome/Chromium
  - [ ] Firefox
  - [ ] Safari
  - [ ] Microsoft Edge
- [ ] **Accessibility**:
  - [ ] Keyboard navigation works
  - [ ] Screen reader compatibility
  - [ ] Color contrast meets standards
- [ ] **Performance**:
  - [ ] Page loads under 3 seconds
  - [ ] Form submission responds quickly
  - [ ] No console errors

### Automated Testing

- **Unit Tests**: Flask route testing (`test_app.py`)
- **Integration Tests**: Form submission workflow
- **Frontend Testing**: JavaScript unit tests for validation
- **Performance Testing**: Load testing with multiple concurrent users
- **Security Testing**: CSRF protection, input sanitization

### Browser DevTools Testing

1. **Responsive Design**: Use device simulation
2. **Network**: Test with slow connections
3. **Console**: Check for JavaScript errors
4. **Accessibility**: Use Lighthouse audit
5. **Performance**: Monitor loading times and resource usage

## Maintenance and Monitoring

### Regular Maintenance

- CSV file backup and rotation
- Log file monitoring
- Security updates
- Performance optimization
- Browser compatibility updates

### Monitoring Points

- Form submission success rate
- Error frequency and types
- Response time monitoring
- User experience metrics
- Server resource usage

## Contact and Support

### Development Support

- Review existing code in `app.py`, `templates/index.html`, `style.css`, `script.js`
- Check `form_data.csv` for data accuracy
- Monitor server logs for errors
- Test functionality across devices

### Help Desk Information (as per reference site)

- **Phone**: +91 94700-27525 (10AM to 5PM)
- **Email**: <helpdesk.bvs24@gmail.com>
- **Organization**: Bihar Legislative Assembly Secretariat, Bihar

## Deployment Notes

### Production Deployment

1. **Server Requirements**:
   - Python 3.7+
   - 512MB RAM minimum
   - 1GB storage
   - SSL certificate for HTTPS

2. **Environment Variables**:
   - `FLASK_ENV=production`
   - `SECRET_KEY=[secure-random-key]`
   - `DATABASE_URL` (if using database)

3. **Performance Optimization**:
   - Enable gzip compression
   - Static file caching
   - CDN for assets
   - Database optimization

4. **Backup Strategy**:
   - Daily CSV backups
   - Code repository backups
   - Configuration backups
   - Disaster recovery plan

---

*Last Updated: August 15, 2025*
*Version: 2.0*
*Author: Development Team*
*Project: BLAS Recruitment Website*
