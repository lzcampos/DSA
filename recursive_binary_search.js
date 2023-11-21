// Note: recursive binary search. This would only work in a sorted array.

let recursiveFunction = function (arr, target, start, end) {
      
    // Base Condition
    if (start > end) return false;
  
    // Find the middle index
    let mid = Math.floor((start + end)/2);
  
    // Compare mid with given key x
    if (arr[mid] === target) {
        // for debug purpose:
        console.log("target found on index: " + mid)
        return true
    };
         
    // If element at mid is greater than target,
    // search in the left half of mid
    if(arr[mid] > target) 
        return recursiveFunction(arr, target, start, mid-1);
 
    // If element at mid is smaller than target,
    // search in the right half of mid
    return recursiveFunction(arr, target, mid+1, end);
}
  
// Driver code
let arr = [1, 3, 5, 7, 8, 9];
let x = 5;
  
if (recursiveFunction(arr, x, 0, arr.length-1)){
    console.log("Element found!");
} else console.log("Element not found!");
  
x = 6;
  
if (recursiveFunction(arr, x, 0, arr.length-1))
    document.write("Element found!<br>");
else document.write("Element not found!<br>");