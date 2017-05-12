import { expect } from 'chai';
import { Alignment } from './alignment.enum';

describe('Alignment Enum Spec', () => {
    describe('Three alignments', () => {
        let testAlignment: string;

        beforeEach(() => {
            testAlignment = '';
        });

        it('should have a good alignment', () => {
            testAlignment = Alignment[0];
            expect(testAlignment).to.equal('Good');
        });

        it('should have a neutral alignment', () => {
            testAlignment = Alignment[1];
            expect(testAlignment).to.equal('Neutral');
        });

        it('should have an evil alignment', () => {
            testAlignment = Alignment[2];
            expect(testAlignment).to.equal('Evil');
        });
    });
});
