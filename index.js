// Helper to normalize collection to array
function getValues(collection) {
  return Array.isArray(collection) ? collection : Object.values(collection);
}

// Collection Functions

function myEach(collection, callback) {
  const values = getValues(collection);
  for (let i = 0; i < values.length; i++) {
    callback(values[i]);
  }
  return collection;
}

function myMap(collection, callback) {
  const values = getValues(collection);
  const result = [];
  for (let i = 0; i < values.length; i++) {
    result.push(callback(values[i]));
  }
  return result;
}

function myReduce(collection, callback, acc) {
  const values = getValues(collection);
  let startIndex = 0;

  if (acc === undefined) {
    acc = values[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < values.length; i++) {
    acc = callback(acc, values[i], collection);
  }

  return acc;
}

function myFind(collection, predicate) {
  const values = getValues(collection);
  for (let i = 0; i < values.length; i++) {
    if (predicate(values[i])) {
      return values[i];
    }
  }
  return undefined;
}

function myFilter(collection, predicate) {
  const values = getValues(collection);
  const result = [];
  for (let i = 0; i < values.length; i++) {
    if (predicate(values[i])) {
      result.push(values[i]);
    }
  }
  return result;
}

function mySize(collection) {
  const values = getValues(collection);
  return values.length;
}

// Array Functions

function myFirst(array, n) {
  if (!Array.isArray(array)) return undefined;
  return n === undefined ? array[0] : array.slice(0, n);
}

function myLast(array, n) {
  if (!Array.isArray(array)) return undefined;
  return n === undefined ? array[array.length - 1] : array.slice(-n);
}

// Object Functions

function myKeys(object) {
  const keys = [];
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      keys.push(key);
    }
  }
  return keys;
}

function myValues(object) {
  const values = [];
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      values.push(object[key]);
    }
  }
  return values;
}