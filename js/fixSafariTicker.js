// -----------------------------------------------------
// The below script is a workaround since Safari has issues with scrolling text in CSS
// Safari mishandles the CSS animations in the weather ticker
// after page reloads due to caching issues. The animation can slow down or become inconsistent 
// until the cache is cleared. This script works around that by forcing the browser to
// recalculate the animation on page load.
// -----------------------------------------------------

window.addEventListener('load', function() {
    const weatherAlert = document.querySelector('.weather-alert');
    
    // Force a reflow by reading the offsetHeight
    weatherAlert.style.animation = 'none'; // Temporarily stop the animation
    weatherAlert.offsetHeight; // Trigger a reflow
    weatherAlert.style.animation = ''; // Restart the animation
  });
