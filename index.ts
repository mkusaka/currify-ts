export const currify = <F extends Function>(fn: F) => {
  return <K>(arg: K) => resc(fn, fn.length, arg)
}

const resc = <F extends Function, T>(fn: F, arglength: number, ...arg: T[]) => {
  if (arglength === 1) {
    return fn(...arg)
  }
  // TODO: infer better argument type.
  return (arg2: any) => resc(fn, arglength - 1, ...arg, arg2)
}

export default currify;
