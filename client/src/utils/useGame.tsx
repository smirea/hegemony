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

        game.data.roles.capitalist.data.companyDeck.shuffle = () => {};
        game.data.roles.middleClass.data.companyDeck.shuffle = () => {};

        game.setupBoard();
        game.setupRound();
        game.data.currentRoleName = 'workingClass';

        game.data.board.policyProposals.fiscalPolicy = {
            role: 'workingClass',
            value: 1,
        };
        game.data.board.policyProposals.laborMarket = {
            role: 'middleClass',
            value: 0,
        };
        game.data.board.policyProposals.taxation = {
            role: 'capitalist',
            value: 1,
        };
        game.data.board.policyProposals.education = {
            role: 'state',
            value: 1,
        };

        game.data.roles.capitalist.data.companies[1].automationToken = true;

        game.data.roles.capitalist.data.companies.push({
            id: game.data.roles.capitalist.data.companyDeck.drawById('c-car-manufacturer-1').id,
            workers: [],
            wages: 'l2',
            automationToken: false,
        });

        game.data.roles.middleClass.data.companyMarket.pop();

        return game;
    }, []);

    return <GameContext.Provider value={game}>{children}</GameContext.Provider>;
};

export default useGame;
