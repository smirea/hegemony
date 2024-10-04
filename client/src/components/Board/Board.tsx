import styled from '@emotion/styled';
import { observer } from 'mobx-react';
import useGame from 'client/utils/useGame';

import BoardPolicies from './BoardPolicies';
// import CompanyGrid from './CompanyGrid';
import CompanyCard from '../CompanyCard';
import CompanyCardPlacement from '../CompanyCardPlacement';

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
                <CompanyCardPlacement role='capitalist' />
                <CompanyCardPlacement role='capitalist' />
                <CompanyCardPlacement role='capitalist' />
                <CompanyCardPlacement role='capitalist' />
                <CompanyCardPlacement role='capitalist' />
                <CompanyCardPlacement role='capitalist' />
                <CompanyCardPlacement role='capitalist' />
            </div>
            <div className='row mt1' data-spacing='.5'>
                <CompanyCard company={game.data.roles.middleClass.data.companies[0]} />
                <CompanyCard company={game.data.roles.middleClass.data.companies[1]} />
                <CompanyCardPlacement role='middleClass' />
                <CompanyCardPlacement role='middleClass' />
                <CompanyCardPlacement role='middleClass' />
                <CompanyCardPlacement role='middleClass' />
                <CompanyCardPlacement role='middleClass' />
                <CompanyCardPlacement role='middleClass' />
                <CompanyCardPlacement role='middleClass' />
                <CompanyCardPlacement role='middleClass' />
            </div>
            <div className='row mt1' data-spacing='.5'>
                <CompanyCard company={game.data.roles.state.data.companies[0]} />
                <CompanyCard company={game.data.roles.state.data.companies[1]} />
                <CompanyCard company={game.data.roles.state.data.companies[2]} />
                <CompanyCardPlacement role='state' />
                <CompanyCardPlacement role='state' />
                <CompanyCardPlacement role='state' />
                <CompanyCardPlacement role='state' />
                <CompanyCardPlacement role='state' />
                <CompanyCardPlacement role='state' />
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
