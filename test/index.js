const { deepClone } = require("../dist/index.js");
const object = {
  a: "12",
  b: {
    name: "alex",
    age: "19",
    hobby: [1, 2, 3],
  },
  d:undefined,
  f:null,
  c: new Date(),
};
const copyData = deepClone(object);
const copyData1=JSON.parse(JSON.stringify(object))
copyData.b.age = 100;
console.log(copyData, object,copyData1);
