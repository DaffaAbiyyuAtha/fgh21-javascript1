let a = "";
for (let i = 5; i >= 0; i--) {
  for (let j = 1; j <= i; j++) {
    a = a + j;
  }
  a = a + "\n";
}
console.log(a);
