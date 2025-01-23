# Expense Tracker Frontend

This is the frontend application for the Expense Tracker project. It provides a user interface for managing expenses, including features for user authentication, adding, updating, deleting, filtering, and summarizing expenses. The application is built using **React.js** with **Vite** and styled using **Tailwind CSS**.

---

## Features

- **User Authentication:**

  - Login and registration functionality.
  - JWT-based token management.

- **Expense Management:**

  - Add, update, and delete expenses.
  - Filter expenses by time (e.g., past week, month, custom range) and categories.
  - Pagination for better performance and navigation.

- **Summary:**

  - Display the total amount of expenses on the expenses page.

- **User-Friendly UI:**
  - Modal forms for adding and editing expenses.
  - Toast notifications for success and error messages.
  - Confirmation dialogs for delete actions.

---

## Prerequisites

Make sure you have the following installed on your development machine:

- Node.js (v14 or later)
- npm or yarn

---

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd expense-tracker-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and configure the API URL:

   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

The application will be available at `http://localhost:5173`.

---

## Project Structure

```
expense-tracker-frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Toast.jsx
│   │   ├── ConfirmationDialog.jsx
│   │   └── ExpenseForm.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── RegisterPage.jsx
│   │   └── ExpensesPage.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles/
│       └── index.css
└── vite.config.js
```

---

## Key Components

### Navbar

- Displays navigation links.
- Includes a conditional logout button based on user authentication.

### ExpenseForm

- A reusable component for adding and editing expenses.
- Integrated with a modal for better UI/UX.

### Toast

- Displays success or error notifications.
- Automatically disappears after a few seconds.

### ConfirmationDialog

- Asks for confirmation before deleting an expense.

---

## Pages

### HomePage

- Displays a welcome message and links to login/register.

### LoginPage

- Provides a login form for existing users.
- Validates input and handles errors.

### RegisterPage

- Provides a registration form for new users.
- Validates input and handles errors.

### ExpensesPage

- Displays the user's expenses in a list.
- Features:
  - Filters by time and category.
  - Pagination.
  - Total expense summary.
  - Actions for adding, editing, and deleting expenses.

---

## Styling

Tailwind CSS is used for styling the entire application. The utility classes provide a responsive and modern design with minimal effort.

---

## API Integration

The frontend communicates with a backend API for managing expenses and user authentication. Ensure the backend API is running and accessible.

### Example API Endpoints

- **Authentication:**
  - `POST /api/auth/register`
  - `POST /api/auth/login`
- **Expenses:**
  - `GET /api/expenses`
  - `POST /api/expenses`
  - `PUT /api/expenses/:id`
  - `DELETE /api/expenses/:id`

---

## Scripts

- Start development server:
  ```bash
  npm run dev
  ```
- Build for production:
  ```bash
  npm run build
  ```
- Preview production build:
  ```bash
  npm run preview
  ```

---

## Future Enhancements

- Add more filters and advanced search options.
- Implement dark mode for better user experience.
- Add unit and integration tests.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.
