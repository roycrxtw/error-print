'use strict';

const nodeVersion = process.version;
console.log('Current node.js version:', nodeVersion);

const stackTraces = Error().stack.split('\n');
console.log(`stackTraces:`, stackTraces);

const NODEJS_VERSION = parseInt(process.version.slice(1).split('.')[0], 10)
const STACKTRACE_OFFSET = NODEJS_VERSION && NODEJS_VERSION > 6 ? 2 : 3
const LINE_OFFSET = 7
const caller = Error().stack.split('\n').filter(s => !s.includes('node_modules/pino') && !s.includes('node_modules\\pino'))[STACKTRACE_OFFSET].substr(LINE_OFFSET);

console.log(`caller:`, caller);
