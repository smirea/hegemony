import React from 'react';
import styled from '@emotion/styled';

import Icon, { type IconProps } from './Icon';

export interface ValueProps {
    icon?: IconProps['type'];
    v: number;
    tooltip?: React.ReactNode;
    onClick?: () => void;
}

const Value: React.FC<ValueProps> = ({ icon, v, tooltip, onClick }) => {
    return (
        <Root data-interactive={onClick ? '' : undefined} title={tooltip as any}>
            {icon && <Icon type={icon} className='mr025' />}
            {v}
        </Root>
    );
};

export default Value;

const Root = styled.div`
    display: inline-flex;
    padding: 0.25rem;
    &[data-interactive] {
        cursor: pointer;
        &:hover {
            background-color: var(--background-hover);
        }
    }
`;
