const Author = require('./Author')

const rick = new Author('Rick Riordan')

const post = rick.createPost('Percy Jackson e os Olimpianos', 'Livro')

post.addComments('Walker', 'Estou muito animado!')
post.addComments('Leah', 'Estou muitos ansiosa!')

console.log(rick)
console.log(post)
