import * as t from 'io-ts';

export const ConfigScheme = t.type({});

export type Config = t.TypeOf<typeof ConfigScheme>;
