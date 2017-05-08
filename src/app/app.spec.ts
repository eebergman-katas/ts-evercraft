import { expect } from 'chai';

import { App } from './app';

describe('Inital Test', () => {
  it('should fail', () => {
    expect(true).to.be.true;
  });

  it('should pass if it can find App Class', () => {
    expect(App).to.exist;
  })
});
