import { expect } from 'chai';
import { Health } from './health';

describe('Health Spec', () => {
    let testHealth: Health;

    beforeEach(() => {
        testHealth = new Health();
    });

    describe('Hit Points', () => {
        it('should default to 5 HP', () => {
            expect(testHealth.hitpoints).to.equal(5);
        });

        it('should set hp', () => {
            testHealth.hitpoints = 6;
            expect(testHealth.hitpoints).to.equal(6);
        });
    });
});
