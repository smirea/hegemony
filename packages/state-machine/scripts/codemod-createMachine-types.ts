#!/usr/bin/env ts-node -r tsconfig-paths/register -T
process.env.INSTRUMENT_STATE_MACHINES = 'true';

import path from 'node:path';
import fs from 'node:fs';

import { stateMachineConfigs } from '../createStateMachine';

const root = path.resolve(__dirname, '..');
const outputFile = path.join(root, 'types.ts');

const startTag = '// --- start: generated via codemod-createMachine-types.ts ---';
const endTag = '// --- end: generated via codemod-createMachine-types.ts ---\n';

const dirs = [path.join(root, 'shared')];

function init() {
    for (const dir of dirs) {
        for (const file of readdirRecursiveSync(dir)) {
            if (!file.endsWith('.ts')) continue;
            const content = fs.readFileSync(file, 'utf-8');
            const reg = /createStateMachine/g;
            const match = content.match(reg);
            if (!match) continue;
            // eslint-disable-next-line @typescript-eslint/no-require-imports
            require(file);
        }
    }
    const str = ['const stateMachineDefinition = {'];
    for (const [k, v] of Object.entries(stateMachineConfigs)) {
        const events: Set<string> = new Set();
        for (const { on: map } of Object.values(v.states) as any) {
            Object.keys(map).forEach(k => events.add(k));
        }
        const f = (l: string[]) => '[' + l.map(s => `'${s}'`).join(', ') + ']';
        str.push(`    ${k}: {`);
        str.push(`        states: ${f(Object.keys(v.states))},`);
        str.push(`        events: ${f(Array.from(events.values()))},`);
        str.push('    },');
    }
    str.unshift(startTag);
    str.push('} as const;');
    str.push(endTag);
    const content = fs.readFileSync(outputFile, 'utf-8');
    const startIndex = content.indexOf(startTag);
    const endIndex = content.indexOf(endTag) + endTag.length;
    const newContent = content.slice(0, startIndex) + str.join('\n') + content.slice(endIndex);
    fs.writeFileSync(outputFile, newContent);
}

function* readdirRecursiveSync(dir: string): Generator<string> {
    const all = fs.readdirSync(dir).map(fileName => path.join(dir, fileName));
    const dirs: string[] = [];
    for (const fileName of all) {
        if (fs.statSync(fileName).isDirectory()) {
            dirs.push(fileName);
            continue;
        }
        yield fileName;
    }
    for (const dirName of dirs) {
        yield* readdirRecursiveSync(dirName);
    }
}

init();
