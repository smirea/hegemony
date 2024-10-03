import React from 'react';
import styled from '@emotion/styled';
import { type Company } from 'shared/logic/types';
import _ from 'lodash';

import CompanyCard from '../CompanyCard';

export interface CompanyGridProps {
    companies: Company[];
    width: number;
    height: number;
}

const CompanyGrid: React.FC<CompanyGridProps> = ({ companies, width, height }) => {
    return (
        <Root width={width} height={height}>
            {_.range(height)
                .map(y =>
                    _.range(width).map(x => (
                        <CompanyBox key={x + y * width}>
                            {companies[x + y * width] ? (
                                <CompanyCard company={companies[x + y * width]} />
                            ) : null}
                        </CompanyBox>
                    )),
                )
                .flat()}
        </Root>
    );
};

export default CompanyGrid;

const Root = styled.div<{ width: number; height: number }>`
    display: grid;
    grid-template-columns: repeat(${props => props.width}, 1fr);
    grid-template-rows: repeat(${props => props.height}, 1fr);
    grid-gap: 0.25rem;
`;

const CompanyBox = styled.div`
    border-radius: 4px;
    box-shadow: 0 0 0 1px var(--board-border-color) inset;
`;
