// worker.js (your worker script)
self.addEventListener('message', (event) => {
    const data = event.data;
    // Perform some background task with the data
    const result = data * 2;
    // Send the result back to the main thread
    self.postMessage(result);
  });
  