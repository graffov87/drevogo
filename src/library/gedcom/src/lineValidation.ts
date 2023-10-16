import * as validators from "./validators";

export default class lineValidation {
  listOfValidators: string[];
  constructor() {
    this.listOfValidators = ["isEmpty", "maxLength", "isFirstNumber"];
  }
  valid(line: string): boolean {
    let isValid: boolean = true;
    for (let i = 0; i < this.listOfValidators.length; i++) {
      const callValidator = this.listOfValidators[i];
      if (validators[callValidator as keyof typeof validators](line) == false) {
        isValid = false;
        break; //lovi govnokod))
      }
    }

    return isValid;
  }
}
