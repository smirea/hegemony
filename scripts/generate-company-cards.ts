#!/usr/bin/env ts-node -T -r tsconfig-paths/register

import _ from 'lodash';

function init() {
    const idMap: Record<string, number> = {};
    const getId = (id: string) => {
        idMap[id] ||= 0;
        ++idMap[id];
        return id + '-' + idMap[id];
    };
    const fixName = (name: string) => name.replace(/'/g, "\\'");

    console.log('// ‼️ generated via scripts/generate-company-cards.ts ‼️');
    console.log('');

    console.log('export const capitalistCompanies: CompanyCard[] = [');
    for (const [
        name,
        industry,
        production,
        extra,
        l3,
        l2,
        l1,
        workers,
        educated,
        cost,
    ] of companies.capitalist) {
        let workersStr: string[] = ['    workers: []'];
        if (workers > 0) {
            workersStr = [
                '    workers: [',
                ...new Array(workers)
                    .fill('')
                    .map(
                        (_, i) =>
                            `worker('both', '${educated && i === 0 ? industry : 'unskilled'}'),`,
                    )
                    .map(x => '        ' + x),
                '    ],',
            ];
        }
        console.log(
            [
                '{',
                `    id: '${getId('c-' + _.kebabCase(name))}',`,
                `    name: '${fixName(name)}',`,
                `    cost: ${cost},`,
                `    industry: '${industry}',`,
                `    production: ${production},`,
                extra && `    productionFromAutomation: ${extra},`,
                workers === 0 && '    fullyAutomated: true,',
                `    wages: { l1: ${l1}, l2: ${l2}, l3: ${l3} },`,
                ...workersStr,
                '},',
            ]
                .filter(x => x)
                .map(x => `    ${x}`)
                .join('\n'),
        );
    }
    console.log('];');
    console.log('');

    console.log('export const middleClassCompanies: CompanyCard[] = [');
    for (const [
        name,
        industry,
        production,
        extra,
        l3,
        l2,
        l1,
        workers,
        educated,
        cost,
    ] of companies.middle) {
        let workersStr: string[] = ['    workers: []'];
        if (workers > 0) {
            workersStr = [
                '    workers: [',
                `        worker('m', '${industry}'),`,
                '        ' +
                    (extra
                        ? `worker('w', '${educated ? industry : 'unskilled'}')`
                        : "worker('m', 'unskilled')"),
                '    ],',
            ];
        }
        console.log(
            [
                '{',
                `    id: '${getId('m-' + _.kebabCase(name))}',`,
                `    name: '${fixName(name)}',`,
                `    cost: ${cost},`,
                `    industry: '${industry}',`,
                `    production: ${production},`,
                extra && `    productionFromOptionalWorkers: ${extra},`,
                `    wages: { l1: ${l1}, l2: ${l2}, l3: ${l3} },`,
                ...workersStr,
                '},',
            ]
                .filter(x => x)
                .map(x => `    ${x}`)
                .join('\n'),
        );
    }
    console.log('];');

    console.log('');

    console.log('export const stateCompanies: CompanyCard[] = [');
    for (const [
        name,
        industry,
        production,
        _extra,
        l3,
        l2,
        l1,
        workers,
        _educated,
        cost,
    ] of companies.state) {
        console.log(
            [
                '{',
                `    id: '${getId('s-' + _.kebabCase(name))}',`,
                `    name: '${fixName(name)}',`,
                `    cost: ${cost},`,
                `    industry: '${industry}',`,
                `    production: ${production},`,
                `    wages: { l1: ${l1}, l2: ${l2}, l3: ${l3} },`,
                '    workers: [',
                `        worker('both', '${industry}'),`,
                "        worker('both', 'unskilled'),",
                workers > 2 && "        worker('both', 'unskilled'),",
                '    ],',
                '},',
            ]
                .filter(x => x)
                .map(x => `    ${x}`)
                .join('\n'),
        );
    }
    console.log('];');
}

const companies = {
    // https://steamusercontent-a.akamaihd.net/ugc/1821152149246477046/EE64678B845AFB2DFEAA635C7ACF7747DD103BA4/
    capitalist: [
        ['College', 'education', 6, 2, 30, 20, 10, 2, true, 16],
        ['Vegetable Farm', 'food', 5, 0, 30, 25, 20, 3, false, 15],
        ['Radio Station', 'influence', 2, 0, 20, 15, 10, 2, false, 8],
        ['Hotel', 'luxury', 7, 9, 30, 25, 20, 3, false, 15],
        ['TV Station', 'influence', 4, 0, 40, 30, 20, 3, false, 24],
        ['Academy', 'education', 7, 0, 30, 20, 10, 2, true, 20],
        ['Car Manufacturer', 'luxury', 5, 0, 0, 0, 0, 0, true, 45],
        ['University', 'education', 9, 2, 40, 30, 20, 3, false, 24],
        ['Fast Food Chain', 'food', 3, 0, 20, 15, 10, 2, true, 8],
        ['Electronics Manufacturer', 'luxury', 3, 0, 0, 0, 0, 0, false, 25],
        ['Fish Farm', 'food', 6, 1, 35, 30, 25, 3, false, 20],
        ['Publishing House', 'influence', 3, 0, 30, 25, 20, 3, true, 12],
        ['Clinic', 'healthcare', 6, 2, 30, 20, 10, 2, false, 16],
        ['Stadium', 'luxury', 8, 3, 35, 30, 25, 3, true, 20],
        ['Hospital', 'healthcare', 7, 0, 30, 20, 10, 2, true, 20],
        ['Medical Village', 'healthcare', 9, 2, 40, 30, 20, 3, true, 24],
        ['Supermarket', 'food', 4, 1, 25, 20, 15, 2, true, 16],
        ['Shopping Mall', 'luxury', 6, 2, 25, 20, 15, 2, true, 16],
        ['Lobbying Firm', 'influence', 3, 0, 30, 20, 10, 2, true, 16],
        ['Institute of Technology', 'education', 8, 3, 40, 30, 20, 3, true, 20],
        ['Automated Grain Farm', 'food', 2, 0, 0, 0, 0, 0, false, 25],
        ['Fashion Company', 'luxury', 4, 2, 20, 15, 10, 2, false, 8],
        ['Automated Dairy Farm', 'food', 3, 0, 0, 0, 0, 0, false, 45],
        ['Pharmaceutical Company', 'healthcare', 8, 3, 40, 30, 20, 3, true, 20],
        ['Clinic', 'healthcare', 6, 2, 30, 20, 10, 2, true, 16],
        ['College', 'education', 6, 2, 30, 20, 10, 2, true, 16],
        ['Shopping Mall', 'luxury', 6, 2, 25, 20, 15, 2, true, 16],
        ['Supermarket', 'food', 4, 1, 25, 20, 15, 2, true, 16],
    ],
    middle: [
        // https://steamusercontent-a.akamaihd.net/ugc/1821152149246364206/A9B6FDA667F30C8DD502BE11CBCDA3CDB8D657EF/
        ['Jewelry Store', 'luxury', 4, 0, 0, 0, 0, 0, false, 16],
        ['Regional Radio Station', 'influence', 2, 2, 15, 12, 9, 2, true, 20],
        ["Doctor's Office", 'healthcare', 2, 2, 10, 8, 6, 2, false, 12],
        ['PR Agency', 'influence', 3, 0, 0, 0, 0, 2, false, 20],
        ['Fast Food Restaurant', 'food', 3, 0, 0, 0, 0, 2, false, 20],
        ['Tutoring Company', 'education', 2, 2, 10, 8, 6, 2, false, 12],
        ['Private School', 'education', 2, 4, 15, 12, 9, 2, true, 20],
        ['Training Center', 'education', 4, 0, 0, 0, 0, 2, false, 16],
        ['Convenience Store', 'food', 2, 1, 10, 8, 6, 2, false, 14],
        ['Medical Laboratory', 'healthcare', 2, 4, 15, 12, 9, 2, true, 20],
        ['Electronics Store', 'luxury', 2, 4, 15, 12, 9, 2, true, 20],
        ['Local Newspaper', 'influence', 2, 1, 10, 8, 6, 2, false, 14],
        ['Game Store', 'luxury', 2, 2, 10, 8, 6, 2, false, 12],
        ['Organic Farm', 'food', 2, 2, 15, 12, 9, 2, true, 20],
        ["Doctor's Office", 'healthcare', 2, 2, 10, 8, 6, 2, false, 12],
        ['Convenience Store', 'food', 2, 1, 10, 8, 6, 2, false, 14],
        ['Pharmacy', 'healthcare', 4, 0, 0, 0, 0, 2, false, 16],
    ],
    state: [
        ['University Hospital', 'healthcare', 6, 0, 35, 30, 25, 3, true, 30],
        ['Technical University', 'education', 6, 0, 35, 30, 25, 3, true, 30],
        ['National Public Broadcasting', 'influence', 4, 0, 35, 30, 25, 3, true, 30],
        ['Public Hospital', 'healthcare', 4, 0, 25, 20, 15, 2, true, 20],
        ['Public University', 'education', 4, 0, 25, 20, 15, 2, true, 20],
        ['Regional TV Station', 'influence', 4, 0, 25, 20, 15, 2, true, 20],
        ['Public Hospital', 'healthcare', 4, 0, 25, 20, 15, 2, true, 20],
        ['Public University', 'education', 4, 0, 25, 20, 15, 2, true, 20],
        ['Regional TV Station', 'influence', 4, 0, 25, 20, 15, 2, true, 20],
    ],
} as const;

void init();
