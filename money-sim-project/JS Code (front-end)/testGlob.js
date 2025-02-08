console.log("server running!");
console.log(userBal);

const http = require("http");

// Function to send `userBal` to the Cloudflare Worker
function sendUserBalToWorker(userBal) {
    const data = JSON.stringify({ userBal: userBal });

    const options = {
        hostname: 'https://my-cloudflare-worker.schoolproj.workers.dev', // Replace with your Worker URL
        port: 80,  // Use 80 for HTTP or 443 for HTTPS
        path: '/', // The path you want to send the request to (if needed)
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length
        }
    };

    // Send the request to Cloudflare Worker
    const req = http.request(options, (res) => {
        let responseData = '';

        res.on('data', (chunk) => {
            responseData += chunk;
        });

        res.on('end', () => {
            console.log("Response from Worker: ", responseData); // Handle the response
            console.log("Run completed!"); // Console a message after Worker responds
        });
    });

    req.on('error', (error) => {
        console.error("Error sending request to Worker:", error);
    });

    req.write(data); // Send the data (userBal)
    req.end(); // End the request
}

// Example usage with userBal
const userBal = 10000; // Example balance
sendUserBalToWorker(userBal);