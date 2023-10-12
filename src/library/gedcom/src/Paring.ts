import ExampleGed from "../example/ExampleGed";

export default class Parsing {
  parseFile() {
    const obj = new ExampleGed();
    console.log(obj.getExample());
  }
}
