import requests
import csv
import os

def test_form_submission():
    # Test data
    test_data = {
        'name': 'Test User',
        'email': 'test@example.com',
        'phone': '9876543210',
        'message': 'This is a test message'
    }
    
    # Send POST request to the form endpoint
    response = requests.post('http://localhost:5000/submit-form', data=test_data)
    
    # Check if the response is successful
    if response.status_code == 200:
        print("Form submission successful!")
        print("Response:", response.json())
        
        # Check if CSV file was created and contains the data
        if os.path.exists('form_data.csv'):
            with open('form_data.csv', 'r') as file:
                reader = csv.reader(file)
                rows = list(reader)
                
                # Check if the last row contains our test data
                if len(rows) > 1:
                    last_row = rows[-1]
                    if (last_row[1] == test_data['name'] and 
                        last_row[2] == test_data['email'] and 
                        last_row[3] == test_data['phone'] and 
                        last_row[4] == test_data['message']):
                        print("Data correctly saved to CSV file!")
                        return True
                    else:
                        print("Data mismatch in CSV file.")
                        print("Expected:", test_data)
                        print("Found:", last_row)
                        return False
                else:
                    print("No data found in CSV file.")
                    return False
        else:
            print("CSV file was not created.")
            return False
    else:
        print("Form submission failed with status code:", response.status_code)
        print("Response:", response.text)
        return False

if __name__ == "__main__":
    test_form_submission()