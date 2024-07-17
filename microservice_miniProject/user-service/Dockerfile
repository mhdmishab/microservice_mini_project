# Use a smaller base image with Node.js 16
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose the application port
EXPOSE 8080

# Run the application
CMD ["node", "dist/index.js"]
