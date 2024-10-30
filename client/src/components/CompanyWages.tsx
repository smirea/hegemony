import React from 'react';
import styled from '@emotion/styled';
import { type CompanyCard, type WageId } from 'shared/logic/types';
import { type ClassAndStyle } from 'client/types';
import colors from 'client/utils/colors';

import ResourceIcon from './ResourceIcon';

export interface CompanyWagesProps extends ClassAndStyle {
    companyWages: CompanyCard['wages'];
    value: WageId;
}

const CompanyWages: React.FC<CompanyWagesProps> = ({ companyWages, value, ...rest }) => {
    return (
        <Root {...rest}>
            <Indicator style={{ left: 0 }} data-selected={value === 'l3'} />
            <Indicator style={{ left: '33%' }} data-selected={value === 'l2'} />
            <Indicator style={{ left: '66%' }} data-selected={value === 'l1'} />
            <ResourceIcon name='money' height={0.75} />
            <Wage data-selected={value === 'l3'}>{companyWages.l3}</Wage>
            <Wage data-selected={value === 'l2'}>{companyWages.l2}</Wage>
            <Wage data-selected={value === 'l1'}>{companyWages.l1}</Wage>
        </Root>
    );
};

export default CompanyWages;

const Root = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    min-width: 2.5rem;
`;

const Wage = styled.div`
    &:not([data-selected='true']) {
        display: none;
    }
    &[data-selected='true'] {
    }
`;

const Indicator = styled.div`
    position: absolute;
    bottom: 0;
    width: 33%;

    &[data-selected='true'] {
        height: 5px;
        background: ${colors.text};
    }

    &:not([data-selected='true']) {
        background-color: ${colors.textMuted};
        height: 3px;
    }
`;
