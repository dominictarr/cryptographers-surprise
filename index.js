#! /usr/bin/env node

var crypto = require('crypto')


function xor (a, b) {
  var c = new Buffer(Math.max(a.length, b.length))
  for(var i = 0; i < c.length; i++)
    c[i] = a[i] ^ b[i]
  return c
}


function guess (guess, key) {

  if('string' === typeof guess) {
    var g = new Buffer(32)
    g.fill(0)
    g.write(guess, 'utf8')
  }

  return xor(g, crypto.createHash('sha256').update(key).digest())

}

function reveal (cipherguess, key) {

  var g = xor(cipherguess, crypto.createHash('sha256').update(key).digest())

  return g

}

if(!module.parent) {
  var cmd = process.argv[2]
  var plainguess = process.argv[3]
  if(cmd === 'guess') {
    var key = crypto.randomBytes(32)
    console.log('# the guess (publish this)')
    console.log(guess(plainguess, key).toString('hex'))
    console.log('# the key (keep safe to reveal later!)')
    console.log(key.toString('hex'))
  }
  else if (cmd === 'reveal') {
    var cipherguess = new Buffer(process.argv[3], 'hex')
    var key = new Buffer(process.argv[4], 'hex')
    console.log(reveal(cipherguess, key).toString().trim())
  }
  else {
    var log = console.log
    log('Usage:')
    log('  output the cipherguess and the key')
    log('cryptographers-surprise guess plainguess')
    log()
    log('cryptographers-surprise reveal cipherguess key')
    log()
  }
}
