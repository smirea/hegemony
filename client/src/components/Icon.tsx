import styled from '@emotion/styled';
import React from 'react';

export interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
    type: keyof typeof icons;
    /** in rem */
    size?: number;
    /** any CSS color, but prefer to use a defined var(--...) */
    color?: string;
}

const defaultColor = 'var(--text-color)';

const Icon: React.FC<IconProps> = ({ type, size = 1.5, color = defaultColor, ...rest }) => {
    const sizeRem = size + 'rem';

    // const svg = (content: React.ReactNode) =>
    //     <svg
    //         width={sizeRem}
    //         height={sizeRem}
    //         viewBox='0 0 64 64'
    //         fill={color}
    //         style={{ display: 'inline-block' }}
    //         {...rest as any}
    //     >
    //         {content}
    //     </svg>;

    const text = (content: string) => (
        <Text {...rest} style={{ width: sizeRem, height: sizeRem, color, fontSize: sizeRem }}>
            {content}
        </Text>
    );

    if (type in icons) {
        return text(icons[type]);
    }

    return <span>‼️{type}‼️</span>;
};

export default Icon;

const icons = {
    worker: '👤',
    population: '👥',
    prosperity: '☻',
    money: '¥',
    food: '🌽',
    luxury: '🫦',
    healthcare: '🏥',
    education: '🎓',
    media: '📺',
} as const;

const Text = styled.span`
    display: inline-block;
`;
