var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-without');

describe('next/without', function () {

  it('next.without -- arguments', function () {
    var arr1 = [1, 2, 1, 3];
    var rs1 = nx.without(arr1, 1, 2);

    assert.equal(rs1.length , 1);
    assert.deepEqual(rs1, [3]);
  });

  it('next.without -- array', function () {
    var arr1 = [1, 2, 1, 3];
    var rs1 = nx.without(arr1, [1, 2]);

    assert.equal(rs1.length , 1);
    assert.deepEqual(rs1, [3]);
  });

});
