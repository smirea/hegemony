import React from 'react';
import { type RoleName } from 'shared/logic/types';
import { type ClassAndStyle } from 'client/types';
import styled from '@emotion/styled';
import { colors } from 'client/utils/constants';

import WorkingClassIcon from './icons/WorkingClassIcon';
import MiddleClassIcon from './icons/MiddleClassIcon';
import CapitalistIcon from './icons/CapitalistIcon';
import StateIcon from './icons/StateIcon';

export interface RoleIconProps extends ClassAndStyle {
    role: RoleName;
    round?: boolean;
    size?: number;
    color?: string;
}

const RoleIcon: React.FC<RoleIconProps> = ({ role, size, round, ...props }) => {
    const Icon = {
        workingClass: WorkingClassIcon,
        middleClass: MiddleClassIcon,
        capitalist: CapitalistIcon,
        state: StateIcon,
    }[role];

    if (!round) return <Icon height={size} {...props} />;

    const color = props.color || colors.role[role];
    size ||= 2;
    const iconSize = size * 1.01;

    const { style, className, ...restProps } = props;

    return (
        <Round background={color} size={size} style={{ ...style }} className={className}>
            <Icon {...restProps} height={iconSize} color={colors.textColor} />
        </Round>
    );
};

export default RoleIcon;

const Round = styled.div<{ background: string; size: number }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: ${props => props.background};
    border-radius: 50%;
    width: ${props => props.size}rem;
    height: ${props => props.size}rem;
`;
