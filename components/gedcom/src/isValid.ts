import * as validators from "./validators";

export default (line: string): boolean => {
  const listOfValidators = ["isNotEmpty", "isMaxLength", "isFirstNumber"];
  let isValid: boolean = true;

  for (let i = 0; i < listOfValidators.length; i++) {
    const callValidator = listOfValidators[i];
    if (validators[callValidator as keyof typeof validators](line) == false) {
      isValid = false;
      break;
    }
  }

  return isValid;
};
