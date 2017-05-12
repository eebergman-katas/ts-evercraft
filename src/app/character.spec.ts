import { expect } from 'chai';
import { Character } from './character';

describe('Character Spec', () => {
    let testCharacter: Character;

    beforeEach(() => {
        testCharacter = new Character();
    });

    describe('Character name', () => {
        it('should get a character name', () => {
            testCharacter.name = 'Leeana';
            expect(testCharacter.name).to.equal('Leeana');
        });

        it('should set a character name', () => {
            testCharacter.name = 'Inara';
            expect(testCharacter.name).to.equal('Inara');
        });
    });
});
