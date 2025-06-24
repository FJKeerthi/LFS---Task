# WeatherView - Weather Forecasting App

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

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.