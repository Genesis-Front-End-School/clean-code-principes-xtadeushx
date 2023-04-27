class Storage {
  private _storage: globalThis.Storage;

  constructor() {
    this._storage = localStorage;

  }
  getItem(key: string): string | null {
    return this._storage.getItem(key);
  }

  setItem(key: string, value: string): void {
    this._storage.setItem(key, value);
  }

  removeItem(key: string): void {
    this._storage.removeItem(key);
  }

  clear(): void {
    this._storage.clear();
  }
}

export { Storage };