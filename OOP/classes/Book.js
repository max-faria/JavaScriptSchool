class Book {
  constructor(title) {
    this.title = title;
    this.published = false;
  }

  pubish() {
    this.published = true;
  }
}

const eragon = new Book("Eragon");
eragon.pubish();
console.log(eragon);
