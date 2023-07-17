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
//   });
// });

// observer.observe({type: "event", buffered: true});

// // Log events with maximum event duration for a user interaction
// Object.entries(eventLatencies).forEach(([k, v]) => {
//     console.log(Math.max(...v));
// });


let eventLatencies = {};

const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.interactionId > 0) {
      const interactionId = entry.interactionId;
      if (!eventLatencies.hasOwnProperty(interactionId)) {
        eventLatencies[interactionId] = [];
      }
      eventLatencies[interactionId].push(entry.duration);
    }
  });
});

observer.observe({ type: "first-input", buffered: true });

setTimeout(() => {
  Object.entries(eventLatencies).forEach(([k, v]) => {
    console.log(Math.max.apply(null, v));
  });
}, 5000); // Wait for 5 seconds to allow time for events to be recorded

