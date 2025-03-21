# Use official Node.js LTS version as base image
FROM node:18 AS backend

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the entire back-end code
COPY . .

# Set environment variable
ENV NODE_ENV=production

# Expose necessary port
EXPOSE 8000

# Use a non-root user for security
RUN useradd --create-home appuser
USER appuser

# Start the server
CMD ["npm", "run", "dev"]
