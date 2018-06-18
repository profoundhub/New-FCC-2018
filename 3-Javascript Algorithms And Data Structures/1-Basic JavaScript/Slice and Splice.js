function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!

  let arr0 = arr2.slice(0, arr2.length);
  let arr3 = arr0.splice(n, 0, ...arr1);

  return arr3;

}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// running test
/*
  frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
  frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].
  frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
  All elements from the first array should be added to the second array in their original order.
*/
// tests completed
