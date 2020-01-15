import { currify } from "./";

function twoArgFunc(a: number, b: string) {
  return `${a}${b}`;
}

describe("2 args func work", () => {
  it("works", () => {
    const curriedTwoArgFunc = currify(twoArgFunc);
    const curriedOneArgFunc = curriedTwoArgFunc(3)
    expect(curriedOneArgFunc("test")).toMatchInlineSnapshot(`"3test"`);
  });
});

function threeArgsFunc(a: number, b: string, c: string) {
  return `a: ${a}, b: ${b}, c:${c}`;
}

describe("2 args func work", () => {
  it("works", () => {
    const curriedThreeArgFunc = currify(threeArgsFunc);
    expect(curriedThreeArgFunc(3)("test")("foo")).toMatchInlineSnapshot(
      `"a: 3, b: test, c:foo"`
    );
  });
});
