var test = require('tape')
const sayHello = require('../src/hello').sayHello

test('Hello is returned', (assert) => {
  assert.equal(sayHello(), 'Hello World', 'hello')
  assert.end()
})
