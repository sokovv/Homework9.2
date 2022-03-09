import getBuffer from '../getBuffer';
import ArrayBufferConverter from '../ArrayBufferConverter';

const arrayBufferConverter = new ArrayBufferConverter();

test('Методы load и toString класса ArrayBufferConverter ', () => {

    arrayBufferConverter.load();

    expect(arrayBufferConverter.buffer).not.toBeDefined();

    arrayBufferConverter.load(getBuffer());

    const str = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

    expect(arrayBufferConverter.toString()).toBe(str);
});

