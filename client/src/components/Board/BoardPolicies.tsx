import styled from '@emotion/styled';
import _ from 'lodash';
import useGame from 'client/utils/useGame';
import { objectEntries } from 'shared/utils/ts';
import { observer } from 'mobx-react';

import RoleIcon from '../RoleIcon';

import type { PolicyName, PolicyValue } from 'shared/logic/types';

const BoardPolicies: React.FC = observer(() => {
    const game = useGame();

    const getProposal = (name: PolicyName, value: PolicyValue) => {
        const proposal = game.data.board.policyProposals[name];
        if (!proposal) return null;
        if (proposal.value !== value) return null;
        return <RoleIcon role={proposal.role} size={1.25} round className='ml05' />;
    };

    return (
        <Root>
            {objectEntries(game.data.board.policies).map(([policy, value], i) => (
                <Policy style={{ color: `var(--policy-${policy}-color)` }} key={policy}>
                    <PolicyName style={{ background: `var(--policy-${policy}-color)` }}>
                        {_.startCase(policy)}
                    </PolicyName>
                    <PolicyNumber style={{ background: `var(--policy-${policy}-color)` }}>
                        {i + 1}
                        {'ABC'[value]}
                    </PolicyNumber>
                    <PolicyValue data-selected={value === 0}>
                        <div style={{ color: 'var(--text-color)' }}>A</div>
                        {getProposal(policy, 0)}
                    </PolicyValue>
                    <PolicyValue data-selected={value === 1}>
                        <div style={{ color: 'var(--text-color)' }}>B</div>
                        {getProposal(policy, 1)}
                    </PolicyValue>
                    <PolicyValue data-selected={value === 2}>
                        <div style={{ color: 'var(--text-color)' }}>C</div>
                        {getProposal(policy, 2)}
                    </PolicyValue>
                </Policy>
            ))}
        </Root>
    );
});

export default BoardPolicies;

const Root = styled.div`
    width: 22.2rem;
    line-height: 1.5rem;
`;

const Policy = styled.div`
    display: flex;
    align-items: stretch;
    height: 2.5rem;
    background: var(--board-color);
    color: var(--text-color);
    > * {
        padding: 0.5rem 0;
    }
`;

const PolicyName = styled.div`
    flex: 0 0 8rem;
    text-indent: 0.5rem;
    color: var(--text-color);
`;

const PolicyNumber = styled.div`
    padding-right: 0.5rem;
    font-size: 1.25rem;
    color: var(--text-color);
`;

const PolicyValue = styled.div`
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    width: 4rem;
    text-align: center;
    &[data-selected='true'] {
        background: var(--background-hover);
        font-weight: bold;
    }
    &:not([data-selected='true']) {
        color: var(--text-color);
    }
`;
