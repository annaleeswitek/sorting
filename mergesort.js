function mergeSort(array, index = 0, length = array.length) {

  if(length > 1) {
    const pivot = index + Math.floor(length/2);

    mergeSort(array, index, pivot - index);
    mergeSort(array, pivot, index + length - pivot);

    let newArr = [];

    let left = index;
    let right = pivot;

    while (left < pivot || right < index + length) {
      let useLeft = false;
      // which is lower?

      if(left < pivot && !(right < index + length)){
        useLeft = true;
      } else if (left < pivot && right < index + length) {
        if (array[left] < array[right]) {
          useLeft = true;
        }
      }

      if(useLeft){
        newArr.push(array[left]);
        left++;
      } else {
        newArr.push(array[right]);
        right++;
      }
    }

    for (var i = 0; i < newArr.length; i++) {
      array[index + i] = newArr[i];
    }
  }

  return array;

}
