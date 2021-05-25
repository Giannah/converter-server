const arabicNums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
const romanNums = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']

function convert(input) {
  let value = Number(input) || 1
  let result = ''

  if (value < 1) {
    value = 1
  }

  for (let i = 0; i < arabicNums.length; i++) {
    while (value >= arabicNums[i]) {
      value -= arabicNums[i]
      result += romanNums[i]
    }

    if (value === 0) {
      break
    }
  }

  return result
}
module.exports = convert
