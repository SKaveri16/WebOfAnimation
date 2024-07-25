# Animation and Image Processing Web App

## Description
A web application that allows users to upload images for animation and processing.

## Getting Started

### Prerequisites
- Node.js
- npm

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd my-web-app
   ```

2. Install dependencies for the server
   ```bash
   cd server
   npm install
   ```

3. Install dependencies for the client
   ```bash
   cd client
   npm install
   ```

### Running the Application

1. Start the server
   ```bash
   cd server
   npm start
   ```

2. Start the client
   ```bash
   cd client
   npm start
   ```

Open your browser and go to `http://localhost:3000` to view the application.

### Running Docker Container

To run the application in a Docker container, follow these steps:

1. Ensure you have Docker installed on your system.
2. Build the Docker image by running the command `docker build -t myapp .` in the project directory.
3. Run the Docker container using the command `docker run -p 3000:3000 myapp`.
4. Open your web browser and navigate to `http://localhost:3000` to access the application.

Note: Make sure to replace `myapp` with the actual name you want to give to your Docker image.

5. Access the Application: Open your web browser and go to http://localhost:3000 to view your application.
Additional Options:
Run in Detached Mode: If you want to run the container in the background, add the -d flag:
   docker run -d -p 3000:3000 my-app
   

For further assistance or troubleshooting, refer to the official Docker and React documentation:

* Docker: [https://docs.docker.com/](https://docs.docker.com/)
* React: [https://reactjs.org/docs/getting-started.html](https://reactjs.org/docs/getting-started.html)
