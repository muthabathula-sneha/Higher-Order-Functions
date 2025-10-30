const numbers = [2, 5, 7, 10, 12];
const doubled = numbers.map(num => num * 2)
const greaterThanten = doubled.filter(num => num > 10)
const Total = greaterThanten.reduce((accumulator, current) => accumulator + current, 0)
console.log(Total);
