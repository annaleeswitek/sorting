function bubbleSort(array) {
  for(let i = 0; i < array.length -1; i++) {
    console.log(array)
    for(let j = i+1; j < array.length; j++ ) {
      if (array[i] > array[j]) {
        console.log(array[j])
        let temp = array[i];

        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}
