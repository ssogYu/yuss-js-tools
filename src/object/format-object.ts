/**
 * 格式化对象，去除空键值对
 * @param obj
 * @returns
 */
export const formatObject = (obj: any) => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      if (
        value === null ||
        value === undefined ||
        value === "" ||
        (Array.isArray(value) && value.length === 0)
      ) {
        delete obj[key];
      } else if (typeof value === "object") {
        formatObject(value); // 递归处理嵌套的对象
        if (Object.keys(value).length === 0) {
          delete obj[key];
        }
      }
    }
  }
  return obj;
};
