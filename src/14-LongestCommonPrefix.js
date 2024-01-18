// More complex solution, but doesn't suitable for this problem
const longestCommonPrefixH = (strings) => {
   let output = ''
   let maxCount = 0

   for(let i = 0; i < strings.length; i++) {
      for(let k = i + 1; k < strings.length; k++) {
         for(let j = 0; j <= strings[i].length; j++) {
            if(strings[i].slice(0, j) === strings[k].slice(0, j)) {
               if(maxCount < j) {
                  maxCount = j
                  output = `${strings[i].slice(0, j)}`
               }
            }
         }
      }
   }
   return output
};

const longestCommonPrefixS = (strings) => {
   let output = ""
   strings.sort()
   const first = strings[0]
   const last = strings[strings.length - 1]
   for(let i = 0; i < Math.min(first.length, last.length); i++) {
      if(first[i] !== last[i]) {
         return output
      }
      output += first[i]
   }

   return output
}

const str1 = ["backes", "back", "backe", "back"]
const str2 = ["dog","racecar","car"]
const str3 = ["","",""]

console.log(longestCommonPrefixS(str1))
// console.log(longestCommonPrefix(str3))
// console.log(longestCommonPrefix(str2))