import { type ClassAndStyle } from 'client/types';
import { type RoleNameNoWorkingClass } from 'shared/logic/types';
import colors, { colorsRGBA } from 'client/utils/colors';
import styled from '@emotion/styled';

import { type CompanyCardProps, Root as CompanyCardRoot } from './CompanyCard';
import CompanyIcon from './icons/CompanyIcon';

interface CompanyCardPlacementProps extends ClassAndStyle {
    role: RoleNameNoWorkingClass;
    format?: CompanyCardProps['format'];
}

const CompanyCardPlacement: React.FC<CompanyCardPlacementProps> = ({
    role,
    format = 'normal',
    ...rest
}) => {
    const iconHeight = {
        normal: 3,
        vertical: 2,
        tiny: 1.25,
    }[format];
    return (
        <Root {...rest} background={`rgba(${colorsRGBA.board}, 0.5)`} data-format={format}>
            <CompanyIcon role={role} height={iconHeight} style={{ filter: 'brightness(0.8)' }} />
        </Root>
    );
};

export default CompanyCardPlacement;

const Root = styled(CompanyCardRoot)`
    box-shadow: 0 0 0 1px ${colors.boardBorder} inset;
    align-items: center;
    justify-content: center;
`;
