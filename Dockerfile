# Use the official Node.js image based on Alpine Linux
FROM node:20.15-alpine

# Set the working directory
WORKDIR /app

RUN apk add curl

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Remix app
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

ENV REACT_APP_BACKEND_URL=http://backend:3001

# Define the command to run the app
CMD ["npm", "start"]
