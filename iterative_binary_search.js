// Note: iterative binary search. This would only work in a sorted array.

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Found the target, return the index
        } else if (arr[mid] < target) {
            left = mid + 1; // Target is in the right half
        } else {
            right = mid - 1; // Target is in the left half
        }
    }

    return -1; // Target not found
}

// Example usage
const arr = [1, 3, 5, 7, 9];
const target = 5;
const index = binarySearch(arr, target);

if (index !== -1) {
    console.log(`Target ${target} found at index ${index}`);
} else {
    console.log(`Target ${target} not found`);
}
