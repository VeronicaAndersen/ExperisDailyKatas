import {points} from './index.js';

//points(1,1) => 5

test('Should calculate total points', () => {
	expect(points(1,1)).toBe(5);
})