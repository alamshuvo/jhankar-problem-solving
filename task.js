// Challenge: Create a function which takes a phone number and then check if the number is valid Bangladeshi phone number or not. You can return boolean, an object or a string after validating the number.

function phoneNumberValidition(number) {
    const code='+88';
    const properNumber="+8801980640702";
    const normalNumber="01980640702";
    for (let i = 0; i <number.length; i++) {
        const element =number[i];
        // console.log(element);
        if (((code.includes(element))|| (number.length===normalNumber.length) ||(number.length<normalNumber.length)||(number.length>properNumber.length))) {
            if ((code.includes(element) &&(number.length===normalNumber.length) ||(number.length===properNumber.length)&&number.includes(properNumber))) {
                return ` congratulations your input ${number} mobile number is properly valid.`
            }
         
            else if((number.length===normalNumber.length)&& number.includes(normalNumber)){
                return `opps you missing ${code} code number but your ${number} is valid.`
            }
            else if((number.length<normalNumber.length)){
                return `oppps your provided ${number} is not a valid number.`
            }
            else if (number.length>properNumber.length) {
                return `opppps your provided mobile ${number} is invalid.`
            }
        }
        return `oppps you provided ${number} invalid mobile number please input valid mobile number.` 
    }
}
console.log(phoneNumberValidition("11101980640702"));