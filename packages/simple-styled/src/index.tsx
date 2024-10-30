export {};

// interface StyledHOCProps {
//     className?: string;
//     style?: React.CSSProperties;
// }

// const StyledHOC: React.FC<StyledHOCProps> = ({ children, className }) => {
//     return <div className={className}>{children}</div>;
// }

// const styled = (css: string, dataset?: Record<string, string>) => {
//     const name = 'Foo';
//     registerCSS({ name: 'Foo', css });
//     for (const [k, v] of Object.entries(dataset ?? {})) {
//         registerCSS({ name: k, css: v, data: k });
//     }
// }

// function registerCSS({ name, css }: { name: string; css: string }) {
//     if (!/^[A-Z][a-zA-Z]+$/.test(name)) {
//         throw new Error(`Invalid react simple styled component name: '${name}'`);
//     }

//     const id = `styled-${name}`;
//     document.querySelector(`style#${id}`)?.remove();

//     const styleTag = document.createElement('style');
//     styleTag.id = id;
//     styleTag.innerHTML = [
//         '/** ‼️ generated via simple-styled ‼️ */',
//         '',
//         `.${name} {`,
//         css,
//         '}',
//     ].join('\n');
//     document.head.prepend(styleTag);
// }

// const ExampleDiv = <Example format='warning' selected bold={false}>1235</Example>

// function styled<T extends Record<string, string | boolean> | undefined = undefined>(
//     css: string,
//     dataset?: T extends undefined ? never : {

//     }
// ) {

// }

// const Example = styled<{ format: 'ok' | 'warn' | 'error', selected?: boolean, bold?: boolean }>(`
//     padding: 1rem;
// `, {
//     'format=ok': ``,
//     'format=warn': ``,
//     'format=error': ``,
//     selected: 'background-color: red;',
//     bold: 'font-weight: bold;',
//     custom: `

//     `;
// });
