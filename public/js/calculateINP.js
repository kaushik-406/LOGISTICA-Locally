function calculatePerformanceMetrics() {
    const longTaskThreshold = 50; // Define a threshold for long tasks in milliseconds

    let fcpTime = 0;
    let lcpTime = 0;
    let fidTime = 0;
    let clsScore = 0;
    let ttiTime = 0;

    // Calculate FCP
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcpEntry = entries.find(entry => entry.entryType === 'paint' && entry.name === 'first-contentful-paint');
      fcpTime = fcpEntry ? fcpEntry.startTime : 0;
      console.log('First Contentful Paint (FCP):', fcpTime);
    });

    fcpObserver.observe({ entryTypes: ['paint'] });

    // Calculate LCP
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lcpEntry = entries.find(entry => entry.entryType === 'largest-contentful-paint');
      lcpTime = lcpEntry ? lcpEntry.renderTime || lcpEntry.loadTime : 0;
      console.log('Largest Contentful Paint (LCP):', lcpTime);
    });

    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // Calculate FID
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fidEntry = entries.find(entry => entry.entryType === 'first-input' && entry.processingStart > 0);
      fidTime = fidEntry ? fidEntry.processingStart - fidEntry.startTime : 0;
      console.log('First Input Delay (FID):', fidTime);
    });

    fidObserver.observe({ type: 'first-input', buffered: true });

    // Calculate CLS
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        if (entry.entryType === 'layout-shift') {
          clsScore += entry.value;
        }
      });
      console.log('Cumulative Layout Shift (CLS):', clsScore);
    });

    clsObserver.observe({ type: 'layout-shift', buffered: true });

    // Calculate TTI
    const ttiObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        if (entry.entryType === 'longtask' && entry.duration > longTaskThreshold) {
          // If a long task exceeds the threshold, it means TTI hasn't been reached
          return;
        }
      });

      // If no long tasks above the threshold, TTI has been reached
      ttiTime = performance.now();
      console.log('Time to Interactive (TTI):', ttiTime);

      // Calculate INP
      const inpTime = ttiTime - fcpTime;
      console.log('Interaction to Next Paint (INP):', inpTime);

      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
      ttiObserver.disconnect();
    });

    ttiObserver.observe({ entryTypes: ['longtask'] });
  }

  // Call the calculatePerformanceMetrics() function when the page has finished loading
  window.addEventListener('DOMContentLoaded', calculatePerformanceMetrics);

