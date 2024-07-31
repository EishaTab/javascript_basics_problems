const binarySearch = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2) 
        if (arr[mid] === target) {
            return mid;
        }
        else if (arr[mid] < target) {
            start = mid + 1
        }
        else {
            end = mid - 1
        }

    }
    return -1
}

const searchItem = () => {
    const target = 2;
    const arr = [1,2,4,5,6]
    let index = binarySearch(arr, target)
    if (index !== -1) {
        console.log(target, " found at index " + index)
    }
    else {
        console.log("No matching item found")
    }
    return;
}
searchItem()