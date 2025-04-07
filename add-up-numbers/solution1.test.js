'use strict';

import addUp from './solution1';

describe('Basic Tests', () => {
    it('should return 272691 when 738 is passed', () => {
        expect(addUp(738)).toBe(272691);
    });
    it('should return 5050 when 100 is passed', () => {
        expect(addUp(100)).toBe(5050);
    });
    it('should return 428275 when 925 is passed', () => {
        expect(addUp(925)).toBe(428275);
    });
    it('should return 1 when 1 is passed', () => {
        expect(addUp(1)).toBe(1);
    });
});
