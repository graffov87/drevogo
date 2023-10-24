import ExampleGed from "../example/ExampleGed";
import isValid from "./isValid";
import { FORMAL_NAMES } from "./names";

interface StringMap {
  [key: string]: string | object;
}

/**
 * Parse Gedcom file
 */
const Parsing = () => {
  const obj = new ExampleGed();
  const lines = obj.getExample().split("\n");
  paseLines(lines);
};

/**
 * Separating File line
 *
 * @param line
 * @returns
 */
const parseline = (line: string): string[] => {
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
};

/**
 * Validating and generating Object
 *
 * @param lines
 */
const paseLines = (lines: string[]): void => {
  const linesObj: object[] = [];
  let prevObj: StringMap = {};
  let innerObj: StringMap = {};
  let prevNumber: number = 0;
  let prevName: string = "";
  let prevValue: string = "";
  lines.forEach((line) => {
    if (!isValid(line)) return;
    const detailLine = parseline(line);
    const firstChar = Number(detailLine[0]);
    const headLine = detailLine[1];
    if (firstChar == 0) {
      const isEmpty = Object.keys(prevObj).length === 0;
      if (!isEmpty) {
        linesObj.push(prevObj);
        const lineId = getId(headLine);
        if (lineId != null) prevObj = { id: lineId };
      }
    } else if (firstChar > 0) {
      const transFormal = FORMAL_NAMES[headLine as keyof typeof FORMAL_NAMES];
      if (firstChar == 1) {
        innerObj = prevObj;
      } else if (firstChar > 1 && prevNumber != firstChar) {
        if (typeof innerObj[prevName] === "string") {
          innerObj[prevName] = { value: prevValue };
        }
        innerObj = innerObj[prevName] as StringMap;
      }
      prevName = transFormal != undefined ? transFormal : detailLine[1];
      prevValue = detailLine[2] != undefined ? detailLine[2] : "";
      addFields(innerObj, prevName, prevValue);
    }
    prevNumber = firstChar;
  });
  console.log(linesObj);
};

const addFields = (obj: StringMap, name: string, value: string): void => {
  obj[name as string] = value;
};

const getId = (text: string): string | null => {
  const match = new RegExp("@(.+)@", "i").exec(text);

  return match != null ? match[1] : null;
};

export default Parsing;
