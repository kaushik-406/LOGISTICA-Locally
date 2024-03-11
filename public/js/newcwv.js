// The Performance Observer for LCP
const lcpObserver = new PerformanceObserver(list => {
    const entries = list.getEntries();
    const lcp = entries[entries.length - 1];
  
    entries.forEach(entry => {
      // Log the results in the console
      console.log(
        `The LCP is:`,
        lcp.element,
        `The time to render was ${entry.startTime} milliseconds.`,
      );
    });
  });
  
  // Call the LCP Observer
  lcpObserver.observe({ type: "largest-contentful-paint", buffered: true });
  
  // The Performance Observer for paint
  const paintObserver = new PerformanceObserver(list => {
    const entries = list.getEntries();
    entries.forEach(entry => {    
      // Log the results in the console.
      console.log(
        `The time to ${entry.name} took ${entry.startTime} milliseconds.`,
      );
    });
  });
  
  // Call the paint Observer.
  paintObserver.observe({ type: "paint", buffered: true });
  
  // The Performance Observer for layout shift
  const layoutShiftObserver = new PerformanceObserver((list) => {
    let cumulativeLayoutShift = 0;
    list.getEntries().forEach((entry) => {
      // Don't count if the layout shift is a result of user interaction.
      if (!entry.hadRecentInput) {
        cumulativeLayoutShift += entry.value;
      }
      console.log({ entry, cumulativeLayoutShift });
    });
  });
  
  // Call the layout shift Observer.
  layoutShiftObserver.observe({ type: "layout-shift", buffered: true });

  
  // Use a different variable name for the event observer
  const eventObserver = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      // Alias for the total duration.
      const duration = entry.duration;
      // Calculate the time before processing starts.
      const delay = entry.processingStart - entry.startTime;
      // Calculate the time to process the interaction.
      const lag = entry.processingStart - entry.startTime;
  
      // Don't count interactions that the user can cancel.
      if (!entry.cancelable) {
        console.log(`INP Duration: ${duration}`);
        console.log(`INP Delay: ${delay}`);
        console.log(`Event handler duration: ${lag}`);
      }
    });
  });
  
  // Call the Event Observer.
  eventObserver.observe({ type: "event", buffered: true });

  // Use a different variable name for the long animation frame observer
  const longAnimationFrameObserver = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      if (entry.duration > 50) {
        // Log the overall duration of the long frame.
        console.log(`Frame took ${entry.duration} ms`)
        console.log(`Contributing scripts:`)
        // Log information on each script in a table.
        entry.scripts.forEach(script => {
          console.table({
            // URL of the script where the processing starts
            sourceURL: script.sourceURL,
            // Total time spent on this sub-task
            duration: script.duration,
            // Name of the handler function
            functionName: script.sourceFunctionName,
            // Why was the handler function called? For example, 
            // a user interaction or a fetch response arriving.
            invoker: script.invoker
          })
        })
      }
    });
  });
  
  // Call the long animation frame Observer.
  longAnimationFrameObserver.observe({ type: "long-animation-frame", buffered: true }); 
