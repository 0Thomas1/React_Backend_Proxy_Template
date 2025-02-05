# Template README.md

Welcome to the README.md file for the React Backend Proxy Template!

## Description

This template provides a starting point for building a React application with a backend proxy. It allows you to easily configure a proxy server to handle API requests from your React app.

## Features

- React frontend
- Backend proxy server
- Easy configuration

## Installation

1. Clone the repository.
2. Install dependencies by running `npm install` in both client and server directories.
3. Configure the backend proxy server in `server.js` inside the server directory.
4. Start the development server with `npm run dev` at both the client and server directories.

## Usage

1. Open your browser and navigate to `http://localhost:5173`.

  It should look like this:
  ![success](img/success.png)

2. Use the React app to make API requests at `/api/` endpoint, which will be proxied to the backend server. Or you can customise it at `vite.config.js` under "proxy".

3. Start your react project!

## License

This project is licensed under the MIT License. See LICENSE.md for more information.
