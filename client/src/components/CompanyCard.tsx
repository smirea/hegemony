import React from 'react';
import styled from '@emotion/styled';
import { type Company, type CompanyCard, type Industry, RoleEnum } from 'shared/logic/types';
import { observer } from 'mobx-react';
import useGame from 'client/utils/useGame';
import { type ClassAndStyle } from 'client/types';
import { colors } from 'client/utils/constants';

import ResourceIcon from './ResourceIcon';
import AutomationIcon from './icons/AutomationIcon';
import AnyWorkerIcon from './icons/AnyWorkerIcon';
import WorkerIcon from './icons/WorkerIcon';
import WorkingClassWorker3DIcon from './icons/WorkingClassWorker3DIcon';

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
                <Name>{companyDef.cost}¥</Name>
                <WorkersEl small companyDef={companyDef} company={company} />
                <Output>
                    <Production value={totalProduction} small industry={companyDef.industry} />
                </Output>
                <Wages>
                    {!companyDef.fullyAutomated && (
                        <div data-selected={true}>{companyDef.wages[company.wages]}¥</div>
                    )}
                </Wages>
            </Root>
        );
    }

    return (
        <Root {...rest} background={colors.industry[companyDef.industry]}>
            <Name>
                {companyDef.name} {companyDef.cost}¥
            </Name>
            <WorkersEl companyDef={companyDef} company={company} />
            <Output>
                <Production value={totalProduction} industry={companyDef.industry} />
                {companyDef.productionFromAutomation && (
                    <ExtraProduction
                        value={companyDef.productionFromAutomation}
                        industry={companyDef.industry}
                        icon={<AutomationIcon height={1} style={{ marginBottom: '.125rem' }} />}
                        active={!!company.automationToken}
                    />
                )}
                {companyDef.productionFromOptionalWorkers && (
                    <ExtraProduction
                        value={companyDef.productionFromOptionalWorkers}
                        industry={companyDef.industry}
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
        style={{ fontSize: small ? '1.25rem' : '2rem' }}
    >
        {value}
        <ResourceIcon name={industry} color='white' height={small ? 0.875 : 1.5} />
    </div>
);

const WorkersEl: React.FC<{ small?: boolean; companyDef: CompanyCard; company: Company }> =
    observer(({ companyDef, company, small }) => {
        const game = useGame();

        const heights: {
            any: number;
            middleClass: number;
            workingClass: number;
            automation: number;
        } = small
            ? {
                  any: 2,
                  middleClass: 2,
                  workingClass: 2,
                  automation: 2,
              }
            : {
                  any: 4,
                  middleClass: 5,
                  workingClass: 4,
                  automation: 4,
              };

        if (companyDef.fullyAutomated) {
            return (
                <Workers small={small}>
                    <AutomationIcon height={heights.automation} />
                </Workers>
            );
        }

        return (
            <Workers small={small}>
                {companyDef.workers.map((worker, i) => {
                    const status = company.workers[i]
                        ? game.getWorkerById(company.workers[i]).worker.committed
                            ? 'committed'
                            : 'uncommitted'
                        : 'empty';
                    if (status === 'empty' && worker.roles.length > 1) {
                        return <AnyWorkerIcon key={i} height={heights.any} type={worker.type} />;
                    }
                    if (worker.roles[0] === RoleEnum.middleClass) {
                        return (
                            <WorkerIcon
                                key={i}
                                role={RoleEnum.middleClass}
                                type={worker.type}
                                status={status}
                                height={heights.middleClass}
                            />
                        );
                    }
                    if (worker.optional) {
                        return (
                            <div
                                key={i}
                                className='row'
                                data-align='center'
                                style={{ fontSize: small ? '1.5rem' : '2rem' }}
                            >
                                <div>(</div>
                                <WorkerIcon
                                    key={i}
                                    role={RoleEnum.workingClass}
                                    type={worker.type}
                                    status={status}
                                    height={heights.workingClass}
                                />
                                <div>)</div>
                            </div>
                        );
                    }
                    return (
                        <WorkerIcon
                            key={i}
                            role={RoleEnum.workingClass}
                            type={worker.type}
                            status={status}
                            height={heights.workingClass}
                        />
                    );
                })}
            </Workers>
        );
    });

const ExtraProduction: React.FC<{
    value: number;
    industry: Industry;
    icon: React.ReactNode;
    active: boolean;
}> = ({ value, industry, icon, active }) => (
    <div
        className='row'
        data-spacing='.25'
        data-align='end'
        style={{ fontSize: '1rem', opacity: active ? 1 : 0.5 }}
    >
        <div>(</div>
        {icon}
        <div>+{value}</div>
        <ResourceIcon name={industry} color='white' height={0.75} />
        <div>)</div>
    </div>
);

const Root = styled.div<{ background: string; minimal?: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background: ${props => props.background};
    min-width: ${props => (props.minimal ? '3rem' : '8rem')};
    width: ${props => (props.minimal ? '3rem' : '10rem')};
    height: 14rem;
    border-radius: 4px;
    overflow: hidden;
    color: var(--text-color);
`;

const Name = styled.div`
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
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
    margin-bottom: 0.5rem;
`;

const Wages = styled.div`
    flex: 0 0 auto;
    display: flex;
    height: 1.5rem;
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
