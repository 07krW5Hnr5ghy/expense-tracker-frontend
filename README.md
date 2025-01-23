# Expense Tracker Frontend

This repository contains the frontend implementation for the Expense Tracker application. Built using **React.js**, **Vite**, and **Tailwind CSS**, it provides a user-friendly interface to manage expenses. The frontend communicates with a backend API for user authentication, expense management, and data persistence.

---

## Features

- **User Authentication**:
  - Login and Logout.
  - JWT-based session handling.
- **Expense Management**:
  - Add, update, delete, and view expenses.
  - Filter expenses by time periods and categories.
  - Paginated display of expenses.
- **Dashboard Summary**:
  - Display total expenses amount.
- **Responsive Design**:
  - Styled using Tailwind CSS.
  - Optimized for desktop and mobile devices.

---

## Installation and Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/07krW5Hnr5ghy/expense-tracker-frontend
   cd expense-tracker-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up the environment variables:

   Create a `.env` file in the root directory and add the backend URL:

   ```plaintext
   VITE_BACKEND_URL=http://localhost:5000
   ```

4. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open the application in your browser:

   Navigate to `http://localhost:5173` (default Vite port).

---

## Project Structure

```plaintext
src/
├── assets/               # Static assets like images
├── components/           # Reusable UI components
│   ├── Navbar.jsx        # Navigation bar
│   ├── LogoutButton.jsx  # Log out button
│   ├── Modal.jsx         # Modal component
│   ├── ExpenseForm.jsx   # Form for adding/updating expenses
│   ├── ProtectedRoute.jsx   # Protected route component
│   ├── ConfirmationDialog.jsx   # Confirmation dialog component
│   ├── Toast.jsx         # Notification component
├── pages/                # Application pages
│   ├── HomePage.jsx      # Landing page
│   ├── LoginPage.jsx     # Login page
│   ├── RegisterPage.jsx  # Registration page
│   ├── ExpensesPage.jsx  # Expense management page
├── services/             # API service functions
│   ├── api.js            # API expense and authentication calls
├── context/              # contexts
│   ├── AuthContext.js    # Context for authentication token
├── utils/                # Helper functions
│   ├── utils.js          # Formatting functions
├── App.jsx               # Main application component
├── main.jsx              # Application entry point
└── index.css             # Tailwind CSS entry point
```

---

## Available Scripts

- **`npm run dev`**: Start the development server.
- **`npm run build`**: Build the application for production.
- **`npm run preview`**: Preview the production build locally.

---

## Environment Variables

- `VITE_BACKEND_URL`: The base URL of the backend API (e.g., `http://localhost:5000`).

---

## Tailwind CSS Setup

Tailwind CSS is used for styling the application. To customize Tailwind, update the `tailwind.config.js` file. Default configuration includes:

- **Responsive Design**: Mobile-first approach.
- **Custom Colors**: Adjust via the theme section in `tailwind.config.js`.

---

## Backend Integration

This frontend communicates with a backend API for data management. Ensure the backend server is running, and the `VITE_BACKEND_URL` is correctly set in the `.env` file.

Backend repository: [Expense Tracker Backend](backend_repo_url)

---

## Deployment

1. Build the application:

   ```bash
   npm run build
   # or
   yarn build
   ```

2. Serve the `dist/` directory using a static file server:

   ```bash
   npm install -g serve
   serve -s dist
   ```

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push to the branch.
5. Create a Pull Request.

---

## Acknowledgments

- **React.js**: A JavaScript library for building user interfaces.
- **Vite**: A fast development server and build tool.
- **Tailwind CSS**: A utility-first CSS framework.
