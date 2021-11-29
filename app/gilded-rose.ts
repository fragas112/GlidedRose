import {Item, updateItems} from "./glided-rose-item"

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      updateItems(item)
    }

    return this.items;
  }
}

