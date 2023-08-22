// main.js (your main script)
const worker = new Worker('worker.js');
// main.js
worker.onmessage = (event) => {
    const result = event.data;
    // Use the result from the worker
    console.log('Result from worker:', result);
  };
  
  // Send data to the worker
  worker.postMessage(5);
  