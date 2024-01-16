const romanToInt = str => {
   const map = new Map()
   const symbols = ["I", "V", "X", "L", "C", "D", "M"]

   let value = 1

   for(let i = 0; i < symbols.length; i++) {
      map.set(symbols[i], value)
      i % 2 === 0 ? value *= 5 : value *= 2
   }

   let result = 0;

   for(let i = 0; i < str.length; i++) {
      const current = map.get(str[i])
      const next = map.get(str[i + 1])

      current <= next ? result -= current : result += current
   }

   return result
}

const s1 = "XIIIV"
const s2 = "LVIII"
const s3 = "XIVII"

console.log(romanToInt(s1))
// console.log(romanToInt(s2))
// console.log(romanToInt(s1))