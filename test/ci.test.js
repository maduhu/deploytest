var test = require('tape')
const deploytest = require('../src/hello.js')

test('Hello is returned', (assert) => {
  var hello = deploytest.sayHello()
  assert.equal(hello, 'Hello World', 'hello')
  assert.end()
})
