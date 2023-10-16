export default function maxLength(line: string): boolean {
  return Boolean(line.length <= 255);
}
