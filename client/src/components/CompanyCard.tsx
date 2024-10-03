import React from 'react';
import styled from '@emotion/styled';
import { type Company, type Industry, RoleEnum } from 'shared/logic/types';
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
}

const CompanyCard: React.FC<CompanyCardProps> = observer(({ company, ...rest }) => {
    const game = useGame();
    const companyDef = game.getCompanyDefinition(company.id);

    return (
        <Root {...rest} background={colors.industry[companyDef.industry]}>
            <Name>
                {companyDef.name} {companyDef.cost}¥
            </Name>
            <Workers>
                {companyDef.fullyAutomated ? (
                    <AutomationIcon height={4} />
                ) : (
                    <div className='row' data-align='end' data-spacing='.25'>
                        {companyDef.workers.map((worker, i) => {
                            const status = company.workers[i]
                                ? game.getWorkerById(company.workers[i]).worker.committed
                                    ? 'committed'
                                    : 'uncommitted'
                                : 'empty';
                            if (status === 'empty' && worker.roles.length > 1) {
                                return <AnyWorkerIcon key={i} height={4} type={worker.type} />;
                            }
                            if (worker.roles[0] === RoleEnum.middleClass) {
                                return (
                                    <WorkerIcon
                                        key={i}
                                        role={RoleEnum.middleClass}
                                        type={worker.type}
                                        status={status}
                                        height={5}
                                    />
                                );
                            }
                            if (worker.optional) {
                                return (
                                    <div
                                        key={i}
                                        className='row'
                                        data-align='center'
                                        style={{ fontSize: '2rem' }}
                                    >
                                        <div>(</div>
                                        <WorkerIcon
                                            key={i}
                                            role={RoleEnum.workingClass}
                                            type={worker.type}
                                            status={status}
                                            height={4}
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
                                    height={4}
                                />
                            );
                        })}
                    </div>
                )}
            </Workers>
            <Output>
                <Production value={companyDef.production} industry={companyDef.industry} />
                {companyDef.productionFromAutomation && (
                    <ExtraProduction
                        value={companyDef.productionFromAutomation}
                        industry={companyDef.industry}
                        icon={<AutomationIcon height={1} style={{ marginBottom: '.125rem' }} />}
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

const Production: React.FC<{ value: number; industry: Industry }> = ({ value, industry }) => (
    <div className='row' data-spacing='.25' data-align='center' style={{ fontSize: '2rem' }}>
        <div>{value}</div>
        <ResourceIcon name={industry} color='white' height={1.5} />
    </div>
);

const ExtraProduction: React.FC<{ value: number; industry: Industry; icon: React.ReactNode }> = ({
    value,
    industry,
    icon,
}) => (
    <div className='row' data-spacing='.25' data-align='end' style={{ fontSize: '1rem' }}>
        <div>(</div>
        {icon}
        <div>+{value}</div>
        <ResourceIcon name={industry} color='white' height={0.75} />
        <div>)</div>
    </div>
);

const Root = styled.div<{ background: string }>`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background: ${props => props.background};
    min-width: 8rem;
    width: 10rem;
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

const Workers = styled.div`
    flex: 1 1 0;
    display: flex;
    flex-direction: row;
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
