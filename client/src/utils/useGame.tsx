import React, { useContext, useMemo } from 'react';
import Game from 'shared/logic/Game';

const GameContext = React.createContext<Game>(null as any);
const useGame = () => useContext(GameContext);

export const GameContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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

        game.data.roles.capitalist.data.companies[1].automationToken = true;

        game.data.roles.capitalist.data.companies.push({
            id: game.data.roles.capitalist.data.companyDeck.drawById('c-car-manufacturer-1').id,
            workers: [],
            wages: 'l2',
            automationToken: false,
        });

        return game;
    }, []);

    return <GameContext.Provider value={game}>{children}</GameContext.Provider>;
};

export default useGame;
