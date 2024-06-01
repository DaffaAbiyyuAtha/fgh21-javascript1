const biodata = {
  name: "Daffa Abiyyu Atha",
  age: 25,
  hobbie: ["Games", "Badminton"],
  isMarried: 1,
  notMarried: 2,
  myStatus: 2,
  schoolList: [
    {
      nameSchool: "SMPN 5 Boyolali",
      yearIn: 2011,
      yearOut: 2014,
      major: null,
    },
    {
      nameSchool: "SMAN 1 Teras Boyolali",
      yearIn: 2014,
      yearOut: 2017,
      major: "IPS",
    },
  ],
  skillList: [
    {
      nameSkill: ["Frontend", "UI/UX design"],
      skillLevel: ["Novice", "Competent", "Proficient", "Expert", "Master"],
    },
  ],
  interesting: 1,
  notInteresting: 2,
  interestingCoding: 1,
};
console.log("Name : " + biodata.name);
console.log("Age : " + biodata.age);
console.log("Hobbie : " + biodata.hobbie);
if (biodata.myStatus === 2) {
  console.log("Status : Not Married");
} else console.log("Status : Married");
console.log("School List = Junior High School");
console.log("Name School : " + biodata.schoolList[0].nameSchool);
console.log("School In : " + biodata.schoolList[0].yearIn);
console.log("School Out : " + biodata.schoolList[0].yearOut);
console.log("Major : " + biodata.schoolList[0].major);
console.log("School List = Senior High School");
console.log("Name School : " + biodata.schoolList[1].nameSchool);
console.log("School In : " + biodata.schoolList[1].yearIn);
console.log("School Out : " + biodata.schoolList[1].yearOut);
console.log("Major : " + biodata.schoolList[1].major);
console.log(
  "Skill 1 : " +
    biodata.skillList[0].nameSkill[0] +
    " Level " +
    biodata.skillList[0].skillLevel[1]
);
console.log(
  "Skill 2 : " +
    biodata.skillList[0].nameSkill[1] +
    " Level " +
    biodata.skillList[0].skillLevel[1]
);
if (biodata.interestingCoding === 1) {
  console.log("Interest Coding : Yes");
} else console.log("Interest Coding : No");
