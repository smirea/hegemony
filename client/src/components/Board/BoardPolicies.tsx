import styled from '@emotion/styled';
import _ from 'lodash';
import useGame from 'client/utils/useGame';
import { objectEntries } from 'shared/utils/ts';
import { observer } from 'mobx-react';
import colors from 'client/utils/colors';
import React from 'react';

import RoleIcon from '../RoleIcon';

import type { PolicyName, PolicyValue } from 'shared/logic/types';

const BoardPolicies: React.FC = observer(() => {
    const game = useGame();

    const getProposal = (name: PolicyName, value: PolicyValue) => {
        const proposal = game.data.board.policyProposals[name];
        if (!proposal) return null;
        if (proposal.value !== value) return null;
        return <RoleIcon role={proposal.role} size={1.25} className='ml05' />;
    };

    return (
        <Root>
            {objectEntries(game.data.board.policies).map(([policy, value], i) => (
                <React.Fragment key={policy}>
                    <PolicyName style={{ background: colors.policies[policy] }}>
                        {_.startCase(policy)}
                    </PolicyName>
                    <PolicyNumber style={{ background: colors.policies[policy] }}>
                        {i + 1}
                        {'ABC'[value]}
                    </PolicyNumber>
                    <PolicyValue data-selected={value === 0}>
                        <div style={{ color: colors.text }}>A</div>
                        {getProposal(policy, 0)}
                    </PolicyValue>
                    <PolicyValue data-selected={value === 1}>
                        <div style={{ color: colors.text }}>B</div>
                        {getProposal(policy, 1)}
                    </PolicyValue>
                    <PolicyValue data-selected={value === 2}>
                        <div style={{ color: colors.text }}>C</div>
                        {getProposal(policy, 2)}
                    </PolicyValue>
                </React.Fragment>
            ))}
        </Root>
    );
});

export default BoardPolicies;

const Root = styled.div`
    display: inline-grid;
    grid-template-columns: 1fr 2rem repeat(3, 3rem);
`;

const PolicyName = styled.div`
    padding: 0.5rem;
    color: ${colors.text};
`;

const PolicyNumber = styled.div`
    display: flex;
    align-items: center;
    padding-right: 0.5rem;
    font-size: 1.25rem;
    color: ${colors.text};
`;

const PolicyValue = styled.div`
    display: flex;
    align-items: center;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    text-align: center;
    &[data-selected='true'] {
        background-color: ${colors.backgroundHover};
        font-weight: bold;
    }
`;
