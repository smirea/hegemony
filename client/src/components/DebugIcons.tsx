import styled from '@emotion/styled';

// @ts-ignore
const requireAll = require.context('client/components/icons', true, /\.tsx$/);

const icons: [string, { default: React.FC<any> }][] = requireAll
    .keys()
    .map((fileName: string) => [fileName, requireAll(fileName)])
    .sort(([fileNameA]: [string], [fileNameB]: [string]) => fileNameA.localeCompare(fileNameB));

export default function DebugIcons() {
    const Target =
        location.hash &&
        icons.find(i => i[0].toLowerCase().includes(location.hash.slice(1).toLowerCase()))?.[1]
            .default;
    return (
        <Root>
            <h3>DebugIcons</h3>
            {Target && (
                <div className='row' style={{ margin: '0 auto', gap: '5rem' }}>
                    <Target height={20} style={{ border: '1px solid red' }} />
                    <Target height={20} color='orange' style={{ border: '1px solid red' }} />
                </div>
            )}
            <table>
                <tbody>
                    {icons.map(([fileName, { default: Icon }]) => {
                        if (!Icon) return null;
                        return (
                            <tr key={fileName}>
                                <td>
                                    <a
                                        href={'#' + fileName.slice(2, -4)}
                                        onClick={() => {
                                            setTimeout(() => location.reload(), 100);
                                        }}
                                    >
                                        {fileName}
                                    </a>
                                </td>
                                <td>
                                    <Icon height={4} />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Root>
    );
}

const Root = styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    a {
        color: white;
    }

    table {
        align-self: flex-start;
    }
`;
