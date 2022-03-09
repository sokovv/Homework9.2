export default class ArrayBufferConverter {
  load(buffer) {
    if (buffer instanceof ArrayBuffer) {
      this.buffer = buffer;
    }
  }

  toString() {
    return String.fromCharCode.apply(null, new Uint16Array(this.buffer));
  }
}