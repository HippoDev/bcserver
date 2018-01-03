# Create image based on the official Node 6 image from the dockerhub
FROM node:6

# Set timezone to bangkok
ENV TZ=Asia/Bangkok
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/app

# Get all the code needed to run the app
COPY . /usr/src/app

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY ./server/package.json /usr/src/app/server

# Change directory to server
WORKDIR /usr/src/app/server

# Install dependecies
RUN npm install

# Copy dependency definitions
COPY ./views/package.json /usr/src/app/views

# Change directory to server
WORKDIR /usr/src/app/views

# Install dependecies
RUN npm install

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app

# Create a directory where our app will be placed
RUN ls -l

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app/server

# Create a directory where our app will be placed
RUN ls -l

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app/views

# Create a directory where our app will be placed
RUN ls -l

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app

# Expose the port the app runs in
EXPOSE 3000

# Serve the app
CMD ["node", "server.js"]