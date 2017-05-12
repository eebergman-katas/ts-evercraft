import { expect } from 'chai';

import { Armor } from './armor';

describe('Armor Spec', () => {
    let testArmor: Armor;

    beforeEach(() => {
      testArmor = new Armor();
    });

    it('should default armor value to 10', () => {
        expect(testArmor.value).to.equal(10);
    });

    it('should set the armor value', () => {
        testArmor.value = 11;
        expect(testArmor.value).to.equal(11);
    });
});
