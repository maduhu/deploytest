var test = require('tape')
const deploytest = require('..')

test('Hello is returned', (assert) => {
  var hello = deploytest.sayHello()  
  assert.equal(hello,"Hello World",'hello')
  assert.end()
})