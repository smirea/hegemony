import styled from '@emotion/styled';

import BoardPolicies from './BoardPolicies';

const Board: React.FC = () => {
    return (
        <Root>
            <BoardPolicies />
        </Root>
    );
};

export default Board;

const Root = styled.div``;
