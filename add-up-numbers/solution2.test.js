'use strict';

import addUp from './solution2';

describe('Basic Tests', () => {
    it('should return 499500 when 999 is passed', () => {
        expect(addUp(999)).toBe(499500);
    });
    it('should return 15400 when 175 is passed', () => {
        expect(addUp(175)).toBe(15400);
    });
    it('should return 6216 when 111 is passed', () => {
        expect(addUp(111)).toBe(6216);
    });
    it('should return 1 when 1 is passed', () => {
        expect(addUp(1)).toBe(1);
    });
});
