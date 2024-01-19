const addTwoPromises =  async (promise1, promise2) => {
   return await promise1 + await promise2
};

console.log(addTwoPromises(
   new Promise(resolve => setTimeout(() => resolve(2), 20)), 
   new Promise(resolve => setTimeout(() => resolve(5), 60))
))