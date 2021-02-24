
const data = [1, "2", true, false, "A", 123, undefined, null, "22", 6, 1, 67, { value: "A" }]

const getSortedNumberList = (data) => {
  const filterdList = data.filter((item) => {
    const isNumber = typeof item === "number";
    const isNumberStr =
      typeof item === "string" && item !== "" && !isNaN(Number(item));
    return isNumber || isNumberStr;
  });

  const sortedNumList = filterdList
    .map((item) => Number(item))
    .sort((a, b) => a - b);

  return sortedNumList;
};

console.log(getSortedNumberList(data));