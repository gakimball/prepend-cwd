/* eslint-env mocha */

'use strict';

const path = require('path');
const expect = require('chai').expect;
const cwd = require('.');

describe('cwd()', () => {
  const expected = path.join(process.cwd(), 'cat.png');

  it('prepends the CWD to a relative path', () => {
    expect(cwd('cat.png')).to.equal(expected);
  });

  it('keeps an absolute path the same', () => {
    expect(cwd(expected)).to.equal(expected);
  });
});
