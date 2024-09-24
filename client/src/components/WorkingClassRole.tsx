import styled from '@emotion/styled';
import React from 'react';
import _ from 'lodash';
import { objectEntries } from 'shared/utils/ts';

import Value from './Value';
import WorkingClassIcon from './icons/WorkingClassIcon';
import WorkingClassWorkerIcon from './icons/WorkingCassWorkerIcon';

const WorkingClassRole: React.FC = () => {
    const workers = 21;
    const population = 7;
    const prosperity = 3;
    const unions = {
        food: false,
        luxury: true,
        healthcare: false,
        education: true,
        influence: false,
    };
    const unionCounts = {
        food: 0,
        luxury: 4,
        healthcare: 2,
        education: 6,
        influence: 1,
    };
    const resources = {
        money: 42,
        food: 5,
        luxury: 3,
        healthcare: 2,
        education: 0,
        media: 3,
    };

    return (
        <Root>
            <div className='row' data-spacing='.5' style={{ alignItems: 'center' }}>
                <WorkingClassIcon size={4} color='white' />
                <div className='column py05' data-spacing='.25'>
                    <div className='row' data-spacing='.25'>
                        <Value icon='money' v={resources.money} />
                        <Value icon='food' v={resources.food} />
                        <Value icon='luxury' v={resources.luxury} />
                        <Value icon='healthcare' v={resources.healthcare} />
                        <Value icon='education' v={resources.education} />
                        <Value icon='media' v={resources.media} />
                        <div style={{ flex: '1 1 0' }} />
                        <Value icon='prosperity' v={prosperity} />
                    </div>
                    <div className='column'>
                        <div className='row' style={{ fontSize: '.75rem' }}>
                            {_.range(10, 31).map(i => (
                                <TrackSquare key={i} data-highlighted={i === workers}>
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
                <div
                    className='column'
                    data-spacing='.5'
                    style={{
                        padding: '.5rem 1rem',
                        background: 'var(--board-color)',
                        alignSelf: 'stretch',
                    }}
                >
                    <b style={{ textAlign: 'center' }}>{_.filter(unions).length} Unions</b>
                    <div className='row' data-spacing='.25' style={{ minWidth: '10rem' }}>
                        {objectEntries(unions).map(([industry, active]) => (
                            <div
                                key={industry}
                                className='column'
                                style={{ flex: '1 1 0', alignItems: 'center' }}
                                data-spacing='.25'
                            >
                                <UnionBox key={industry} data-type={industry}>
                                    <WorkingClassWorkerIcon
                                        height={2}
                                        type={industry}
                                        color={active ? undefined : 'var(--board-color)'}
                                    />
                                </UnionBox>
                                <div style={{ fontSize: '.875rem' }}>{unionCounts[industry]}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Root>
    );
};

export default WorkingClassRole;

const Root = styled.div`
    display: inline-flex;
    overflow: hidden;
    border-radius: 8px;
    background: var(--wc-color);
    color: var(--text-color);
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
        background: var(--background-hover);
        color: var(--text-color);
        font-weight: bold;
    }
`;

const UnionBox = styled.div`
    flex: 1 1 0;
    align-self: stretch;
    border-radius: 8px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;

    > * {
        margin-left: -0.125rem;
    }

    &[data-type='food'] {
        background: var(--industry-food-color);
    }
    &[data-type='luxury'] {
        background: var(--industry-luxury-color);
    }
    &[data-type='healthcare'] {
        background: var(--industry-healthcare-color);
    }
    &[data-type='education'] {
        background: var(--industry-education-color);
    }
    &[data-type='influence'] {
        background: var(--industry-influence-color);
    }
`;
