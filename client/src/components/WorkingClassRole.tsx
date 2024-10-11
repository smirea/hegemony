import styled from '@emotion/styled';
import React from 'react';
import _ from 'lodash';
import { objectEntries } from 'shared/utils/ts';
import { observer } from 'mobx-react';
import useGame from 'client/utils/useGame';
import { type Industry } from 'shared/logic/types';

import Value from './Value';
import WorkingClassIcon from './icons/WorkingClassIcon';
import ResourceIcon from './ResourceIcon';
import ProsperityIcon from './icons/ProsperityIcon';
import WorkerIcon from './icons/WorkerIcon';

const WorkingClassRole: React.FC = observer(() => {
    const game = useGame();

    const workers = game.data.roles.workingClass.data.workers;
    const population = game.data.roles.workingClass.getPopulation();
    const prosperity = game.data.roles.workingClass.data.prosperityIndex.value;
    // const unions = game.data.roles.workingClass.data.unions;
    const unions = {
        luxury: true,
        healthcare: true,
    } as Record<Industry, boolean>;
    const unionCounts = {
        food: 0,
        luxury: 4,
        healthcare: 2,
        education: 6,
        influence: 1,
    };
    const resources = game.data.roles.workingClass.data.resources;

    return (
        <Root>
            <div className='row' data-spacing='.5' style={{ alignItems: 'center' }}>
                <WorkingClassIcon height={4} />
                <div className='column py05' data-spacing='.25'>
                    <div className='row' data-spacing='.25'>
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
                            icon={p => <ProsperityIcon {...p} role='workingClass' />}
                            v={prosperity}
                        />
                    </div>
                    <div className='column'>
                        <div className='row' style={{ fontSize: '.75rem' }}>
                            {_.range(10, 31).map(i => (
                                <TrackSquare key={i} data-highlighted={i === workers.length}>
                                    {i}
                                </TrackSquare>
                            ))}
                        </div>
                        <div className='row'>
                            <TrackSquare data-size={2} data-highlighted={population === 3}>
                                3
                            </TrackSquare>
                            <TrackSquare data-size={3} data-highlighted={population === 4}>
                                4
                            </TrackSquare>
                            <TrackSquare data-size={3} data-highlighted={population === 5}>
                                5
                            </TrackSquare>
                            <TrackSquare data-size={3} data-highlighted={population === 6}>
                                6
                            </TrackSquare>
                            <TrackSquare data-size={3} data-highlighted={population === 7}>
                                7
                            </TrackSquare>
                            <TrackSquare data-size={3} data-highlighted={population === 8}>
                                8
                            </TrackSquare>
                            <TrackSquare data-size={3} data-highlighted={population === 9}>
                                9
                            </TrackSquare>
                            <TrackSquare data-size={1} data-highlighted={population === 10}>
                                10
                            </TrackSquare>
                        </div>
                    </div>
                </div>
                <div className='column p05' data-spacing='.5' data-align='stretch'>
                    <b style={{ textAlign: 'center' }}>{_.filter(unions).length} Unions</b>
                    <div className='row' data-spacing='.25' style={{ minWidth: '6rem' }}>
                        {objectEntries(unionCounts).map(([industry, count]) => (
                            <div
                                key={industry}
                                className='column'
                                style={{ flex: '1 1 0', alignItems: 'center' }}
                                data-spacing='.25'
                            >
                                <WorkerIcon
                                    height={2}
                                    role='workingClass'
                                    type={industry}
                                    status={unions[industry] ? 'uncommitted' : 'empty'}
                                />
                                <div style={{ fontSize: '.875rem' }}>{count}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Root>
    );
});

export default WorkingClassRole;

const Root = styled.div`
    display: inline-flex;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 0 0 4px var(--working-class-color) inset;
    background: rgba(var(--board-color-params), 0.75);
    color: var(--text-color);
    padding: 1rem;
`;

const TrackSquare = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1rem;
    padding: 0.125rem 0.25rem;

    & + & {
        box-shadow: -1px 0 0 0 var(--text-color);
    }

    &[data-size='2'] {
        width: 3rem;
    }
    &[data-size='3'] {
        width: 4.5rem;
    }

    &[data-highlighted='true'] {
        background: var(--working-class-color);
        color: var(--text-color);
        font-weight: bold;
    }
`;
