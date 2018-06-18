function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!

  let arr0 = arr2.slice(0, arr2.length);
  let arr3 = arr0.splice(n, 0, ...arr1);

  return arr3;

}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
