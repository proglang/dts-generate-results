tableau
=======

Construct rows and columns from an alphabet with which one can encrypt/decrypt information from

## install

**npm:**

```sh
$ npm install tableau
```

**component:**

```sh
$ component install jwerle/tableau
```

## usage

```js
var tableau = require('tableau')
var alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
var mat = tableau(alpha);
var out = mat.reduce(function (p, c) {
  return p + c.join(' | ') + '\n';
}, "");

console.log(out);
```

***...yields:***

```
a | b | c | d | e | f | g | h | i | j | k | l | m | n | o | p | q | r | s | t | u | v | w | x | y | z
b | c | d | e | f | g | h | i | j | k | l | m | n | o | p | q | r | s | t | u | v | w | x | y | z | a
c | d | e | f | g | h | i | j | k | l | m | n | o | p | q | r | s | t | u | v | w | x | y | z | a | b
d | e | f | g | h | i | j | k | l | m | n | o | p | q | r | s | t | u | v | w | x | y | z | a | b | c
e | f | g | h | i | j | k | l | m | n | o | p | q | r | s | t | u | v | w | x | y | z | a | b | c | d
f | g | h | i | j | k | l | m | n | o | p | q | r | s | t | u | v | w | x | y | z | a | b | c | d | e
g | h | i | j | k | l | m | n | o | p | q | r | s | t | u | v | w | x | y | z | a | b | c | d | e | f
h | i | j | k | l | m | n | o | p | q | r | s | t | u | v | w | x | y | z | a | b | c | d | e | f | g
i | j | k | l | m | n | o | p | q | r | s | t | u | v | w | x | y | z | a | b | c | d | e | f | g | h
j | k | l | m | n | o | p | q | r | s | t | u | v | w | x | y | z | a | b | c | d | e | f | g | h | i
k | l | m | n | o | p | q | r | s | t | u | v | w | x | y | z | a | b | c | d | e | f | g | h | i | j
l | m | n | o | p | q | r | s | t | u | v | w | x | y | z | a | b | c | d | e | f | g | h | i | j | k
m | n | o | p | q | r | s | t | u | v | w | x | y | z | a | b | c | d | e | f | g | h | i | j | k | l
n | o | p | q | r | s | t | u | v | w | x | y | z | a | b | c | d | e | f | g | h | i | j | k | l | m
o | p | q | r | s | t | u | v | w | x | y | z | a | b | c | d | e | f | g | h | i | j | k | l | m | n
p | q | r | s | t | u | v | w | x | y | z | a | b | c | d | e | f | g | h | i | j | k | l | m | n | o
q | r | s | t | u | v | w | x | y | z | a | b | c | d | e | f | g | h | i | j | k | l | m | n | o | p
r | s | t | u | v | w | x | y | z | a | b | c | d | e | f | g | h | i | j | k | l | m | n | o | p | q
s | t | u | v | w | x | y | z | a | b | c | d | e | f | g | h | i | j | k | l | m | n | o | p | q | r
t | u | v | w | x | y | z | a | b | c | d | e | f | g | h | i | j | k | l | m | n | o | p | q | r | s
u | v | w | x | y | z | a | b | c | d | e | f | g | h | i | j | k | l | m | n | o | p | q | r | s | t
v | w | x | y | z | a | b | c | d | e | f | g | h | i | j | k | l | m | n | o | p | q | r | s | t | u
w | x | y | z | a | b | c | d | e | f | g | h | i | j | k | l | m | n | o | p | q | r | s | t | u | v
x | y | z | a | b | c | d | e | f | g | h | i | j | k | l | m | n | o | p | q | r | s | t | u | v | w
y | z | a | b | c | d | e | f | g | h | i | j | k | l | m | n | o | p | q | r | s | t | u | v | w | x
z | a | b | c | d | e | f | g | h | i | j | k | l | m | n | o | p | q | r | s | t | u | v | w | x | y
```

A command line utility is also available. It can be used as such:

```sh
$ tableau
a | b | c | d | e | f | g | h | i | j | k | l | m | n | o | p | q | r | s | t | u | v | w | x | y | z |
b | c | d | e | f | g | h | i | j | k | l | m | n | o | p | q | r | s | t | u | v | w | x | y | z | a |

...

```

You can set the algorithm with the `--algo=expr` option:

```sh
$ tableau --algo='((l - x) + y) % l'
a | z | y | x | w | v | u | t | s | r | q | p | o | n | m | l | k | j | i | h | g | f | e | d | c | b |
b | a | z | y | x | w | v | u | t | s | r | q | p | o | n | m | l | k | j | i | h | g | f | e | d | c |

...

```

You can format the output with the `--format=format` option:

```sh
$ tableau --format='[ %s ]'
[ a ][ b ][ c ][ d ][ e ][ f ][ g ][ h ][ i ][ j ][ k ][ l ][ m ][ n ][ o ][ p ][ q ][ r ][ s ][ t ][ u ][ v ][ w ][ x ][ y ][ z ]
[ b ][ c ][ d ][ e ][ f ][ g ][ h ][ i ][ j ][ k ][ l ][ m ][ n ][ o ][ p ][ q ][ r ][ s ][ t ][ u ][ v ][ w ][ x ][ y ][ z ][ a ]

...

```

The alphabet can be overrided with `--alpha=alpha` option:


```sh
$ tableau --alpha=123
1 | 2 | 3 |
2 | 3 | 1 |
3 | 1 | 2 |
```

## api

`table(alpha[,algo])`

* `alpha` - Alphabet array of characters to construct a table with
* `algo(x, y, l)` - Function for determining the character in `alpha` for each
  cell in column and row where: `x` is current column in row, `y` is
current row, and `l` is row length. The default is `return (x + y) % l;`
which builds a [Vigenère Cipher tableau](http://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher).

## license

MIT
