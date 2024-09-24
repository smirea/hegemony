import React, { useContext, useMemo, useState } from 'react';
import Game from 'shared/logic/Game';

const GameContext = React.createContext<Game>(null as any);
const useGame = () => useContext(GameContext);

export const GameContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [refresh, setRefresh] = useState(0);

    const game = useMemo(() => {
        const game = new Game({
            // debug: true,
            players: [
                {
                    name: 'Player 1',
                    role: 'workingClass',
                },
            ],
            requestPlayerInput: async () => {},
        });

        game.setupBoard();
        game.setupRound();
        game.data.currentRoleName = 'workingClass';

        game.data.board.policyProposals.fiscalPolicy = {
            role: 'workingClass',
            value: 1,
        };
        game.data.board.policyProposals.education = {
            role: 'workingClass',
            value: 2,
        };
        return game;
    }, []);

    const value = useMemo(() => {
        return {
            data: game.data,
            next: ((...args: any[]) => {
                // @ts-ignore
                game.next(...args);
                setRefresh(refresh + 1);
            }) as typeof game.next,
            tick: async () => {
                await game.tick();
                setRefresh(refresh + 1);
            },
        };
    }, [game, refresh]);

    return <GameContext.Provider value={value as any}>{children}</GameContext.Provider>;
};

export default useGame;
