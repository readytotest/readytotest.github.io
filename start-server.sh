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
echo "The server is starting....please wait."
echo "After server has started you will see a message that confirms it's up."

# Define a timeout in seconds
TIMEOUT=30
elapsed=0
server_started=false

# Check if the server is running on port 3000
while [ $elapsed -lt $TIMEOUT ]; do
  if lsof -i:3000 | grep -q LISTEN; then
    server_started=true
    break
  fi
  sleep 1
  elapsed=$((elapsed + 1))
done

# Check if the server started successfully
if ! $server_started; then
  echo "Node server failed to start within $TIMEOUT seconds."
  cleanup
fi

# Wait for the Node server process to finish
wait $NODE_PID
