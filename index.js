function findSum(arr, value) {
    // Check each pair of numbers in the array
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            // If the pair adds up to the target value, return the pair
            if (arr[i] + arr[j] === value) {
                return [arr[i], arr[j]];
            }
        }
    }
  
    // If no pair is found, return false
    return false;
  }
  
  // Sample Input
  const arr = [1, 21, 3, 14, 5, 60, 7, 6];
  const value = 81;
  
  // Sample Output
  const result = findSum(arr, value);
  console.log(result);
  