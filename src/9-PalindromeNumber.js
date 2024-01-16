// Simple Way - O(n)
const isPalindromeS = num => {
   const str = num.toString()
   const reversed = str.split("").reverse().join("")
   return str === reversed
}

// Hard Way - O(n)
function isPalindromeH(n) {
   let x = n;
   let y = 0;

   while (x > 0) {
      y = (y * 10) + (x % 10)
      x = Math.floor(x / 10);
   }

   return y === n;
}

const x1 = 121
const x2 = -121
const x3 = 10

console.log(isPalindromeH(x1))
// console.log(isPalindromeH(x2))
// console.log(isPalindromeH(x3))