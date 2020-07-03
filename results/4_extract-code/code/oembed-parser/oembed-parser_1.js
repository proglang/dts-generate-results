const {
  extract,
} = require('oembed-parser');

let url = 'https://www.youtube.com/watch?v=8jPQjjsBbIc';

// Promise style
extract(url).then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
});


// async/await style
const getArticle = async (link) => {
  try {
    let data = await extract(link);
    return data;
  } catch (err) {
    return err;
  }
}

console.log(getArticle(url));
