type RGBA = [number, number, number, number?];

const hexToRGB = (hex: string): RGBA => {
    hex = hex.replace(/^#/, '');
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    return [
        parseInt(hex.slice(0, 2), 16),
        parseInt(hex.slice(2, 4), 16),
        parseInt(hex.slice(4, 6), 16),
    ];
};

const colors = {
    'body-background': hexToRGB('#23252A'),
    'text-color': hexToRGB('#eeeeee'),
    'text-color-inverted': hexToRGB('#23252A'),
    'background-hover': [210, 210, 210, 0.4],

    'board-border-color': hexToRGB('#aaa'),
    'board-color': hexToRGB('#23252A'),
    'board-text': hexToRGB('#eee'),

    'working-class-color': hexToRGB('#ED1C25'),
    'middle-class-color': hexToRGB('#FFC20D'),
    'capitalist-color': hexToRGB('#0389CF'),
    'state-color': hexToRGB('#939598'),

    'policy-fiscalPolicy-color': hexToRGB('#0285B7'),
    'policy-laborMarket-color': hexToRGB('#716C9F'),
    'policy-taxation-color': hexToRGB('#AA56A1'),
    'policy-healthcare-color': hexToRGB('#C4161B'),
    'policy-education-color': hexToRGB('#CC7B16'),
    'policy-foreignTrade-color': hexToRGB('#A3815B'),
    'policy-immigration-color': hexToRGB('#6E6D74'),

    'industry-food-color': hexToRGB('#63793E'),
    'industry-luxury-color': hexToRGB('#326EA9'),
    'industry-healthcare-color': hexToRGB('#EF1217'),
    'industry-education-color': hexToRGB('#C97A19'),
    'industry-influence-color': hexToRGB('#5C2B7D'),

    'worker-unskilled-color': hexToRGB('#babebc'),
    'worker-food-color': hexToRGB('#86BE3A'),
    'worker-luxury-color': hexToRGB('#01A7D9'),
    'worker-healthcare-color': hexToRGB('#fafafa'),
    'worker-education-color': hexToRGB('#EDA537'),
    'worker-influence-color': hexToRGB('#C94F96'),

    'resource-food-color': hexToRGB('#8FA955'),
    'resource-luxury-color': hexToRGB('#0389CF'),
    'resource-healthcare-color': hexToRGB('#ED1C25'),
    'resource-education-color': hexToRGB('#F7941F'),
    'resource-influence-color': hexToRGB('#92288F'),
} satisfies Record<string, RGBA>;

export default function defineColors() {
    document.getElementById('generated-colors')?.remove();

    const styleTag = document.createElement('style');
    styleTag.id = 'generated-colors';
    styleTag.dataset.generated = 'defineColors.ts';
    styleTag.innerHTML = [
        ':root {',
        ...Object.entries(colors)
            .map(([name, value]) => [
                `    --${name}: rgb${value.length === 4 ? 'a' : ''}(${value.join(', ')});`,
                `    --${name}-params: ${value.join(', ')};`,
            ])
            .flat(),
        '}',
    ].join('\n');
    document.head.prepend(styleTag);
}
