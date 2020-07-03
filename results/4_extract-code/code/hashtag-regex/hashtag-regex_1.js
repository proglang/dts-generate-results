const hashtagRegex = require('hashtag-regex');
// Note: because the regular expression has the global flag set, this module
// exports a function that returns the regex rather than exporting the regular
// expression itself, to make it impossible to (accidentally) mutate the
// original regular expression.

const text = `
#hashtag
#©
＃🤷🏿‍♀️ (\uFF03\u{1F937}\u{1F3FF}\u200D\u2640\uFE0F)
`;

const regex = hashtagRegex();
let match;
while (match = regex.exec(text)) {
  const hashtag = match[0];
  console.log(`Matched sequence ${ hashtag } — code points: ${ [...hashtag].length }`);
}
