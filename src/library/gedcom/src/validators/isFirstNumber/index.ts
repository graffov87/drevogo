export default (line: string): boolean => Boolean(Number.isInteger(Number.parseFloat(line[0])));
