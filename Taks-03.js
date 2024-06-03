const printSegitiga = 5;

if (typeof printSegitiga === "number") {
  for (let angkaAwal = printSegitiga; angkaAwal > 0; angkaAwal--) {
    let text = "";
    for (let i = 1; i <= angkaAwal; i++) {
      text = text + i + " ";
    }
    console.log(text);
  }
} else {
  console.log("Data harus number");
}
