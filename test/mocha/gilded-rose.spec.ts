import { expect } from 'chai';
import { GildedRose } from '@/gilded-rose';
import {Item} from '@/glided-rose-item'

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal('foo');
  });
});

describe('Aged Brie', () => {
  it('Aged Brie', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 5, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal('Aged Brie');
  });
});

describe('Backstage passes to a TAFKAL80ETC concert', () => {
  it('Backstage passes to a TAFKAL80ETC concert', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, -1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal('Backstage passes to a TAFKAL80ETC concert');
  });
});

