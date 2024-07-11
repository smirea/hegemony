import * as path from 'path';
import { env } from '@smirea/node-utils';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

require('dotenv').config({ path: path.resolve(__dirname, '', '.env.local') });
require('dotenv').config({ path: path.resolve(__dirname, '', '.env.' + process.env.NODE_ENV) });
require('dotenv').config({ path: path.resolve(__dirname, '', '.env') });


env({ name: ''  });
