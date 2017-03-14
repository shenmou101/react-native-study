function sumArray(array) {
  /// TODO 算法写这里
  if(array instanceof Array === false || array.length === 0){
    return 0;
  }
  var max = Math.max.apply(null,array);
  var min = Math.min.apply(null,array);
  var sum = 0;

  //算法1
  for(i in array){
    sum = sum + array[i];
  };
  sum = sum - max - min;

  //算法2
  // var minIndex = array.indexOf(min);
  // array.splice(minIndex,1);
  // var maxIndex = array.indexOf(max);
  // array.splice(maxIndex,1);
  // for(i in array){
  //   sum = sum + array[i];
  // };

  return sum;
}

module.exports = sumArray
