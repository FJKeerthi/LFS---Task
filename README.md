# WeatherView - Weather Forecasting App

Domain : lfs-task-7f7u.vercel.app

![image](https://github.com/user-attachments/assets/b6c77975-d8ef-4390-b1b4-9839e7177592)

![image](https://github.com/user-attachments/assets/23a42b0a-fb47-420b-ac4a-83d8175a5bc8)

![image](https://github.com/user-attachments/assets/a931c172-8578-43fb-b283-59824eb27cff)

![image](https://github.com/user-attachments/assets/5724a103-e194-4296-832b-c03878a78807)

![image](https://github.com/user-attachments/assets/45d5d680-eada-463f-a476-154d46beca31)




A modern, responsive weather forecasting application built with React and Node.js.

## Features

- **Real-time Weather Data**: Get current weather conditions for any city worldwide
- **5-Day Forecast**: Extended weather predictions with detailed information
- **Hourly Forecast**: Hour-by-hour weather breakdown for today
- **Global Coverage**: Search weather for cities in any country
- **User Authentication**: Secure login and registration system
- **Responsive Design**: Beautiful UI that works on all devices
- **Modern Interface**: Glassmorphism design with smooth animations

## Tech Stack

### Frontend
- React 19.1.0
- React Router Dom
- React Bootstrap
- Axios
- React Hot Toast
- Country State City (for location selection)

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS enabled
- Environment variables with dotenv

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account
- WeatherAPI key (from weatherapi.com)

### Setup

1. Clone the repository
```bash
git clone <repository-url>
cd my-fullstack-app
```

2. Install server dependencies
```bash
cd server
npm install
```

3. Install client dependencies
```bash
cd ../client
npm install
```

4. Configure environment variables
Create a `.env` file in the server directory:
```env
DATABASE=your_mongodb_connection_string
```

5. Configure weather API
Create a `.env` file in the client directory:
```env
REACT_APP_WEATHER_API_KEY=your_weatherapi_key
```

## Running the Application

1. Start the server (from server directory):
```bash
npm start
```

2. Start the client (from client directory):
```bash
npm start
```

The application will be available at `http://localhost:3000`

## API Endpoints

- `POST /register` - User registration
- `POST /login` - User login

## Project Structure

```
my-fullstack-app/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── images/         # Static images
│   │   └── App.js          # Main app component
│   └── package.json
├── server/                 # Node.js backend
│   ├── db/                 # Database connection
│   ├── model/              # MongoDB models
│   ├── index.js            # Main server file
│   └── package.json
└── README.md
```


