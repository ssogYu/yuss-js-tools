const { deepClone, formatObject } = require("../dist/index");
test("deepClone() 深拷贝", () => {
  const object = {
    a: 1,
    b: {
      c: [1, 2, 3],
      d: 2,
    },
  };
  const copyObject1 = deepClone(object);
  const copyObject2 = object;
  expect(copyObject1).not.toStrictEqual(object);
  expect(copyObject2).toStrictEqual(object);
});
test("formatObject() 格式化对象", () => {
  const object = {
    a: null,
    b: 1,
    c: undefined,
    f: "",
  };
  expect(formatObject(object).a).toBeUndefined();
  expect(formatObject(object).c).toBeUndefined();
  expect(formatObject(object).f).toBeUndefined();
});
