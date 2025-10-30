# TodoMate - Full Stack Todo Application

A modern, responsive todo application built with React, Node.js, Express, and MongoDB.

## Features

- ✅ Create, read, update, and delete todos
- 🎯 Priority levels (Low, Medium, High)
- ✨ Modern, responsive UI with glassmorphism design
- 🔄 Real-time updates
- 📱 Mobile-friendly interface
- 🎨 Beautiful animations and transitions

## Tech Stack

### Frontend
- React 18
- Modern CSS with Flexbox/Grid
- Font Awesome icons
- Axios for API calls

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS enabled
- Error handling middleware

## Project Structure

```
TodoMate/
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Todos.jsx
│   │   │   └── TodoItem.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── styles/
│   │   │   └── App.css
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── backend/
│   ├── controllers/
│   │   └── todoController.js
│   ├── middleware/
│   │   └── errorHandler.js
│   ├── models/
│   │   └── Todo.js
│   ├── routes/
│   │   └── todoRoutes.js
│   ├── .env
│   ├── package.json
│   └── server.js
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud)
- npm or yarn

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file (already created) and update MongoDB URI if needed:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/todomate
NODE_ENV=development
```

4. Start the server:
```bash
npm run dev
```

The backend will run on `http://localhost:5001`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend will run on `http://localhost:3001`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/todos` | Get all todos |
| POST | `/api/todos` | Create new todo |
| PUT | `/api/todos/:id` | Update todo |
| DELETE | `/api/todos/:id` | Delete todo |
| PATCH | `/api/todos/:id/toggle` | Toggle todo completion |

## Usage

1. **Add Todo**: Fill in the form with title, description (optional), and priority
2. **Complete Todo**: Click the "Complete" button to mark as done
3. **Delete Todo**: Click the "Delete" button to remove a todo
4. **View Status**: See completion progress in the todos header

## Development

### Running in Development Mode

Backend:
```bash
cd backend
npm run dev
```

Frontend:
```bash
cd frontend
npm start
```

### Building for Production

Frontend:
```bash
cd frontend
npm run build
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.