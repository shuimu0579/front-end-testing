import { vi, it, expect } from "vitest";
import { doubleInnerWidth, doubleUserAge } from "./user";

vi.mock("./window.ts", () => {
  return {
    innerHeightFn: () => 18,
  };
});

it("doubleUserAge", () => {
  const r = doubleUserAge();

  expect(r).toBe(36);
});

it("double innerWidth", () => {
  // window
  vi.stubGlobal("innerWidth", 200);

  const r = doubleInnerWidth();

  expect(r).toBe(400);
});
