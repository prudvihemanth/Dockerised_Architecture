const request = require('request');
const { assert } = require('chai');

const baseurl = 'http://localhost:8080/';

describe('sample', () => {
  it('array checking', (done) => {
    assert.equal([1, 2, 3].indexOf(2), 1);
    done();
  });
});

describe('baseRoute', () => {
  it('returns status code 200', (done) => {
    request.get(baseurl, (error, response) => {
      assert.equal(200, response.statusCode);
      assert.equal('Hello World\n', response.body);
      done();
    });
  });
});
