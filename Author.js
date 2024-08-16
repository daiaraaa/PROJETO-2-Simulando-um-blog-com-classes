class Author {
    constructor(name) {
        this.name = name
        this.posts = []
    }

    createPost(title, content) {
        const publi= new Post(title, content, this)
        this.posts.push(publi)
        return publi
    }
}

module.exports = Author
