import { describe, it } from 'mocha';

import { emojify } from '.';
import { expect } from 'chai';

describe('emojify()', () => {
  it('does not change an empty string', () => {
    expect(emojify('')).to.equal('');
  });

  it('does not change text without emoji colon syntax', () => {
    expect(emojify('Hello, world!')).to.equal('Hello, world!');
  });

  it('does not change text with emoji colon syntax that does not match a known emoji', () => {
    expect(emojify('I like :pizza-pie:.')).to.equal('I like :pizza-pie:.');
  });

  it('replaces a known emoji in colon syntax with its emoji', () => {
    expect(emojify('I like :pizza:.')).to.equal('I like 🍕.');
  });

  it('replaces multiple known emoji with their matches', () => {
    expect(emojify('I like :pizza: and :cake:.')).to.equal('I like 🍕 and 🍰.');
  });

  it('replaces multiple known emoji with their matches and leaves unknown matches alone', () => {
    expect(emojify('I like :pizza:, :cake:, and :lasagna:.')).to.equal('I like 🍕, 🍰, and :lasagna:.');
  });

  it('replaces multiple known emoji with their matches and leaves unknown matches alone, even when the unknown emoji appears first.', () => {
    expect(emojify('I like :lasagna:, :pizza:, and :cake:.')).to.equal('I like :lasagna:, 🍕, and 🍰.');
  });
});
