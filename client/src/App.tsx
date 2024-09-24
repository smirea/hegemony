import Game from './components/Game';
import { ReactQueryProvider } from './utils/setupReactQuery';

const App = () => {
    return (
        <ReactQueryProvider>
            <Game />
        </ReactQueryProvider>
    );
};

export default App;
