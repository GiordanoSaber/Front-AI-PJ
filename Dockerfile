FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Expose a port (if your React app uses a specific port)
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]