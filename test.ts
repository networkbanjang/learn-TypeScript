type Last = (arr: any[]) => any;

const last: Last = (arr) => {
  const result = arr[arr.length - 1];
  return result;
};

type Prepend = (arr: any[], item: any) => any[];

const prepend: Prepend = (arr, item) => {
  const result = [item, ...arr];

  return result;
};

console.log(last(["하이", "바이", 123]));

console.log(prepend(["하이", "바이", 123],13));
