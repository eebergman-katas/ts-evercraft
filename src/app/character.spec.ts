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

    describe('Character Alignment', () => {
        it('should get a character Alignment', () => {
            testCharacter.alignment = 0;
            expect(testCharacter.alignment).to.equal('Good');
        });

        it('should get a character Alignment', () => {
            testCharacter.alignment = 2;
            expect(testCharacter.alignment).to.equal('Evil');
        });

        it('should look up the alignment', () => {
            testCharacter.alignment = 1;
            expect(testCharacter.alignment).to.equal('Neutral');
        });
    });
});
