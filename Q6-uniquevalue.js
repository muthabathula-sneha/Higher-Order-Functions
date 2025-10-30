const values = [1, 2, 2, 3, 4, 4, 5]
const uniqueValues = values.filter((num, index) => {
  return values.indexOf(num) === index
})
console.log(uniqueValues)