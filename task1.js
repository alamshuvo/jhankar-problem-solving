//** unit convert inch to feet ,miles to kilomiter  */
// function inchToFeeet(inch) {
//     const feet=inch/12;
//     return ` your height is ${inch} and this is called ${feet}`;
// }
// const shuvoHeight=inchToFeeet(80);
// console.log(shuvoHeight);



// function inchToFeeet(inch) {
//     const fractinch=inch/12;
//     const feetNumber=parseInt(fractinch);
//     const inchRemaining=inch%12;
//     const result=`${feetNumber} feet ${inchRemaining} inch.`;
//     return result;
// }
// console.log(inchToFeeet(74));




//**miles to kilomitter 1Miles=1.60934ki */
function milesToKillo(miles) {
    const kilo =miles*1.60934;
    const kilonumber=parseInt(kilo);
    return kilonumber;
}
console.log(milesToKillo(80));