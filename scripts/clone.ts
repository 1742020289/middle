

import { existsSync, readFileSync, writeFileSync, mkdirSync } from 'fs';

import { resolve as _resolve } from '../tools/path-fn';

const args = process.argv;

const modeIdx = args.findIndex(item => item === '--mode');

const mode = modeIdx > -1 ? args[modeIdx + 1] : 'production';

console.log('---------------------------------',mode);

const packageStr = readFileSync(_resolve('package.json'), 'utf-8');

const nodemonConfig = {
    'verbose': false,
    'debug': false,
    'exec': 'node -r tsconfig-paths/register -r dotenv/config',
    'ignore': [
        'node_modules',
        './test',
        'fixtures/*',
        'test/**/*',
        'docs/*'
    ],
    'events': {
        'restart': ''
    },
    'watch': ['./**/*', './app.js'],
    'ext': 'js',
    'inspect': true
};

const baseURL: Record<string, string> = {
    production: 'http://172.16.2.2:9013',
    test: 'http://172.16.2.2:9013',
    develop: 'http://172.16.2.2:9013',
};

const pmConfig = readFileSync(_resolve('pm2.json'), 'utf-8');

const packageMap = JSON.parse(packageStr);

packageMap.scripts = Object.keys(packageMap.scripts).reduce((tar, cur) => {
    if (cur.includes('pm2') || cur.includes('docker') || cur === 'start') {
        tar = { ...tar, [cur]: packageMap.scripts[cur] };
    }
    return tar;
}, {});

const pm = JSON.parse(pmConfig);

delete packageMap.devDependencies;

pm.apps.script = './app.js';
pm.apps.name = mode === 'production' ? 'goodo-intermediate' : `goodo-intermediate-${mode}`;
pm.apps.env = {
    NODE_ENV: 'production',
    SERVER_HOST: 'http://localhost',
    SERVER_PORT: 7530,
    API_PREFIX: '/api',
    API_VERSION: 'v1',
    BACKEND_BASE_URL: baseURL[mode]
};

!existsSync(_resolve('build')) && mkdirSync(_resolve('build'));

writeFileSync(_resolve('build/nodemon.json'), JSON.stringify(nodemonConfig, null, 4));
writeFileSync(_resolve('build/pm2.json'), JSON.stringify(pm, null, 4));
writeFileSync(_resolve('build/package.json'), JSON.stringify(packageMap, null, 2));

console.log('=== nodemon.json pm2.json package.json already generated ===');
