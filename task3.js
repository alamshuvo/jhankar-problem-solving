//**calculate the average of odd number in an array */
function findAvgOddNumber(numbers) {
    let calc=[];
    let sum=0;
    for (const num of numbers) {
       if (num%2!==0) {
            sum+=num;
            calc.push(num);
       }      
    }
    const avg=sum/calc.length;
    return avg;
}
console.log(findAvgOddNumber([2,4,5,5,11]));