import * as validators from "./validators";

export default (line: string): boolean => {
  for (const validator in validators) {
    if (validators[validator as keyof typeof validators](line) == false) return false;
  }

  return true;
};
