import React from 'react';
import { type RoleName } from 'shared/logic/types';

import WorkingClassIcon from './WorkingClassIcon';

export interface RoleIconProps {
    role: RoleName;
    size?: number;
    color?: string;
}

const RoleIcon: React.FC<RoleIconProps> = ({ role, ...props }) => {
    switch (role) {
        case 'workingClass':
            return <WorkingClassIcon {...props} />;
        case 'middleClass':
            return null;
        case 'capitalist':
            return null;
        case 'state':
            return null;
    }
};

export default RoleIcon;
