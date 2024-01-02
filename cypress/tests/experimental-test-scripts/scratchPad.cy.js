//This is an experimental spec file for practicing and testing things out

//Time Date Stamper
  const easternTimeDateWithUtcOffset = function() {
  const dayjs = require('dayjs')
  const utc = require('dayjs/plugin/utc')
  const timezone = require('dayjs/plugin/timezone') // dependent on utc plugin
  //dayjs.tz.setDefault('America/New_York')
  dayjs.extend(utc)
  dayjs.extend(timezone)
  return dayjs().tz('America/New_York').format('YYYY-MM-DD'+'THH:mm:ssZ');
}
/*Need to convert to a string or Cypress errors trying to type the date
This will print out the current date, military time, UTC offset and text that says Eastern
Example: 2024-01-01T23:14:13-05:00 (Eastern)*/
const timeDateStamp = String(easternTimeDateWithUtcOffset()+' (Eastern)');


describe('Experimental Tests Here', () => {

        
   it('Testing the time stamper', () => {
        cy.visit('https://google.com')    
        cy.get('#APjFqb').type(timeDateStamp)
       
    
    })
  

  })