import { helloWorld } from './hello';

export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log(helloWorld);
  }
  return a + b;
};
