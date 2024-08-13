import { expect, test } from 'vitest';

import config from './config';

test('config', () => {
    expect(config.isLocalDev).oneOf([true, false]);
    expect(config.envName).toBeTypeOf('string');
});
