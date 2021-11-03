export class UniqueVenueSet {
  constructor(items) {
    if (!items || !Array.isArray(items)) {
      this.uniqueSet = new Set();
    } else {
      let _uniqueSet = [];
      for (let i = 0; i < items.length; i++) {
        if (
          _uniqueSet.length === 0 ||
          _uniqueSet.filter((el) => el.toString() === items[i].toString())
            .length === 0
        ) {
          _uniqueSet.push(items[i]);
        }
      }

      this.uniqueSet = new Set([..._uniqueSet]);
    }
  }

  hasElem(item) {
    let _uniqueSet = [...this.uniqueSet];
    if (
      _uniqueSet.length === 0 ||
      _uniqueSet.filter((el) => el.id === item.id).length === 0
    ) {
      return false;
    }

    return true;
  }

  getValue() {
    return this.uniqueSet;
  }

  add(item) {
    if (!this.hasElem(item)) this.uniqueSet.add(item);
  }

  delete(item) {
    this.uniqueSet.delete(item);
  }

  toString() {
    return this.uniqueSet.toString();
  }
}
