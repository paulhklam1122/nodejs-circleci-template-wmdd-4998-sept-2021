var request = require('request'),
  assert = require('assert'),
  helloWorld = require('../app.js'),
  base_url = 'http://localhost:3000/'

describe('Welcome to the CircleCI Demo!', function () {
  // describe('GET /', function () {
  //   it('returns status code 200', function (done) {
  //     request.get(base_url, function (error, response, body) {
  //       assert.strictEqual(200, response.statusCode)
  //       helloWorld.close()
  //       done()
  //     })
  //   })
  // })

  describe('welcomeMessage', function () {
    it('Validate Message', function () {
      var res = helloWorld.welcomeMessage()
      var message = 'Welcome to the CircleCI Demo!'
      assert.equal(res, message)
    })
  })
})
