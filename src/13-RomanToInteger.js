const romanToInt = str => {
   const map = new Map()
   const symbols = ["I", "V", "X", "L", "C", "D", "M"]

   let value = 1
   for(let i = 0; i < symbols.length; i++) {
      map.set(symbols[i], value)
      i % 2 === 0 ? value *= 5 : value *= 2
   }

   let maxValue = 0
   let result = 0

   for(let i = str.length - 1; i >= 0; i--) {
      const symbol = map.get(str[i])

      if (symbol >= maxValue) {
         maxValue = symbol
         result += symbol
      } else if (symbol < maxValue) {
         result -= symbol
      }
   }

   return result
}

const s1 = "XVVV"
const s2 = "LVIII"
const s3 = "XIVII"

console.log(romanToInt(s1))
console.log(romanToInt(s2))
console.log(romanToInt(s3))