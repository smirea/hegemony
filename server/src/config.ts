import * as path from 'node:path';
import { consoleSetup, env, setupDotenv } from '@smirea/node-utils';

setupDotenv(path.resolve(__dirname, '..'));
consoleSetup({});

const isLocalDev = env('boolean', 'IS_LOCAL', false);
const envName = isLocalDev ? 'local' : process.env.NODE_ENV === 'production' ? 'prod' : 'dev';

const config = {
    isLocalDev,
    envName,
};

export default config;
