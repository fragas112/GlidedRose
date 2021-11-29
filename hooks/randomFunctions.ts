import { maxQuality, minQuality } from "@/glided-rose-item"
import { ItemProps } from "types/types"

//Functions

//Function checks if item.name are equal to Aged Brie
export const nameAgedBrie = (item: ItemProps) => {
  return item.name !== 'Aged Brie'
}
//Function checks if item.name are equal to 'Backstage passes to a TAFKAL80ETC concert'
export const nameBackStagePasses = (item: ItemProps) => {
  return item.name !== 'Backstage passes to a TAFKAL80ETC concert'
}
//Function checks if item.name are equal to Sulfuras, Hand of Ragnaros
export const nameHandOfRagnaros = (item: ItemProps) => {
  return item.name !== 'Sulfuras, Hand of Ragnaros'
}

export const incQuality = (item: ItemProps) => {
  if (item.quality < maxQuality) {
    return item.quality += 1
  }
}

export const decQuality = (item: ItemProps) => {
  if (item.quality > minQuality) {
    return item.quality -= 1
  }
}

export const lessQuality = (item) => {
  if (item.quality > minQuality) {
    if (nameHandOfRagnaros(item)) {
      return decQuality(item)
    }
  }
}
