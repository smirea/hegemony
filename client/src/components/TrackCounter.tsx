import styled from '@emotion/styled';
import colors from 'client/utils/colors';
import React from 'react';

export interface TrackCounterProps {
    format: 'round' | 'square';
    index: number;
    color: string;
    readonly tracks: ReadonlyArray<number>;
    readonly trackSizes?: ReadonlyArray<number>;
}

const TrackCounter: React.FC<TrackCounterProps> = function TrackCounter({
    index,
    tracks,
    color,
    format,
    trackSizes,
}) {
    const sizes = trackSizes ?? tracks.map(() => 1);

    if (sizes.length !== tracks.length) {
        throw new Error(
            `trackSizes.length=${sizes.length} must be the same length as tracks.length=${tracks.length}`,
        );
    }

    return (
        <Root>
            {tracks.map((value, i) => (
                <Tick
                    key={i}
                    data-selected={i === index}
                    size={sizes[i]}
                    color={color}
                    data-format={format}
                >
                    {!!i && i < tracks.length && <TrackSeparator />}
                    {value}
                </Tick>
            ))}
        </Root>
    );
};

export default TrackCounter;

const Root = styled.div`
    display: flex;
`;

const Tick = styled.div<{ color: string; size: number }>`
    position: relative;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${p => p.size * 1.5}rem;
    height: 1.5rem;
    font-size: 0.875rem;

    &[data-selected='true'] {
        box-shadow: 0 0 0 2px currentColor inset;
        color: ${p => p.color};
        &[data-format='round'] {
            border-radius: 50%;
        }
        &[data-format='square'] {
            border-radius: 4px;
        }
    }

    &[data-selected='false'] {
        color: ${colors.text};
    }
`;

const TrackSeparator = styled.div`
    position: absolute;
    left: -0.125rem;
    top: calc(50% - 0.125rem);
    background: ${colors.text};
    border-radius: 50%;
    width: 0.25rem;
    height: 0.25rem;
    opacity: 0.25;
`;
