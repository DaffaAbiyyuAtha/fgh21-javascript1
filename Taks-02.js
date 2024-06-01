let BI = 10;
let BEN = 24;
let MAT = 12;
let IPA = 5;
let x = (BI + BEN + MAT + IPA) / 4;

if (x >= 90) {
  console.log("You Value : " + x);
  console.log("You Get : A");
} else if (x >= 80) {
  console.log("You Value : " + x);
  console.log("You Get : B");
} else if (x >= 70) {
  console.log("You Value : " + x);
  console.log("You Get : C");
} else if (x >= 60) {
  console.log("You Value : " + x);
  console.log("You Get : D");
} else {
  console.log("You Value : " + x);
  console.log("You Get : E");
}
