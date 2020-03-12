const b: { [index: string]: number } = {
  value: 4,
};

const c = (a: number) => a ** 2;

console.log(c(b.value));
