/* eslint-disable */
const assert = require('assert'),
    flattenText = require('../');

describe('Flatten text', function() {

  it('test default options', function(done) {
    var text =
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

  it('test indent', function(done) {
    var text =
        'aaa\n' +
        '\tbbb\n' +
        'ccc\n' +
        '\t\tddd\n' +
        '\beee\r' +
        'fff';
    text = flattenText(text, {
      indent: 4
    });
    assert.equal(text, 'aaa\n' +
        '    bbb\n' +
        '    ccc\n' +
        '            ddd\n' +
        '        eee\n' +
        'fff');
    done();
  });

  it('test noWrap', function(done) {
    var text =
        'aaa\n' +
        '\tbbb\n' +
        'ccc\n' +
        '\t\tddd\n' +
        '\beee\r' +
        'fff';
    text = flattenText(text, {noWrap: true});
    assert.equal(text, 'aaa bbb ccc ddd eee fff');
    done();
  });

  it('test noWrap, no spacing after parentheses', function(done) {
    var text =
        'aaa (\n' +
        '\tbbb\n' +
        'ccc\n' +
        '\t\tddd\n' +
        '\beee\r' +
        ') fff';
    text = flattenText(text, {noWrap: true});
    assert.equal(text, 'aaa (bbb ccc ddd eee) fff');
    done();
  });

});