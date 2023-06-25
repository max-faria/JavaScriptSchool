module.exports = class Database {
  #storage = {
    authors: [],
    books: [],
    posters: [],
    orders: [],
    users: [],
  };

  find(key) {
    return this.#storage[key];
  }

  saveAuthor(author) {
    this.#storage.authors.push(author);
  }

  // BOOKS METHODS

  findBookByName(bookname) {
    return this.#storage.books.find((b) => b.name === bookname);
  }

  saveBook(book) {
    const bookExists = this.findBookByName(book.name);
    if (!bookExists) {
      this.#storage.books.push(book);
    }
  }

  addbooksToStock(bookname, quantity) {
    const book = this.findBookByName(bookname);
    book?.addToStock(quantity);
  }

  removeBooksFromStock(bookname, quantity) {
    const book = this.findBookByName(bookname);
    book?.removeFromStock(quantity);
  }

  //FOR POSTERS METHODS

  findPosterByName(postername) {
    return this.#storage.posters.find((p) => p.name === postername);
  }

  savePoster(poster) {
    const posterExists = this.findPosterByName(poster.name);
    if (!posterExists) {
      this.#storage.posters.push(poster);
    }
  }

  addPostersToStock(postername, quantity) {
    const poster = this.findPosterByName(postername);
    poster?.addToStock(quantity);
  }

  removePostersFromStock(postername, quantity) {
    const poster = this.findPosterByName(postername);
    poster?.removeFromStock(quantity);
  }

  // FOR USER

  saveUser(user) {
    const userExists = this.#storage.users.find((u) => u.email === user.email);
    if (!userExists) {
      this.#storage.users.push(user);
    }
  }

  //FOR ORDERS METHODS

  saveOrder(order) {
    this.#storage.orders.push(order);
  }

  showStorage() {
    console.table(this.#storage.authors);
    console.table(this.#storage.books);
    console.table(this.#storage.posters);
    console.table(this.#storage.users);
    console.table(this.#storage.orders.map((order) => order.data));
  }
};
