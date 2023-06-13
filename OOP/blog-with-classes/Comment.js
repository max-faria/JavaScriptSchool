class Comment {
  constructor(usraname, content) {
    this.usraname = usraname;
    this.content = content;
    this.createdAt = new Date();
  }
}

module.exports = Comment;
