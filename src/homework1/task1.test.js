import { sum } from './task1';

describe('Sum', () => {
    it('return sum of two numbers', function () {
        expect(sum(1,2)).toEqual(3);
    });
})