const Author = require("./Author");

const max = new Author("Max Faria");

const post = max.writePost("Post Test", "Learn programming is good!");

post.addcomment("Isaac Pontes", "Muito boom!");
post.addcomment("Lucas", "Achei interessante");

console.log(max);
console.log(post);
