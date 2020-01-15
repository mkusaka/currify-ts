export const currify = <F extends (...args: any[]) => any>(fn: F) => {
  return (arg: Parameters<typeof fn>[0]) => resc(fn, fn.length, arg);
};

const resc = <F extends (...args: any[]) => any>(
  fn: F,
  arglength: number,
  ...arg: Parameters<typeof fn>[number][]
) => {
  if (arglength === 1) {
    return fn(...arg);
  }
  const parameterPosition = fn.length - arglength;
  type Arg = Parameters<typeof fn>[typeof parameterPosition];
  return (arg2: Arg) => resc(fn, arglength - 1, ...arg, arg2);
};

export default currify;
