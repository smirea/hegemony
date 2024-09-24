import styled from '@emotion/styled';
import { type ClassAndStyle } from 'client/types';
import { useState } from 'react';

export interface ErrorBoxProps extends ClassAndStyle {
    error: any;
    title?: string;
    logError?: boolean;
}

export const ErrorBox: React.FC<ErrorBoxProps> = ({ error, logError, ...props }) => {
    const [isOpen, setIsOpen] = useState(false);

    if (error == null) return error;

    if (logError) {
        console.warn(error);
    }

    let stack: string | undefined;
    let message: any = undefined;

    if (error && typeof error === 'object') {
        stack = String(error.stack || '');
        message = String(error.message || error);
    } else {
        stack = '';
        message = String(error);
    }

    return (
        <div {...props}>
            <ErrorMessage>
                {stack && (
                    <button
                        // icon={isOpen ? 'chevron-down' : 'chevron-right'}
                        onClick={() => setIsOpen(!isOpen)}
                        className='mr1'
                        // small
                        // intent='danger'
                    >
                        {isOpen ? 'close' : 'open'}
                    </button>
                )}
                {message}
            </ErrorMessage>
            {stack && isOpen && (
                <div>
                    <ErrorMessage>{stack}</ErrorMessage>
                </div>
            )}
        </div>
    );
};

export default ErrorBox;

const ErrorMessage = styled.div`
    background: #f00;
    color: #fff;
    padding: 1rem;
    font-family: monospace;
    white-space: pre-wrap;
`;
