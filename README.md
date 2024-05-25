# Notes.ai
New generation notes take application integrated with various AI tools.

## Overview

This web application is designed to handle your notes to-do tasks in effictive manner. It is built using Python Django for the backend, MySQL for the database, and ReactJS for the front end. The application integrates JWT authentication and provides end-to-end encryption to ensure data security.

## Features

- **Notes Management:** Create, read, update, and delete notes.
- **To-Do Tasks:** Manage your to-do tasks efficiently.
- **JWT Authentication:** Secure user authentication using JSON Web Tokens.
- **End-to-End Encryption:** Ensures the security and privacy of your data.
- **Responsive Design:** Works seamlessly on various devices.

## Technologies Used

- **Backend:** Python Django
- **Database:** MySQL
- **Frontend:** ReactJS
- **Authentication:** JWT (JSON Web Tokens)
- **Encryption:** End-to-End Encryption

## Installation

### Prerequisites

- Python 3.x
- Node.js
- MySQL
- npm (Node Package Manager)
- Django
- Django Rest Framework
- Django-JWT
- cryptography library (for encryption)

### Backend Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/notes-todo-app.git
   cd notes-todo-app
   ```

2. Create a virtual environment:
   ```sh
   python -m venv venv
   source venv/bin/activate   # On Windows use `venv\Scripts\activate`
   ```

3. Install backend dependencies:
   ```sh
   pip install -r requirements.txt
   ```

4. Set up MySQL database:
   ```sh
   mysql -u root -p
   CREATE DATABASE notes_todo_db;
   ```

5. Configure the database settings in `settings.py`:
   ```python
   DATABASES = {
       'default': {
           'ENGINE': 'django.db.backends.mysql',
           'NAME': 'notes_todo_db',
           'USER': 'your_mysql_user',
           'PASSWORD': 'your_mysql_password',
           'HOST': 'localhost',
           'PORT': '3306',
       }
   }
   ```

6. Apply migrations:
   ```sh
   python manage.py migrate
   ```

7. Create a superuser for Django admin:
   ```sh
   python manage.py createsuperuser
   ```

8. Run the Django development server:
   ```sh
   python manage.py runserver
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```

2. Install frontend dependencies:
   ```sh
   npm install
   ```

3. Start the React development server:
   ```sh
   npm start
   ```

## Usage

1. Open your browser and go to `http://localhost:3000` for the React frontend.
2. Use the Django admin at `http://localhost:8000/admin` to manage users and data.
3. Sign up and log in to start managing your notes and to-do tasks.

## License

This project is licensed under the MIT License.

## Contact

For any questions or feedback, please contact lakshaygola@gmail.com

## Future scope

We introduce new features for Journal management and Blog writing. Will also introduce AI to help you in writing blogs and journal or suggesting blogs based on your preferences.`