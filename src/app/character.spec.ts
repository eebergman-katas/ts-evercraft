import { expect } from 'chai';
import { Character } from './character';

describe('Character Spec', () => {
  describe('Character name', () => {
      it('should get a character name', () => {
          const testCharacter = new Character();
          testCharacter.name = 'Leeana';
          expect(testCharacter.name).to.equal('Leeana');
      });
  });

  describe('Character name', () => {
      it('should set a character name', () => {
          const testCharacter = new Character();
          testCharacter.name = 'Inara';
          expect(testCharacter.name).to.equal('Inara');
      });
  });
});
