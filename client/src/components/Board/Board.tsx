import styled from '@emotion/styled';
import { observer } from 'mobx-react';
import useGame from 'client/utils/useGame';

import BoardPolicies from './BoardPolicies';
import CompanyCard from '../CompanyCard';
import CompanyCardPlacement from '../CompanyCardPlacement';

const Board: React.FC = observer(() => {
    const game = useGame();

    const format = 'tiny';

    return (
        <Root>
            <div className='row' data-spacing='.5'>
                <CompanyCard
                    format={format}
                    company={game.data.roles.capitalist.data.companies[0]}
                />
                <CompanyCard
                    format={format}
                    company={game.data.roles.capitalist.data.companies[1]}
                />
                <CompanyCard
                    format={format}
                    company={game.data.roles.capitalist.data.companies[2]}
                />
                <CompanyCard
                    format={format}
                    company={game.data.roles.capitalist.data.companies[3]}
                />
                <CompanyCard
                    format={format}
                    company={game.data.roles.capitalist.data.companies[4]}
                />
                <CompanyCardPlacement format={format} role='capitalist' />
                <CompanyCardPlacement format={format} role='capitalist' />
                <CompanyCardPlacement format={format} role='capitalist' />
                <CompanyCardPlacement format={format} role='capitalist' />
                <CompanyCardPlacement format={format} role='capitalist' />
                <CompanyCardPlacement format={format} role='capitalist' />
                <CompanyCardPlacement format={format} role='capitalist' />
            </div>
            <div className='row mt1' data-spacing='.5'>
                <CompanyCard
                    format={format}
                    company={game.data.roles.middleClass.data.companies[0]}
                />
                <CompanyCard
                    format={format}
                    company={game.data.roles.middleClass.data.companies[1]}
                />
                <CompanyCardPlacement format={format} role='middleClass' />
                <CompanyCardPlacement format={format} role='middleClass' />
                <CompanyCardPlacement format={format} role='middleClass' />
                <CompanyCardPlacement format={format} role='middleClass' />
                <CompanyCardPlacement format={format} role='middleClass' />
                <CompanyCardPlacement format={format} role='middleClass' />
                <CompanyCardPlacement format={format} role='middleClass' />
                <CompanyCardPlacement format={format} role='middleClass' />
            </div>
            <div className='row mt1' data-spacing='.5'>
                <CompanyCard format={format} company={game.data.roles.state.data.companies[0]} />
                <CompanyCard format={format} company={game.data.roles.state.data.companies[1]} />
                <CompanyCard format={format} company={game.data.roles.state.data.companies[2]} />
                <CompanyCardPlacement format={format} role='state' />
                <CompanyCardPlacement format={format} role='state' />
                <CompanyCardPlacement format={format} role='state' />
                <CompanyCardPlacement format={format} role='state' />
                <CompanyCardPlacement format={format} role='state' />
                <CompanyCardPlacement format={format} role='state' />
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

const Root = styled.div``;
