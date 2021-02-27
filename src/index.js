
exports.min = function min (array) {
  if(Array.isArray(array) && array.length > 0){
    return Math.min(...array);
  } else {return 0}
}

exports.max = function max (array) {
  if(Array.isArray(array) && array.length > 0){
    return Math.max(...array);
  } else {return 0}
}

exports.avg = function avg (array) {
  if(Array.isArray(array) && array.length > 0){
    let sum = array.reduce((p, i) => {return p + i})
    return sum / array.length;
  } else {return 0}
}
