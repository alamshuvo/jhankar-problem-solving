//**remove duplicate element  */

function removeDuplicate(element) {
    let noRepeateElement=[];
    for (const char of element) {
        if (noRepeateElement.includes(char)===false) {
            noRepeateElement.push(char)
        }
       
    }
    return noRepeateElement;
}
console.log(removeDuplicate([5,5,10,10,10,20,30,30,50,40]));