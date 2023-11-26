import { innerHeightFn } from "./window";

export function doubleUserAge() {
  const userAge = innerHeightFn();
  return Number(userAge) * 2;
}

export function doubleInnerWidth() {
  return innerWidth * 2;
}
