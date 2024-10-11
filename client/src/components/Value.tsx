import React from 'react';
import styled from '@emotion/styled';
import { type ClassAndStyle } from 'client/types';
import { css } from '@emotion/react';

export interface ValueProps extends ClassAndStyle {
    size?: number;
    icon?: (props: { height: number }) => React.ReactNode;
    rightIcon?: (props: { height: number }) => React.ReactNode;
    v: number;
    tooltip?: React.ReactNode;
    onClick?: () => void;
}

const Value: React.FC<ValueProps> = ({
    icon,
    rightIcon,
    v,
    tooltip,
    onClick,
    size = 1,
    ...rest
}) => {
    return (
        <Root {...rest} interactive={!!onClick} size={size} title={tooltip as any}>
            {icon?.({ height: size })}
            <span>{v}</span>
            {rightIcon?.({ height: size })}
        </Root>
    );
};

export default Value;

const Root = styled.div<{ interactive: boolean; size: number }>`
    display: inline-flex;
    align-items: center;
    height: ${p => p.size + 0.5}rem;
    font-size: ${p => p.size}rem;
    gap: 0.375rem;
    position: relative;
    ${p =>
        p.interactive &&
        css`
            cursor: pointer;
            &:hover {
                background-color: var(--background-hover);
            }
        `}
`;
