# cryptographers-surprise

A cryptoenthusiast can use this to securely guess their birthday surprise without ruining the anticipation for the other party.

Bob is giving Alice a secret birthday surprise.
He has revealed to Alice that a surprise is coming, for suspense.
Alice thinks she knows what it is, but if she revealed her guess
Bob may unintentionally confirm it (ruining the anticipation).
Alice _could_ place her guess inside an envelope, and give it to Bob,
(so that after the gift was received she could prove that she
had correctly guessed it).
However, Alice and Bob  are both cryptography enthusiasts,
only use envelopes as metaphore for explaining cryptosystems.
Alice would rather hide & proveher guess cryptographically.

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

Later, Bob gives his present to Alice, and Alice can reveal her guess,
(hopefully confirming that she guessed correctly).

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
