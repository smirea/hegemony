import styled from '@emotion/styled';
import { GameContextProvider } from 'client/utils/useGame';

import Board from './Board/Board';
import WorkingClassRole from './WorkingClassRole';
import GameDebugger from './GameDebugger';
import MiddleClassRole from './MiddleClassRole';

const Game: React.FC = () => {
    return (
        <GameContextProvider>
            <Root>
                <MiddleClassRole />
                <br />
                <WorkingClassRole />
                <br />
                <br />
                <Board />
                <br />
                <GameDebugger />
            </Root>
        </GameContextProvider>
    );
};

export default Game;

const Root = styled.div`
    padding: 1rem;
`;
