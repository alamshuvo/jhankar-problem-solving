//** leapyear checking problems */
//**year will be a leapyear if year is divaisable by 4 */
//** simple normal logic 100% sotti na */
// function isLeapyear(leapyear) {
//   if (leapyear%4===0) {
//     return `this ${leapyear} year is leapyear`
//   }    
//   return `this ${leapyear} year is not leapyear`
// }
// console.log(isLeapyear(2052));
 //** 4 dyea bag korle reminder takhbe na but 100 dyea bag jai na */
 function isLeapyear(leapyear) {
      if (leapyear%4===0 && leapyear%100!==0 ) {
        return `this ${leapyear} year is leapyear.`;
      } 
      else if(leapyear%400===0){
        return `this ${leapyear} year is leapyear.`;
      }   
      return `this ${leapyear} year is not leapyear`
    }
    console.log(isLeapyear(2100));
    console.log(isLeapyear(2400));
    console.log(isLeapyear(1900));
    console.log(isLeapyear(2052));