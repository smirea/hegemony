import styled from '@emotion/styled';
import useGame from 'client/utils/useGame';
import { observer } from 'mobx-react';
import colors, { colorsRGBA } from 'client/utils/colors';
import _ from 'lodash';
import { type ResourcePriceLevel, type TradeableResource } from 'shared/logic/types';

import TrackCounter from './TrackCounter';
import MiddleClassPopulationIcon from './icons/MiddleClassPopulationIcon';
import MiddleClassWorkerPlacementIcon from './icons/MiddleClassWorkerPlacementIcon';
import ProsperityIcon from './icons/ProsperityIcon';
import RoleIcon from './RoleIcon';
import CompanyCardPlacement from './CompanyCardPlacement';
import CompanyCard from './CompanyCard';
import Value from './Value';
import ResourceIcon from './ResourceIcon';

// import ProsperityIcon from './icons/ProsperityIcon';

const MiddleClassRole: React.FC = observer(() => {
    const game = useGame();

    const role = game.data.roles.middleClass;
    const market = role.data.companyMarket;
    const resources = role.data.resources;
    const prosperity = role.data.prosperityIndex.value;
    const defaultWages = game.getWageId();

    return (
        <Root>
            <div className='row' data-align='center' data-spacing='1'>
                <RoleIcon role='middleClass' size={4} />
                <div>
                    <div className='row' data-spacing='1'>
                        <Value
                            v={resources.money.value}
                            icon={p => <ResourceIcon {...p} name='money' />}
                        />
                        <Value
                            v={resources.food.value}
                            icon={p => <ResourceIcon {...p} name='food' />}
                        />
                        <Value
                            v={resources.luxury.value}
                            icon={p => <ResourceIcon {...p} name='luxury' />}
                        />
                        <Value
                            v={resources.healthcare.value}
                            icon={p => <ResourceIcon {...p} name='healthcare' />}
                        />
                        <Value
                            v={resources.education.value}
                            icon={p => <ResourceIcon {...p} name='education' />}
                        />
                        <Value
                            v={resources.influence.value}
                            icon={p => <ResourceIcon {...p} name='influence' />}
                        />
                        <div style={{ flex: '1 1 0' }} />
                        <Value
                            icon={p => <ProsperityIcon {...p} role='middleClass' />}
                            v={prosperity}
                        />
                    </div>
                    <div className='row' data-align='center' data-spacing='.5'>
                        <div
                            className='row'
                            data-align='center'
                            data-justify='center'
                            style={{ width: '1rem' }}
                        >
                            <MiddleClassWorkerPlacementIcon
                                height={1.25}
                                color={colors.role.middleClass}
                            />
                        </div>
                        <TrackCounter
                            index={10}
                            format='square'
                            tracks={_.range(10, 31)}
                            color={colors.role.middleClass}
                        />
                    </div>
                    <div className='row' data-align='center' data-spacing='.5'>
                        <div
                            className='row'
                            data-align='center'
                            data-justify='center'
                            style={{ width: '1rem' }}
                        >
                            <MiddleClassPopulationIcon
                                height={1.25}
                                color={colors.role.middleClass}
                            />
                        </div>
                        <TrackCounter
                            index={3}
                            format='square'
                            tracks={_.range(3, 11)}
                            trackSizes={[2, 3, 3, 3, 3, 3, 3, 1]}
                            color={colors.role.middleClass}
                        />
                    </div>
                    <div className='row' data-align='center' data-spacing='.5'>
                        <div
                            className='row'
                            data-align='center'
                            data-justify='center'
                            style={{ width: '1rem' }}
                        >
                            <ProsperityIcon role='middleClass' height={1} />
                        </div>
                        <TrackCounter
                            index={prosperity}
                            format='round'
                            tracks={role.prosperityValues}
                            color={colors.role.middleClass}
                        />
                    </div>
                </div>
            </div>
            <div className='row mt1' data-align='center' data-spacing='.5'>
                {[0, 1, 2].map(i =>
                    market[i] ? (
                        <CompanyCard
                            key={i}
                            format='tiny'
                            company={{ id: market[i], workers: [], wages: defaultWages }}
                        />
                    ) : (
                        <CompanyCardPlacement format='tiny' key={i} role='middleClass' />
                    ),
                )}
            </div>
            <div className='row mt1' data-align='center' data-spacing='.5'>
                <ResourceProduction
                    resource='food'
                    amount={resources.food.value}
                    price={0}
                    prices={[9, 12, 15]}
                    storage={role.data.storage.food}
                    maxStorage={8 + (role.data.storage.food ? 8 : 0)}
                />
                <ResourceProduction
                    resource='luxury'
                    amount={resources.luxury.value}
                    price={0}
                    prices={[9, 12, 15]}
                    storage={role.data.storage.luxury}
                    maxStorage={12 + (role.data.storage.luxury ? 12 : 0)}
                />
                <ResourceProduction
                    resource='healthcare'
                    amount={resources.healthcare.value}
                    price={0}
                    prices={[9, 12, 15]}
                    storage={role.data.storage.healthcare}
                    maxStorage={12 + (role.data.storage.healthcare ? 12 : 0)}
                />
                <ResourceProduction
                    resource='education'
                    amount={resources.education.value}
                    price={0}
                    prices={[9, 12, 15]}
                    storage={role.data.storage.education}
                    maxStorage={12 + (role.data.storage.education ? 12 : 0)}
                />
            </div>
        </Root>
    );
});

export default MiddleClassRole;

const ResourceProduction: React.FC<{
    resource: TradeableResource;
    amount: number;
    storage?: boolean;
    maxStorage: number;
    price: ResourcePriceLevel;
    prices: [number, number, number];
}> = ({ resource, amount: value, price: price, prices, maxStorage }) => {
    const color = colors.resource[resource];
    return (
        <ResourceProductionRoot color={color}>
            <IconContainer color={color}>
                <ResourceIcon name={resource} height={1} color='white' />
            </IconContainer>
            <div className='row' data-align='center' data-spacing='.25'>
                <div>{value}</div>
                <div style={{ color: colors.textMuted, fontSize: '.875rem' }}>/ {maxStorage}</div>
            </div>
            <ResourcePrice color={color}>
                <div>{prices[price]}</div>
                <ResourceIcon name='money' height={0.75} color='white' />
            </ResourcePrice>
        </ResourceProductionRoot>
    );
};

const Root = styled.div`
    border-radius: 8px;
    box-shadow: 0 0 0 4px ${colors.role.middleClass} inset;
    background: rgba(${colorsRGBA.board}, 0.75);
    color: ${colors.text};
    padding: 1rem;
`;

const ResourceProductionRoot = styled.div<{ color: string }>`
    flex: 0 0 auto;
    display: flex;
    align-items: stretch;
    gap: 1rem;
    box-shadow: 0 0 0 2px ${p => p.color} inset;
    border-radius: 4px;

    > * {
        flex: 0 0 auto;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
    }

    > *:first-of-type {
        border-top-left-radius: inherit;
        border-bottom-left-radius: inherit;
    }

    > *:last-of-type {
        border-top-right-radius: inherit;
        border-bottom-right-radius: inherit;
    }
`;

const IconContainer = styled.div<{ color: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    background: ${p => p.color};
`;

const ResourcePrice = styled.div<{ color: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${p => p.color};
    color: white;
    padding: 0.5rem;
    min-width: 2rem;
    gap: 0.125rem;
`;
