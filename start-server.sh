#!/bin/bash

#-------
# INSTRUCTIONS
# Make sure you are in the root directory of the repo
# To make the script executable, run:
# chmod +x start-server.sh
# You only need to run the above command the very first time
# Then to run the script just type in ./start-server.sh from the
# root of this repo in the VS Code terminal
# Leave the terminal open while the server is running
# Press CTRL+C to stop the server
#-------

# Start the Node server in the background and store its process ID (PID)
node server.js &
NODE_PID=$!

# Function to handle termination and clean up
cleanup() {
  echo "Stopping Node server..."
  kill $NODE_PID
  exit 1
}

# Trap SIGINT (Ctrl+C) and call the cleanup function
trap cleanup SIGINT

# Print the initial message
echo "The server is starting... Please wait."

# Sleep to allow the server to start (adjust as needed)
sleep 10

# Check if the server is running on port 3000
if ! lsof -i:3000 | grep -q LISTEN; then
  echo "Node server failed to start."
  cleanup
fi

# Keep the script running in the background
# This prevents the script from terminating prematurely
while true; do
  sleep 10
done

