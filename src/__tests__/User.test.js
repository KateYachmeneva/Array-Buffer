import ArrayBufferConverter from '../js/User';
import getBuffer from '../js/getBuffer';

test('Метод load подгружает буфер и сохраняет его в свойсво array', () => {
  const BuffArray = new ArrayBufferConverter();
  const buffer = getBuffer();
  BuffArray.load(buffer);
  expect(BuffArray.array).toBeInstanceOf(Uint16Array);
});
test('Метод toString раскодирует строку', () => {
  const testString = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const BuffArray = new ArrayBufferConverter();
  const buffer = getBuffer();
  BuffArray.load(buffer);
  expect(BuffArray.toString()).toBe(testString);
});
