/*
    We only want the alert to appear once for the visitor
    because it will be too annoying if this pops up each time

    https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
    https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API

    Checks whether an item called 'alertDismissed' exists in localStorage. 
    If it does not exist, it displays an alert with a message and then sets
    the 'alertDismissed' item in localStorage to 'true'. This ensures that the
    alert is shown only once per user, even if they reload the page.
*/

if (!localStorage.getItem('alertDismissed')) {
window.alert("Tinker:\nTo make small changes or adjustments to something in order to improve it or to learn more about it.\n\nExample usage:\n- He enjoys tinkering with old cars to learn how they work.\n- She spent the afternoon tinkering in her workshop.");

// Set a flag in local storage to indicate the alert has been shown
localStorage.setItem('alertDismissed', 'true');
}