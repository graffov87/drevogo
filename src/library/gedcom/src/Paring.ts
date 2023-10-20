import ExampleGed from "../example/ExampleGed";
import lineValidation from "./lineValidation";
import { FORMAL_NAMES } from "./names";
export default class Parsing {
  /**
   * Parse Gedcom file
   */
  parseFile() {
    const obj = new ExampleGed();
    const lines = obj.getExample().split("\n");
    this.paseLines(lines);
  }

  /**
   * Separating File line
   *
   * @param line
   * @returns
   */
  parseline(line: string): string[] {
    const countSpaces: number = 2;
    let startSpace: number = 0;
    const stringArray: string[] = [];
    let tempString: string = "";
    [...line].forEach((c) => {
      if (c == " " && startSpace <= countSpaces) {
        stringArray.push(tempString);
        tempString = "";
        startSpace++;
      } else {
        tempString += c;
      }
    });
    stringArray.push(tempString);

    return stringArray;
  }

  /**
   * Validating and generating Object
   *
   * @param lines
   */
  paseLines(lines: string[]): void {
    const valid = new lineValidation();
    const linesObj: object[] = [];
    let prevObj: object = {};
    let prevNumber: number = 0;
    lines.forEach((line) => {
      if (valid.valid(line)) {
        const detailLine = this.parseline(line);
        const firstChar = Number(detailLine[0]);
        if (firstChar == 0) {
          const isEmpty = Object.keys(prevObj).length === 0;
          if (!isEmpty) {
            linesObj.push(prevObj);
            prevObj = {};
          }
        } else if (firstChar > 0) {
          const headLine = detailLine[1];
          const transFormal = FORMAL_NAMES[headLine];
          const name = transFormal != undefined ? transFormal : detailLine[1];
          prevObj[name] = detailLine[2] != undefined ? detailLine[2] : "";
        }
        prevNumber = firstChar;
      }
    });
    console.log(linesObj);
  }
}
