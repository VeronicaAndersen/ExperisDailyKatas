import {correctTitle} from './index.js'

// correctTitle("jOn SnoW, kINg IN thE noRth") ➞ "Jon Snow, King in the North."
// correctTitle("sansa stark,lady of winterfell.") ➞ "Sansa Stark, Lady of Winterfell."
// correctTitle("TYRION LANNISTER, HAND OF THE QUEEN.") ➞ "Tyrion Lannister, Hand of the Queen."


correctTitle("jOn SnoW, kINg IN thE noRth") // ➞ "Jon Snow, King in the North."
// correctTitle("sansa stark,lady of winterfell.") // ➞ "Sansa Stark, Lady of Winterfell."
// correctTitle("TYRION LANNISTER, HAND OF THE QUEEN.") // ➞ "Tyrion Lannister, Hand of the Queen."

test('Should check for correctTitle', () => {
	expect(correctTitle("jOn SnoW, kINg IN thE noRth")).toBe("Jon Snow, King in the North.");
})
