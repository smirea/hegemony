import React from 'react';
import { type Resource } from 'shared/logic/types';
import { type ClassAndStyle } from 'client/types';

import EducationResourceIcon from './icons/EducationResourceIcon';
import FoodResourceIcon from './icons/FoodResourceIcon';
import HealthcareResourceIcon from './icons/HealthcareResourceIcon';
import LuxuryResourceIcon from './icons/LuxuryResourceIcon';
import InfluenceResourceIcon from './icons/InfluenceResourceIcon';
import MoneyResourceIcon from './icons/MoneyResourceIcon';

export interface ResourceIconProps extends ClassAndStyle {
    name: Resource;
    height?: number;
    color?: string;
}

const ResourceIcon: React.FC<ResourceIconProps> = ({ name, height = 1.5, color, ...rest }) => {
    const Icon = icons[name];

    return <Icon {...rest} height={height} color={color} />;
};

export default ResourceIcon;

const icons: Record<Resource, React.FC<{ height?: number; color?: string }>> = {
    education: EducationResourceIcon,
    food: FoodResourceIcon,
    healthcare: HealthcareResourceIcon,
    luxury: LuxuryResourceIcon,
    influence: InfluenceResourceIcon,
    money: MoneyResourceIcon,
};
