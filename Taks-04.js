const data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  wesite: "hildegard.org",
};

const plus1 = {
  name: "Daffa Abiyyu Atha",
  email: "daffaabiyyu7861@gmail.com",
  hobbie: "Badminton and Games",
};

const plus = { ...data, ...plus1 };

console.log(plus);

const { street, city } = data.address;

console.log(street);
console.log(city);
