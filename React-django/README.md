# My Web Project

This is a web application built using **Django** for the backend and **React** for the frontend.

## Technologies Used:
- **Backend**: Django 5.1.1
- **Frontend**: React
- **Database**: PostgreSQL

## Setup Instructions:

1. **Clone the repository**:
git clone https://github.com/yourusername/project-name.git cd project-name
markdown
Copy code

2. **Backend Setup**:
- Navigate to the `backend` directory.
- Create a virtual environment:
  ```
  python -m venv newenv
  ```
- Activate the virtual environment:
  ```
  .\newenv\Scripts\activate   # For Windows
  source newenv/bin/activate  # For macOS/Linux
  ```
- Install dependencies:
  ```
  pip install -r requirements.txt
  ```
- Apply migrations (if needed):
  ```
  python manage.py migrate
  ```
- Run the Django server:
  ```
  python manage.py runserver
  ```

3. **Frontend Setup**:
- Navigate to the `frontend` directory.
- Install dependencies:
  ```
  npm install
  ```
- Start the React app:
  ```
  npm run dev
  ```

4. **Running the Application**:
- The backend will be available at `http://127.0.0.1:8000/`.
- The frontend will run at `http://localhost:5173/`.








EDIT 12TH LINE

Steps:
- Create a GitHub repository (e.g., `https://github.com/yourusername/project-name`).
- Push your project to GitHub:
  ```bash
  git init
  git add .
  git commit -m "Initial commit"
  git remote add origin https://github.com/yourusername/project-name.git
  git push -u origin master