import { Storage } from './storage.service';

describe('Storage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('can set and get a value', () => {
    const storage = new Storage();
    storage.setItem('myKey', 'myValue');
    const result = storage.getItem('myKey');
    expect(result).toBe('myValue');
  });

  test('returns null for nonexistent key', () => {
    const storage = new Storage();
    const result = storage.getItem('nonexistentKey');
    expect(result).toBeNull();
  });

  test('can remove a value', () => {
    const storage = new Storage();
    storage.setItem('myKey', 'myValue');
    storage.removeItem('myKey');
    const result = storage.getItem('myKey');
    expect(result).toBeNull();
  });

  test('can clear all values', () => {
    const storage = new Storage();
    storage.setItem('key1', 'value1');
    storage.setItem('key2', 'value2');
    storage.clear();
    const result1 = storage.getItem('key1');
    const result2 = storage.getItem('key2');
    expect(result1).toBeNull();
    expect(result2).toBeNull();
  });
});
