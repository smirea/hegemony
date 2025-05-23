import React from 'react';
import styled from '@emotion/styled';
import { type Company, type CompanyCard, type Industry } from 'shared/logic/types';
import { observer } from 'mobx-react';
import useGame from 'client/utils/useGame';
import { type ClassAndStyle } from 'client/types';
import colors from 'client/utils/colors';

import ResourceIcon from './ResourceIcon';
import AutomationIcon from './icons/AutomationIcon';
import AnyWorkerIcon from './icons/AnyWorkerIcon';
import WorkerIcon from './icons/WorkerIcon';
import WorkingClassWorker3DIcon from './icons/WorkingClassWorker3DIcon';
import MoneyResourceIcon from './icons/MoneyResourceIcon';
import Value from './Value';
import CompanyWages from './CompanyWages';

type Format = 'normal' | 'vertical' | 'tiny';

export interface CompanyCardProps extends ClassAndStyle {
    company: Company;
    format?: Format;
}

const CompanyCard: React.FC<CompanyCardProps> = observer(
    ({ company, format = 'normal', ...rest }: CompanyCardProps) => {
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

        const ifWages = (content: React.ReactNode) =>
            companyDef.wages.l1 || companyDef.wages.l2 || companyDef.wages.l3 ? content : null;

        const rootProps = {
            ...rest,
            background: colors.industry[companyDef.industry],
            'data-format': format,
            'data-company-id': companyDef.id,
        };
        const workersProps = {
            companyDef,
            company,
            'data-format': format,
        };

        if (format === 'tiny') {
            return (
                <Root {...rootProps}>
                    <Value
                        v={
                            <>
                                <div>{companyDef.production}</div>
                                {!!companyDef.productionFromAutomation && (
                                    <div style={{ fontSize: '.875rem', color: colors.textMuted }}>
                                        + {companyDef.productionFromAutomation}
                                    </div>
                                )}
                                {!!companyDef.productionFromOptionalWorkers && (
                                    <div style={{ fontSize: '.875rem', color: colors.textMuted }}>
                                        + {companyDef.productionFromOptionalWorkers}
                                    </div>
                                )}
                            </>
                        }
                        icon={p => <ResourceIcon {...p} name={companyDef.industry} color='white' />}
                        style={{ background: rootProps.background }}
                        className='px05 mr05'
                    />
                    {/* <Value
                        v={companyDef.cost}
                        icon={p => <ResourceIcon {...p} name='money' />}
                    /> */}
                    <WorkersEl {...workersProps} className='pr05' />
                    {!!companyDef.productionFromAutomation && (
                        <AutomationIcon height={1} style={{ alignSelf: 'center' }} />
                    )}
                    {ifWages(
                        <>
                            <CompanyWages
                                companyWages={companyDef.wages}
                                value={company.wages}
                                style={{ alignSelf: 'stretch' }}
                            />
                        </>,
                    )}
                </Root>
            );
        }

        if (format === 'vertical') {
            return (
                <Root {...rootProps}>
                    <WorkersEl {...workersProps} />
                    <Output>
                        <Production value={totalProduction} small industry={companyDef.industry} />
                    </Output>
                    {ifWages(
                        <Wages>
                            {!companyDef.fullyAutomated && (
                                <div data-selected={true}>
                                    {companyDef.wages[company.wages]}
                                    <MoneyResourceIcon height={0.5} />
                                </div>
                            )}
                        </Wages>,
                    )}
                </Root>
            );
        }

        return (
            <Root {...rootProps}>
                <Name>
                    <div>{companyDef.name}</div>
                    <div className='row' data-align='center' data-spacing='.125'>
                        {companyDef.cost} <MoneyResourceIcon height={0.5} />
                    </div>
                </Name>
                <WorkersEl {...workersProps} />
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
                {ifWages(
                    <Wages>
                        {!companyDef.fullyAutomated && (
                            <>
                                <div data-selected={company.wages === 'l1'}>
                                    {companyDef.wages.l1}
                                </div>
                                <div data-selected={company.wages === 'l2'}>
                                    {companyDef.wages.l2}
                                </div>
                                <div data-selected={company.wages === 'l3'}>
                                    {companyDef.wages.l3}
                                </div>
                            </>
                        )}
                    </Wages>,
                )}
            </Root>
        );
    },
);

export default CompanyCard;

const Production: React.FC<{ value: number; small?: boolean; industry: Industry }> = ({
    value,
    small,
    industry,
}) => (
    <div className='row' data-align='center' data-spacing='.25'>
        <div style={{ fontSize: small ? '1rem' : '1.5rem' }}>{value}</div>
        <ResourceIcon name={industry} color='white' height={small ? 0.75 : 1.25} />
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

const WorkersEl: React.FC<
    { 'data-format': Format; companyDef: CompanyCard; company: Company } & ClassAndStyle
> = observer(function WorkersEl({ companyDef, company, ...props }) {
    const game = useGame();
    const iconHeight = {
        normal: 3,
        vertical: 2,
        tiny: 1.5,
    }[props['data-format']];
    const fontSize = {
        normal: '2rem',
        vertical: '1.5rem',
        tiny: '1.25rem',
    }[props['data-format']];

    if (companyDef.fullyAutomated) {
        return (
            <Workers {...props}>
                <AutomationIcon height={iconHeight} />
            </Workers>
        );
    }

    const optional = (key: number, content: React.ReactNode) => (
        <div key={key} className='row' data-align='center' style={{ fontSize }}>
            <div>(</div>
            {content}
            <div>)</div>
        </div>
    );

    return (
        <Workers {...props}>
            {companyDef.workers.map((workerDef, i) => {
                if (!company.workers[i]) {
                    if (workerDef.roles.length > 1) {
                        return <AnyWorkerIcon key={i} height={iconHeight} type={workerDef.type} />;
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

export const Root = styled.div<{ background: string; 'data-format': Format }>`
    flex: 0 0 auto;
    display: inline-flex;
    flex-direction: column;
    align-items: stretch;
    background: ${p => p.background};
    border-radius: 4px;
    overflow: hidden;
    color: ${colors.text};

    &[data-format='normal'] {
        width: 8rem;
        height: 10rem;
    }

    &[data-format='vertical'] {
        width: 3rem;
        height: 10rem;
    }

    &[data-format='tiny'] {
        box-shadow: 0 0 0 2px ${p => p.background} inset;
        background: ${colors.board};
        flex-direction: row;
        gap: 0;
        height: 2rem;
        width: auto;
    }
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

const Workers = styled.div<{ 'data-format': Format }>`
    flex: 1 1 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    &[data-format='vertical'] {
        flex-direction: column;
    }

    &[data-format='tiny'] {
    }
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
            background: ${colors.backgroundHover};
        }
    }
`;
