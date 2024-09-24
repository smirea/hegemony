import styled from '@emotion/styled';
import useGame from 'client/utils/useGame';
import { observer, useLocalObservable } from 'mobx-react';
import { PolicyEnum } from 'shared/logic/types';
import _ from 'lodash';
import { action } from 'mobx';

import ErrorBox from './ErrorBox';

const GameDebugger: React.FC = observer(() => {
    const game = useGame();
    const state = useLocalObservable(() => ({
        actions: {
            proposeBill: {
                policy: PolicyEnum.healthcare,
                value: 2,
            },
        } as Record<string, any>,
    }));
    const input = (path: string) => ({
        value: _.get(state, path),
        onChange: action((v: any) => _.set(state, path, v?.target?.value ?? v)),
    });
    const selectInput = (path: string, options: any[], parse: (v: any) => any = v => v) => (
        <select {...input(path)}>
            {options.map(option => (
                <option value={parse(option)} key={option}>
                    {option}
                </option>
            ))}
        </select>
    );

    return (
        <Root className='column' data-spacing='1'>
            <ErrorBox error={game.data.error} logError />
            <div className='row' data-spacing='1' data-align='center'>
                <button onClick={() => game.tick()}>tick()</button>
                <div>
                    queue: {game.data.currentActionIndex} / {game.data.actionQueue.length}
                </div>
                <div>
                    action: {game.data.actionQueue[game.data.currentActionIndex]?.type || 'n/a'}
                </div>
                <div>role: {game.data.currentRoleName ?? 'n/a'}</div>
            </div>
            <div className='row' data-spacing='1'>
                <button
                    onClick={action(() => {
                        game.next('workingClass:proposeBill', {
                            debugPlayerInput: state.actions.proposeBill,
                        });
                        void game.tick();
                    })}
                >
                    next()
                </button>
                <b>proposeBill</b>
                {selectInput('actions.proposeBill.policy', policies)}
                {selectInput('actions.proposeBill.value', [0, 1, 2], Number)}
            </div>
        </Root>
    );
});

export default GameDebugger;

// const roles: RoleName[] = ['workingClass', 'middleClass', 'capitalist', 'state'];

const policies = Object.values(PolicyEnum);

const Root = styled.div`
    border-radius: 1rem;
    padding: 1rem;
    background-color: #eee;
    border: 1px solid #ccc;
    margin-top: 1rem;
`;
