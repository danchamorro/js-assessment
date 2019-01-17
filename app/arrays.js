exports = typeof window === "undefined" ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    return arr.reduce(reducer);
  },

  remove: function(arr, item) {
    return arr.filter(element => {
      return element !== item;
    });
  },

  removeWithoutCopy: function(arr, item) {},

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    return arr.filter(i => i === item).length;
  },

  duplicates: function(arr) {
    let result = [];

    arr.forEach((element, index) => {
      // Find if there is a duplicate or not
      if (arr.indexOf(element, index + 1) > -1) {
        // Find if the element is already in the result array or not
        if (result.indexOf(element) === -1) {
          result.push(element);
        }
      }
    });

    return result;
  },

  square: function(arr) {
    squared = [];

    for (let i = 0, len = arr.length; i < len; i++) {
      squared.push(arr[i] * arr[i]);
    }

    return squared;
  },

  findAllOccurrences: function(arr, target) {
    return arr.filter(target => target);
  }
};
