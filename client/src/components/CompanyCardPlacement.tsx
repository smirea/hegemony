import { type ClassAndStyle } from 'client/types';
import { type RoleNameNoWorkingClass } from 'shared/logic/types';
import { colors } from 'client/utils/constants';
import styled from '@emotion/styled';

import { Root as CompanyCardRoot } from './CompanyCard';
import CompanyIcon from './icons/CompanyIcon';

interface CompanyCardPlacementProps extends ClassAndStyle {
    role: RoleNameNoWorkingClass;
    minimal?: boolean;
}

const CompanyCardPlacement: React.FC<CompanyCardPlacementProps> = ({ role, ...rest }) => {
    return (
        <Root {...rest} background={colors.boardColor}>
            <CompanyIcon role={role} height={3} style={{ filter: 'brightness(0.8)' }} />
        </Root>
    );
};

export default CompanyCardPlacement;

const Root = styled(CompanyCardRoot)`
    box-shadow: 0 0 0 1px var(--board-border-color) inset;
    align-items: center;
    justify-content: center;
`;
