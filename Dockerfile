# Use the official Node.js v24 Alpine image
FROM node:24-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files if you have them (recommended for caching)
# COPY package*.json ./

# Install dependencies (uncomment if you add a package.json later)
# RUN npm ci --only=production

# Copy the rest of the application source code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run your application
CMD ["node", "index.js"]