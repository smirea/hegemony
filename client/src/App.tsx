import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import { observer } from 'mobx-react';
import appProvider from './utils/appProvider';
import { ReactQueryProvider } from './utils/setupReactQuery';

const App = () => {
    return (
        <ReactQueryProvider>
            <Root>
                <b>Mein react starter</b>
                <p>rsbuild, emotion (styled-components)</p>
                <MobXDemo />
                <ReactQueryDemo />
            </Root>
        </ReactQueryProvider>
    );
};

export default App;

const MobXDemo = observer(() => {
    return (
        <div>
            Mobx Demo: theme = {appProvider.state.theme}{' '}
            <button
                type='button'
                onClick={() =>
                    appProvider.update({
                        theme: appProvider.state.theme === 'dark' ? 'light' : 'dark',
                    })
                }
            >
                change theme
            </button>
        </div>
    );
});

const ReactQueryDemo = () => {
    const { isPending, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () => fetch('https://api.github.com/repos/TanStack/query').then(res => res.json()),
    });

    if (isPending) return 'Loading...';

    if (error) return 'An error has occurred: ' + error.message;

    return (
        <div>
            <h1>react query demo: {data.name}</h1>
            <p>{data.description}</p>
            <strong>👀 {data.subscribers_count}</strong> <strong>✨ {data.stargazers_count}</strong>{' '}
            <strong>🍴 {data.forks_count}</strong>
        </div>
    );
};

const Root = styled.div`
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background: white;
    min-height: 100vh;
    margin: 0 4rem;
    padding: 2rem;
`;
