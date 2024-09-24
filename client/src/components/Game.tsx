import styled from '@emotion/styled';
import { GameContextProvider } from 'client/utils/useGame';

import Board from './Board/Board';
import WorkingClassRole from './WorkingClassRole';
import GameDebugger from './GameDebugger';

const Game: React.FC = () => {
    return (
        <GameContextProvider>
            <Root>
                <Board />
                <br />
                <WorkingClassRole />
                <GameDebugger />
            </Root>
        </GameContextProvider>
    );
};

export default Game;

const Root = styled.div`
    padding: 1rem;
`;
