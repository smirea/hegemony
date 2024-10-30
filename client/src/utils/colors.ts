import _ from 'lodash';
import {
    type CompanyWorkerType,
    type Industry,
    type PolicyName,
    type Resource,
    type RoleName,
} from 'shared/logic/types';
import { objectEntries } from 'shared/utils/ts';

type RGBA = [number, number, number, number?];
type HEX = `#${string}`;

const hexToRGB = (hex: HEX): RGBA => {
    let h = hex.replace(/^#/, '').toLowerCase();
    if (h.length === 3) {
        h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
    }
    return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
};

const alpha = ([r, g, b]: RGBA, a: number): RGBA => [r, g, b, a];
const white: RGBA = [255, 255, 255, 1];

const textColor = hexToRGB('#eeeeee');

const colorsDefinitions = {
    white: hexToRGB('#ffffff'),
    backgroundHover: [210, 210, 210, 0.4],
    board: hexToRGB('#23252A'),
    boardBorder: hexToRGB('#aaaaaa'),
    bodyBackground: hexToRGB('#23252A'),
    text: hexToRGB('#eeeeee'),
    textInverted: hexToRGB('#23252A'),
    textMuted: alpha(textColor, 0.65),
    role: {
        workingClass: hexToRGB('#ED1C25'),
        middleClass: hexToRGB('#FFC20D'),
        capitalist: hexToRGB('#0389CF'),
        state: hexToRGB('#939598'),
    } satisfies Record<RoleName, RGBA>,
    industry: {
        food: hexToRGB('#7F913E'),
        luxury: hexToRGB('#008CC5'),
        healthcare: hexToRGB('#EF1217'),
        education: hexToRGB('#EA8D00'),
        influence: hexToRGB('#961A83'),
    } satisfies Record<Industry, RGBA>,
    resource: {
        food: hexToRGB('#80923E'),
        luxury: hexToRGB('#008DC6'),
        healthcare: hexToRGB('#EF1217'),
        education: hexToRGB('#EA8D00'),
        influence: hexToRGB('#951A81'),
        money: white,
    } satisfies Record<Resource, RGBA>,
    worker: {
        unskilled: hexToRGB('#bbbbbb'),
        food: hexToRGB('#94C11C'),
        luxury: hexToRGB('#6CC6DF'),
        healthcare: hexToRGB('#ffffff'),
        education: hexToRGB('#FFCF32'),
        influence: hexToRGB('#CD81B4'),
    } satisfies Record<CompanyWorkerType, RGBA>,
    policies: {
        fiscalPolicy: hexToRGB('#0285B7'),
        laborMarket: hexToRGB('#716C9F'),
        taxation: hexToRGB('#AA56A1'),
        healthcare: hexToRGB('#C4161B'),
        education: hexToRGB('#CC7B16'),
        foreignTrade: hexToRGB('#A3815B'),
        immigration: hexToRGB('#6E6D74'),
    } satisfies Record<PolicyName, RGBA>,
} satisfies Record<string, RGBA | Record<string, RGBA>>;

type Definitions = typeof colorsDefinitions;

const expanded = expand();

const colors = expanded.colors;
export const colorsRGBA = expanded.colorParams;
export default colors;

export function defineColors() {
    document.getElementById('generated-colors')?.remove();

    const styleTag = document.createElement('style');
    styleTag.id = 'generated-colors';
    styleTag.dataset.generated = 'client/src/utils/colors.ts';
    styleTag.innerHTML = [
        '/** ‼️ generated via client/src/utils/colors.ts ‼️ */',
        '',
        ':root {',
        ...expanded.definitions
            .map(({ varDefine, paramDefine }) => ['    ' + varDefine, '    ' + paramDefine])
            .flat(),
        '}',
    ].join('\n');
    document.head.prepend(styleTag);
}

function expand() {
    type Definition = { var: string; varDefine: string; paramVar: string; paramDefine: string };
    type ConvertColor<T extends RGBA | Record<string, RGBA>, O> = T extends RGBA
        ? O
        : { [k in keyof T]: O };

    const definitions: Definition[] = [];
    const colors: { [k in keyof Definitions]: ConvertColor<Definitions[k], string> } = {} as any;
    const coloraRGBA: { [k in keyof Definitions]: ConvertColor<Definitions[k], RGBA> } = {} as any;

    const convert = (k: string, v: RGBA): Definition => {
        const varName = k + 'Color';
        return {
            var: `var(--${varName})`,
            varDefine: `--${varName}: ` + `rgb${v.length === 4 ? 'a' : ''}(${v.join(', ')});`,
            paramVar: `var(--${varName}Params)`,
            paramDefine: `--${varName}Params: ${v.join(', ')};`,
        };
    };

    for (const [k, v] of objectEntries(colorsDefinitions)) {
        if (Array.isArray(v)) {
            const result = convert(k, v);
            _.set(colors, [k], result.var);
            _.set(coloraRGBA, [k], result.paramVar);
            definitions.push(result);
            continue;
        }

        _.set(colors, [k], {});
        _.set(coloraRGBA, [k], {});
        for (const [k2, v2] of objectEntries(v)) {
            const result = convert(k + _.capitalize(k2), v2);
            _.set(colors, [k, k2], result.var);
            _.set(coloraRGBA, [k, k2], result.paramVar);
            definitions.push(result);
        }
    }

    return { colors, colorParams: coloraRGBA, definitions };
}
