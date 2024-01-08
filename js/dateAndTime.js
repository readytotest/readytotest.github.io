//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
function timeAndDateRealTime() {
const getTimeDate = new Date();
const dateTimePacific = getTimeDate.toLocaleString("en-US", {
timeZone: "America/Los_Angeles"
});
document.getElementById('#current-time').textContent = dateTimePacific;
}
/*https://developer.mozilla.org/en-US/docs/Web/API/setInterval
Calling the function directly first, otherwise there is a one second delay initially before date and time appears on screen*/
timeAndDateRealTime();
setInterval(timeAndDateRealTime, 1000);