import React from 'react';
import styled from '@emotion/styled';
import { type Resource } from 'shared/logic/types';
import { type ClassAndStyle } from 'client/types';

import EducationResourceIcon from './icons/EducationResourceIcon';
import FoodResourceIcon from './icons/FoodResourceIcon';
import HealthcareResourceIcon from './icons/HealthcareResourceIcon';
import LuxuryResourceIcon from './icons/LuxuryResourceIcon';
import InfluenceResourceIcon from './icons/InfluenceResourceIcon';

export interface ResourceIconProps extends ClassAndStyle {
    name: Resource;
    height?: number;
}

const ResourceIcon: React.FC<ResourceIconProps> = ({ name, height = 1.5, ...rest }) => {
    const Icon = icons[name];

    return (
        <Root {...rest}>
            <Icon height={height} />
        </Root>
    );
};

export default ResourceIcon;

const icons: Record<Resource, React.FC<{ height?: number; color?: string }>> = {
    education: EducationResourceIcon,
    food: FoodResourceIcon,
    healthcare: HealthcareResourceIcon,
    luxury: LuxuryResourceIcon,
    influence: InfluenceResourceIcon,
    money: () => 'v',
};

const Root = styled.div``;
