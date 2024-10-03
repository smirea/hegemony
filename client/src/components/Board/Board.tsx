import styled from '@emotion/styled';
import { observer } from 'mobx-react';
import useGame from 'client/utils/useGame';

import BoardPolicies from './BoardPolicies';
// import CompanyGrid from './CompanyGrid';
import CompanyCard from '../CompanyCard';

const Board: React.FC = observer(() => {
    const game = useGame();

    return (
        <Root>
            <div className='row' data-spacing='.5'>
                <CompanyCard company={game.data.roles.capitalist.data.companies[0]} />
                <CompanyCard company={game.data.roles.capitalist.data.companies[1]} />
                <CompanyCard company={game.data.roles.capitalist.data.companies[2]} />
                <CompanyCard company={game.data.roles.capitalist.data.companies[3]} />
                <CompanyCard company={game.data.roles.capitalist.data.companies[4]} />
                <CompanyCard company={game.data.roles.middleClass.data.companies[0]} />
                <CompanyCard company={game.data.roles.middleClass.data.companies[1]} />
                <CompanyCard company={game.data.roles.state.data.companies[0]} />
                <CompanyCard company={game.data.roles.state.data.companies[1]} />
                <CompanyCard company={game.data.roles.state.data.companies[2]} />
            </div>
            <div className='row my1' data-spacing='.5'>
                <CompanyCard minimal company={game.data.roles.capitalist.data.companies[0]} />
                <CompanyCard minimal company={game.data.roles.capitalist.data.companies[1]} />
                <CompanyCard minimal company={game.data.roles.capitalist.data.companies[2]} />
                <CompanyCard minimal company={game.data.roles.capitalist.data.companies[3]} />
                <CompanyCard minimal company={game.data.roles.capitalist.data.companies[4]} />
                <CompanyCard minimal company={game.data.roles.middleClass.data.companies[0]} />
                <CompanyCard minimal company={game.data.roles.middleClass.data.companies[1]} />
                <CompanyCard minimal company={game.data.roles.state.data.companies[0]} />
                <CompanyCard minimal company={game.data.roles.state.data.companies[1]} />
                <CompanyCard minimal company={game.data.roles.state.data.companies[2]} />
            </div>
            <br />
            <BoardPolicies />
            {/* <CompanyGrid
                companies={game.data.roles.capitalist.data.companies}
                width={12}
                height={1}
            /> */}
        </Root>
    );
});

export default Board;

const Root = styled.div`
    background: var(--board-color);
    padding: 1rem;
`;
