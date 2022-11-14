class localCache {
  $storage: Storage = window.localStorage;
  constructor($storage: Storage) {
    this.$storage = $storage;
  }
  setLocalCache(key: string, value: any) {
    this.$storage.setItem(key, JSON.stringify(value));
  }
  getLocalCache(key: string) {
    const value = window.localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
  }
  deleteCache(key: string) {
    window.localStorage.removeItem(key);
  }
  clearCache() {
    window.localStorage.clear();
  }
}
export default new localCache(window.localStorage);
