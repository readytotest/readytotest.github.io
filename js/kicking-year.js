/* 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent

I made this script to stop me from having to update the year manually every time.
The copy on my homepage says, "It's Alive and Kicking in 2025," but I'll only need
to update that if I ever stop working on this project. It grabs the current year
and puts it into this custom HTML element <kicking-year>  on index.htm.
You can check the page source or inspect the element if you wanna see it in action.

I tossed in some MDN references so I remember how it works, and so anyone else poking
around can figure it out too.
*/

// Get the current date
const currentDate = new Date();

// Extract just the year
const currentYear = currentDate.getFullYear();

// Select the <kicking-year> custom element
const kickingYearElement = document.querySelector("kicking-year");

// Set the text content of the <kicking-year> element to the current year
kickingYearElement.textContent = currentYear;
