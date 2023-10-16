import ExampleGed from "../example/ExampleGed";
import lineValidation from "./lineValidation";
export default class Parsing {
  parseFile() {
    const obj = new ExampleGed();
    const lines = obj.getExample().split("\n");
    this.paseLines(lines);
  }

  paseLines(lines: string[]): void {
    const valid = new lineValidation();
    lines.forEach((line) => {
      console.log(valid.valid(line));
    });
  }
}
