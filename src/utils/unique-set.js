export class UniqueSet {
  constructor(items) {
    if (!items || !Array.isArray(items)) {
      this.uniqueSet = [];
    } else {
      let _uniqueSet = [];
      for (let i = 0; i < items.length; i++) {
        if (
          _uniqueSet.length === 0 ||
          _uniqueSet.filter((el) => el.id === items[i].id).length === 0
        ) {
          _uniqueSet.push(items[i]);
        }
      }

      this.uniqueSet = [..._uniqueSet];
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
    if (!this.hasElem(item)) {
      this.uniqueSet = [...this.uniqueSet, item];
      console.log(this.uniqueSet.length);
    }
  }

  delete(item) {
    const _uniqueSet = [...this.uniqueSet].filter((el) => el.id !== item.id);

    this.uniqueSet = [..._uniqueSet];
    console.log(this.uniqueSet.length);
  }

  toString() {
    return this.uniqueSet.toString();
  }
}

export class UniqueVenueSet extends UniqueSet {
  constructor(items) {
    super(items);
  }
}
