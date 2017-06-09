/* eslint-disable */
const assert = require('assert'),
    flattenText = require('../');

describe('Flatten text', function() {

  it('text1', function(done) {
    let text =
        'aaa\n' +
        '\tbbb\n' +
        'ccc\n' +
        '\t\tddd\n' +
        '\beee\r' +
        'fff';
    text = flattenText(text);
    assert.equal(text, 'aaa\n' +
        '  bbb\n' +
        '  ccc\n' +
        '      ddd\n' +
        '    eee\n' +
        'fff');
    done();
  });

});