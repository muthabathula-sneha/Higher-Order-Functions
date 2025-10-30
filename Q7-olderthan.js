const people = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 28 },
  { name: "David", age: 18 }
];
const olderThan25 = people.filter(num => num.age>25).map(num =>num.name)
console.log(olderThan25)

