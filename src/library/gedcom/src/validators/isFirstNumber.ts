export default function isFirstNumber(line: string): boolean {
  return Boolean(Number.isInteger(Number.parseFloat(line[0])));
}
