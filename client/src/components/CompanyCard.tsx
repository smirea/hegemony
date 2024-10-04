import React from 'react';
import styled from '@emotion/styled';
import { type Company, type CompanyCard, type Industry } from 'shared/logic/types';
import { observer } from 'mobx-react';
import useGame from 'client/utils/useGame';
import { type ClassAndStyle } from 'client/types';
import { colors } from 'client/utils/constants';

import ResourceIcon from './ResourceIcon';
import AutomationIcon from './icons/AutomationIcon';
import AnyWorkerIcon from './icons/AnyWorkerIcon';
import WorkerIcon from './icons/WorkerIcon';
import WorkingClassWorker3DIcon from './icons/WorkingClassWorker3DIcon';
import MoneyResourceIcon from './icons/MoneyResourceIcon';

export interface CompanyCardProps extends ClassAndStyle {
    company: Company;
    minimal?: boolean;
}

const CompanyCard: React.FC<CompanyCardProps> = observer(({ company, minimal, ...rest }) => {
    const game = useGame();
    const companyDef = game.getCompanyDefinition(company.id);

    let totalProduction = companyDef.production;

    if (companyDef.productionFromAutomation && company.automationToken) {
        totalProduction += companyDef.productionFromAutomation;
    }
    if (
        companyDef.productionFromOptionalWorkers &&
        company.workers.length === companyDef.workers.length
    ) {
        totalProduction += companyDef.productionFromOptionalWorkers;
    }

    if (minimal) {
        return (
            <Root {...rest} minimal background={colors.industry[companyDef.industry]}>
                <WorkersEl small companyDef={companyDef} company={company} />
                <Output>
                    <Production value={totalProduction} small industry={companyDef.industry} />
                </Output>
                <Wages>
                    {!companyDef.fullyAutomated && (
                        <div data-selected={true}>
                            {companyDef.wages[company.wages]}
                            <MoneyResourceIcon height={0.5} />
                        </div>
                    )}
                </Wages>
            </Root>
        );
    }

    return (
        <Root {...rest} background={colors.industry[companyDef.industry]}>
            <Name>
                <div>{companyDef.name}</div>
                <div className='row' data-align='center' data-spacing='.125'>
                    {companyDef.cost} <MoneyResourceIcon height={0.5} />
                </div>
            </Name>
            <WorkersEl companyDef={companyDef} company={company} />
            <Output>
                <Production value={totalProduction} industry={companyDef.industry} />
                {companyDef.productionFromAutomation && (
                    <ExtraProduction
                        value={companyDef.productionFromAutomation}
                        icon={<AutomationIcon height={1} style={{ marginBottom: '.125rem' }} />}
                        active={!!company.automationToken}
                    />
                )}
                {companyDef.productionFromOptionalWorkers && (
                    <ExtraProduction
                        value={companyDef.productionFromOptionalWorkers}
                        icon={
                            <WorkingClassWorker3DIcon
                                type={companyDef.workers[1].type}
                                height={1.5}
                            />
                        }
                        active={company.workers.length === companyDef.workers.length}
                    />
                )}
            </Output>
            <Wages>
                {!companyDef.fullyAutomated && (
                    <>
                        <div data-selected={company.wages === 'l1'}>{companyDef.wages.l1}</div>
                        <div data-selected={company.wages === 'l2'}>{companyDef.wages.l2}</div>
                        <div data-selected={company.wages === 'l3'}>{companyDef.wages.l3}</div>
                    </>
                )}
            </Wages>
        </Root>
    );
});

export default CompanyCard;

const Production: React.FC<{ value: number; small?: boolean; industry: Industry }> = ({
    value,
    small,
    industry,
}) => (
    <div
        className='row'
        data-align='center'
        data-spacing='.25'
        style={{ fontSize: small ? '1rem' : '1.5rem' }}
    >
        {value}
        <ResourceIcon name={industry} color='white' height={small ? 0.75 : 1} />
    </div>
);

const ExtraProduction: React.FC<{
    value: number;
    icon: React.ReactNode;
    active: boolean;
}> = ({ value, icon, active }) => (
    <div
        className='row'
        data-spacing='.125'
        data-align='end'
        style={{ fontSize: '1rem', opacity: active ? 1 : 0.5 }}
    >
        <div>(</div>
        {icon}
        <div>+{value}</div>
        <div>)</div>
    </div>
);

const WorkersEl: React.FC<{ small?: boolean; companyDef: CompanyCard; company: Company }> =
    observer(function WorkersEl({ companyDef, company, small }) {
        const game = useGame();
        const iconHeight = small ? 2 : 3;

        if (companyDef.fullyAutomated) {
            return (
                <Workers small={small}>
                    <AutomationIcon height={iconHeight} />
                </Workers>
            );
        }

        const optional = (key: number, content: React.ReactNode) => (
            <div
                key={key}
                className='row'
                data-align='center'
                style={{ fontSize: small ? '1.5rem' : '2rem' }}
            >
                <div>(</div>
                {content}
                <div>)</div>
            </div>
        );

        return (
            <Workers small={small}>
                {companyDef.workers.map((workerDef, i) => {
                    if (!company.workers[i]) {
                        if (workerDef.roles.length > 1) {
                            return (
                                <AnyWorkerIcon key={i} height={iconHeight} type={workerDef.type} />
                            );
                        }

                        const content = (
                            <WorkerIcon
                                key={i}
                                status='empty'
                                role={workerDef.roles[0]}
                                type={workerDef.type}
                                height={iconHeight}
                            />
                        );

                        return workerDef.optional ? optional(i, content) : content;
                    }

                    const { worker, roleName } = game.getWorkerById(company.workers[i]);

                    const content = (
                        <WorkerIcon
                            key={i}
                            role={roleName}
                            type={workerDef.type}
                            status={worker.committed ? 'committed' : 'uncommitted'}
                            height={iconHeight}
                        />
                    );

                    return workerDef.optional ? optional(i, content) : content;
                })}
            </Workers>
        );
    });

export const Root = styled.div<{ background: string; minimal?: boolean }>`
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background: ${props => props.background};
    /* min-width: ${props => (props.minimal ? '3rem' : '8rem')}; */
    width: ${props => (props.minimal ? '3rem' : '8rem')};
    height: 10rem;
    border-radius: 4px;
    overflow: hidden;
    color: var(--text-color);
`;

const Name = styled.div`
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    font-weight: bold;
    font-size: 0.75rem;
    text-align: center;
    background: rgba(0, 0, 0, 0.5);
    overflow: hidden;
    height: 2.5rem;
    padding: 0 0.5rem;
`;

const Workers = styled.div<{ small?: boolean }>`
    flex: 1 1 0;
    display: flex;
    flex-direction: ${props => (props.small ? 'column' : 'row')};
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
`;

const Output = styled.div`
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    height: 2rem;
    margin-bottom: 0.25rem;
`;

const Wages = styled.div`
    flex: 0 0 auto;
    display: flex;
    height: 1.25rem;
    font-size: 0.75rem;
    & > * {
        flex: 1 1 0;
        display: flex;
        align-self: stretch;
        align-items: center;
        justify-content: center;
        &[data-selected='true'] {
            background: var(--background-hover);
        }
    }
`;
