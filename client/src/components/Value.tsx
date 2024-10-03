import React from 'react';
import styled from '@emotion/styled';

export interface ValueProps {
    icon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    v: number;
    tooltip?: React.ReactNode;
    onClick?: () => void;
}

const Value: React.FC<ValueProps> = ({ icon, rightIcon, v, tooltip, onClick }) => {
    return (
        <Root data-interactive={onClick ? '' : undefined} title={tooltip as any}>
            {icon}
            {v}
            {rightIcon}
        </Root>
    );
};

export default Value;

const Root = styled.div`
    display: inline-flex;
    padding: 0.25rem;
    align-items: center;
    gap: 0.25rem;
    &[data-interactive] {
        cursor: pointer;
        &:hover {
            background-color: var(--background-hover);
        }
    }
`;
