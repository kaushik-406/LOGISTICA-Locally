// // The key is the interaction ID.
// let = eventLatencies = {};

// const observer = new PerformanceObserver((list) => {
//   list.getEntries().forEach((entry) => {
//     if (entry.interactionId > 0) {
//       const interactionId = entry.interactionId;
//       if (!eventLatencies.has(interactionId)) {
//         eventLatencies[interactionId] = [];
//       }
//        eventLatencies[interactionId].push(entry.duration);
// }});
// });

// observer.observe({type: "event", buffered: true});

// // Log events with maximum event duration for a user interaction
// Object.entries(eventLatencies).forEach((ele) => {
//     // console.log(Math.max(...v));
//     console.log(ele)
// });


const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    // Full duration
    const duration = entry.duration;

    // Input delay (before processing event)
    const delay = entry.processingStart - entry.startTime;

    // Synchronous event processing time
    // (between start and end dispatch)
    const eventHandlerTime = entry.processingEnd - entry.processingStart;
    console.log(`Total duration: ${duration}`);
    console.log(`Event delay: ${delay}`);
    console.log(`Event handler duration: ${eventHandlerTime}`);
  });
});

// Register the observer for events
observer.observe({ type: "event", buffered: true });
