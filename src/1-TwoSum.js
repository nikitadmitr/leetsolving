// Simple Way - O(n^2)
const twoSumS = (arr, target) => {
   for(let i = 0; i < arr.length; i++) {
      for(let k = i + 1; k < arr.length; k++) {
         if((arr[i] + arr[k]) === target) {
            return [i, k]
         }
      }
   }
}

// Hard Way - O(n)
const twoSumH = (arr, target) => {
   const map = new Map()
   for(let i = 0; i < arr.length; i++) {
      const diff = target - arr[i]
      if(map.has(diff)) {
         return [map.get(diff), i]
      }
      map.set(arr[i], i)
   }
   return []
}

const arr = [1, 3, 5]
console.log(twoSumS(arr, 6))