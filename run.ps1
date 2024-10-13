# Navigate to the backend directory
cd "scouting\backend"

# Start the server.js in a new background process
Start-Process -NoNewWindow -FilePath "node.exe" -ArgumentList "server.js"

# Wait for a brief moment to ensure the server starts properly
Start-Sleep -Seconds 2

# Run dataViewer.js in the same process, or you can launch it in a new one if needed
Start-Process -NoNewWindow -FilePath "node.exe" -ArgumentList "dataVeiwer.js"
