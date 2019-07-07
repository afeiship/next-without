/*!
 * name: next-without
 * url: https://github.com/afeiship/next-without
 * version: 1.0.0
 * date: 2019-07-07T13:11:47.709Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.without = function(inArray) {
    var result = [];
    var arg1 = arguments[1];
    var args_ = Array.isArray(arg1) ? arg1 : nx.slice(arguments, 1);
    nx.forEach(inArray, function(value) {
      if (args_.indexOf(value) === -1) {
        result.push(value);
      }
    });
    return result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.without;
  }
})();

//# sourceMappingURL=next-without.js.map
