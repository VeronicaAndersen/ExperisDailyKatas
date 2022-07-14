// The correctTitles and, the, of and in should be lowercase.
// All other correctTitles should have the first character as uppercase and the rest lowercase.
// All commas must always be followed by a single space.
// All titles must end with a period.





const correctTitle = (sentence) => {
    let arraySentence = sentence.split(/[ -]+/);

    newArray = [];

    arraySentence.forEach((word, i) => {
        let lowerCase = word.toLowerCase();

        if (lowerCase == "and" || lowerCase == "the" || lowerCase == "in") {
            newArray.push(lowerCase);
        }else{
            newArray.push(lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1))
        }
    });
    console.log(newArray.join(" "));
}


correctTitle("jOn SnoW, kINg IN thE noRth") // ➞ "Jon Snow, King in the North."
correctTitle("sansa stark,lady of winterfell.") // ➞ "Sansa Stark, Lady of Winterfell."
correctTitle("TYRION LANNISTER, HAND OF THE QUEEN.") // ➞ "Tyrion Lannister, Hand of the Queen."




















// let correctTitle = "jOn SnoW, kINg IN thE noRth";       // ➞ "Jon Snow, King in the North."
// //correctTitle = "sansa stark,lady of winterfell.";     // ➞ "Sansa Stark, Lady of Winterfell."

// function gameOfThronesCheck(correctTitle) {

//     let u = correctTitle.charAt(0).toUpperCase() + correctTitle.slice(1);
//     // let lower =  correctTitle.toLowerCase()+ correctTitle.slice(1);
//     let comma = correctTitle.split(/,\s*/);
//     let end = correctTitle.endsWith(".");

//     // correctTitle = lower;
//     correctTitle = FirstUp;

//     if (end == false) {
//         correctTitle += ".";
//     }

//     correctTitle = correctTitle.split(/,\s*/);

//     console.log(correctTitle);
// }
// gameOfThronesCheck(correctTitle);