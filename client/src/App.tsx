import DebugIcons from './components/DebugIcons';
import Game from './components/Game';
import { ReactQueryProvider } from './utils/setupReactQuery';

const App = () => {
    if (location.pathname.startsWith('/debug-icons')) return <DebugIcons />;

    return (
        <ReactQueryProvider>
            <Game />
        </ReactQueryProvider>
    );
};

export default App;
