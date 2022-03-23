export const fizzbuzz = (maxRange: number): string => {
  const buffer: string[] = [];

  return createRange(maxRange)
  .map((value) => buffer.concat(getValue(value)))
  .join(' ')
}

const createRange = (maxRange: number): number[] => Array.from({length: maxRange}, (_, index) => index + 1);

export const getValue = (i: number) : string => {
  const ret = ([] as string[])
  .concat(writeFizz(i))
  .concat(writeBang(i))
  .concat(writeBuzz(i))
  .concat(writeWizz(i))

  return ret.length ? ret.join('') : i.toString();
}

const writeFizz = (i: number) => i % 3 === 0 ? ['Fizz'] : [];
const writeBang = (i: number) => i % 4 === 0 ? ['Bang'] : [];
const writeBuzz = (i: number) => i % 5 === 0 ? ['Buzz'] : [];
const writeWizz = (i: number) => i % 6 === 0 ? ['Wizz'] : [];
