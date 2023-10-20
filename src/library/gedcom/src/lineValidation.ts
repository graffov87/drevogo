import * as validators from "./validators";

export default class lineValidation {
  listOfValidators: string[];

  /**
   * Set Validators
   */
  constructor() {
    this.listOfValidators = ["isEmpty", "isMaxLength", "isFirstNumber"];
  }

  /**
   * Using Validators for the line
   *
   * @param line
   * @returns
   */
  valid(line: string): boolean {
    let isValid: boolean = true;
    for (let i = 0; i < this.listOfValidators.length; i++) {
      const callValidator = this.listOfValidators[i];
      if (validators[callValidator as keyof typeof validators](line) == false) {
        isValid = false;
        break;
      }
    }

    return isValid;
  }
}