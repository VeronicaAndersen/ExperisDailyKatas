let twoPointer;
let threePointer;

points(1, 1);
points(7, 5);
// points(38,8);
// points(0,1);
// points(0, 0);

// function with parameters that calculate the points and the return it.
function points(twoPointer, threePointer) {
  finalPoints = twoPointer * 2 + threePointer * 3;
return finalPoints;
}
// console.log(finalPoints);
document.getElementById("points").innerHTML = "Total points: " + finalPoints;







