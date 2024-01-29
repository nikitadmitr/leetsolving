const buildArray = (nums) => {
    const result = []
    nums.forEach((item, i) => result[i] = nums[item])
    return result
};
