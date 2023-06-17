export class Component {
  #element = null;

  constructor(tag, parent, options) {
    //onptions (object) can be id, class, type...
    this.tag = tag;
    this.parent = parent;
    this.options = options;
    this.build();
  }

  getElement() {
    return this.#element;
  }

  build() {
    this.#element = document.createElement(this.tag);
    Object.assign(this.#element, this.options);
    return this; //the return of the instance makes possible to call others method together
  }

  render() {
    if (this.parent instanceof Component) {
      this.parent.getElement().append(this.#element);
    } else {
      document.querySelector(this.parent).append(this.#element);
    }
  }
}
