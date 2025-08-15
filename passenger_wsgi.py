#!/usr/bin/python3
"""
Passenger WSGI file for cPanel deployment
This file is required by cPanel's Python app hosting
"""

import sys
import os

# Add your project directory to the Python path
sys.path.insert(0, os.path.dirname(__file__))

from app import app as application

if __name__ == "__main__":
    application.run()
