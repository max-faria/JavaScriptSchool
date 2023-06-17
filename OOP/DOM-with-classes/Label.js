import { Component } from "./Componet.js";

export class Label extends Component {
  constructor(text, parent, options) {
    super("label", parent, Object.assign({}, options, { textContent: text }));
    //object target emputy will receive all the parameters that comer after
  }
}
