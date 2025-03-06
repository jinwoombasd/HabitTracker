import os
from flask import Flask
from flask_mysqldb import MySQL
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)

# Use environment variables for MySQL credentials
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'knight0'
app.config['MYSQL_PASSWORD'] = os.getenv('MYSQL_PASSWORD', 'default_password')  # Replace with your environment variable
app.config['MYSQL_DB'] = 'myflaskapp'

mysql = MySQL(app)

@app.route('/')
def index():
    try:
        cur = mysql.connection.cursor()
        cur.execute("SELECT DATABASE();")
        db_name = cur.fetchone()
        cur.close()
        return f"Connected to database: {db_name[0]}"
    except Exception as e:
        return f"Error: {str(e)}"

if __name__ == '__main__':
    app.run(debug=True)
