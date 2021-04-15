export default class ArrayBufferConverter {
  constructor() {
    this.array = null;
  }

  load(data) {
    this.array = new Uint16Array(data);
  }

  toString() {
    return String.fromCharCode(...this.array);
  }
}
