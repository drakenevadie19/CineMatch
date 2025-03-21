# Step 1: Build Front-End
FROM node:18 AS frontend-build
WORKDIR /app
CMD [ "pwd" ]
COPY movie-rating-channel/ .
RUN npm install
RUN npm run build

# Step 2: Build Back-End
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install

# Copy back-end code
COPY . .

# Copy front-end build to back-end `public` folder
COPY --from=frontend-build /app/build /app/public/build

# Expose the port
EXPOSE 8000

# Start the server
CMD ["npm", "start"]
