# Weather Application

A full-stack weather application that displays weather information for Colombo, Sri Lanka, and other cities worldwide.

## Features

- Real-time weather data display
- Temperature, humidity, wind speed, and UV index information
- Multiple city search capability
- Responsive design
- Modern UI/UX

## Tech Stack

- Frontend: React.js
- Backend: Node.js with Express
- API: WeatherAPI.com

## Getting Started

1. Clone the repository

2. Install dependencies
   ```bash
   # Install backend dependencies
   cd server
   npm install

   # Install frontend dependencies
   cd ../client
   npm install
   ```

3. Set up environment variables
   - Create a `.env` file in the server directory
   - Add your WeatherAPI.com API key:
     ```
     WEATHER_API_KEY=your_api_key_here
     PORT=5000
     ```

4. Run the application
   ```bash
   # Start the backend server
   cd server
   npm run dev

   # Start the frontend (in a new terminal)
   cd client
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Deployment

The application can be deployed to:
- Frontend: Vercel, Netlify, or GitHub Pages
- Backend: Heroku, DigitalOcean, or AWS

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
