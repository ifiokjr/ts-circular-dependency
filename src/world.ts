import { hello } from './hello';
export const world = 'world' as const;

export const worldHello = hello + world;
