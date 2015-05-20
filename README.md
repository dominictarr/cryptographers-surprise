# cryptographers-surprise

A cryptoenthusiast can use this to securely guess their birthday surprise without ruining the anticipation for the other party.

Bob is giving Alice a secret birthday surprise. He has revealed to Alice
that a surprise is coming - to create suspense.
Alice thinks she knows what it is, but she told Bob what she thought it
is the gift early, Bob may unintentionally confirm it
(ruining the anticipation) or change the surprise.
Alice _could_ place her guess inside an envelope, and give it to Bob,
(to be opened at the same time as the gift is presented)
However, Alice and Bob are currently on opposite sides of the planet
so a letter is not convenient. Also, they are both cryptography enthusiasts,
so they are only interested in actual envelopes in so far as they are
useful for explaining cryptosystems.

``` js
//Alice

var CryptographersSurprise = require('cryptographers-surprise')
var random = require('crypto').randomBytes

var key = random(32)
var cipherguess = CryptographersSurprise(plainguess, key)

// Alice can publish `guess`,
// but must keep `key` in a safe place.

```

Alice now cannot change her guess, but Bob cannot see what it is yet.

Later, bob gives her present to alice, and alice can reveal that she
had guessed correctly.

``` js

console.log(CryptographersSurprise.reveal(cipherguess, key))

```

## cli command

``` js
cryptographers-surprise guess $GUESS
# the guess (publish this)
3831d95f3fa28ebdc207ed1c7434d706fd41c0a95b7e2b431e9006f293f5393c
# the key (keep safe to reveal later!)
****************************************************************

# and then later...
cryptographers-surprise reveal \
  3831d95f3fa28ebdc207ed1c7434d706fd41c0a95b7e2b431e9006f293f5393c \
  $KEY

# ... to be revealed!
```

## License

MIT
