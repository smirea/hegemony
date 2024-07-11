import styled from '@emotion/styled';

const App = () => {
    return (
        <Root>
            <b>Mein react starter</b>
            <p>rsbuild, emotion (styled-components)</p>
        </Root>
    );
};

export default App;

const Root = styled.div`
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background: white;
    min-height: 100vh;
    margin: 0 4rem;
    padding: 2rem;
`;
