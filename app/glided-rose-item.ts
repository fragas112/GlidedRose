import { decQuality, incQuality, lessQuality, nameAgedBrie, nameBackStagePasses, nameHandOfRagnaros } from "hooks/randomFunctions";
import { ItemProps } from "types/types";

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}
//Variables
export const minQuality: number = 0;
export const maxQuality: number = 50;

export const updateItems = (item: ItemProps) => {
  if (nameAgedBrie(item) && nameBackStagePasses(item)) {
    lessQuality(item)
  } else {
    if (item.quality < maxQuality) {
      item.quality += 1
      if (!(nameBackStagePasses(item))) {
        if (item.sellIn < 11 || item.sellIn < 6) {
          incQuality(item)
        }
      }
    }
  }
  if (nameHandOfRagnaros(item)) {
    decQuality(item)
  }
  if (item.sellIn < 0) {
    if (nameAgedBrie(item) && nameBackStagePasses(item)) {
      if (item.quality > minQuality) {
        if (nameHandOfRagnaros(item)) {
          decQuality(item)
        }
      } else {
        item.quality = minQuality
      }
    } else {
      incQuality(item)
    }
  }
}

