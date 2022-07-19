import {testRegex} from './index.js'


// testRegex("dog") => 0
// testRegex("Nope") => 1


test('Should check for empty string', () => {
	expect(testRegex("")).toBe(0);
})





















// import {points} from './index.js';

// //points(1,1) => 5

// test('Should calculate total points', () => {
// 	expect(points(1,1)).toBe(5);
// })