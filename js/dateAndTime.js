/*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
https://developer.mozilla.org/en-US/docs/Web/API/setInterval
Using slice so the ms is always at three digits
Using en-ZA format so it uses military time instead of adding a PM between the seconds and ms*/

function timeAndDateRealTime() {
const getTimeDate = new Date();
const mill = getTimeDate.getMilliseconds()
const mill3Places = `00${mill}`.slice(-3)
const dateTimePacific = `${getTimeDate.toLocaleString('en-ZA', {
timeZone: "America/Los_Angeles"})}.${mill3Places}`;
document.getElementById('#current-time').textContent = dateTimePacific;
}

//Call the function directly first so there isn't a slight delay in displaying the text

timeAndDateRealTime();
setInterval(timeAndDateRealTime,75);