import { type ClassAndStyle } from 'client/types';
import _ from 'lodash';

interface BaseProps extends ClassAndStyle {
    width?: number;
    height?: number;
    color?: string;
}

interface RenderProps extends ClassAndStyle {
    color?: string;
    width?: string;
    height?: string;
}

export default function createSVGIcon<Extra = object>(
    defaultProps: BaseProps & Partial<Extra>,
    render: (props: RenderProps & Extra) => React.ReactNode,
): React.FC<BaseProps & Extra> {
    return (inProps: BaseProps & Extra) => {
        const props = {
            height: 2,
            ...defaultProps,
            ...(_.pickBy(inProps) as typeof inProps),
            style: {
                display: 'inline-block',
                verticalAlign: 'middle',
                flex: '0 0 auto',
                ...inProps.style,
            },
        };
        return render({
            viewBox: '0.00 0.00 100.00 100.00',
            ...props,
            height: props.height ? props.height + 'rem' : undefined,
            width: props.width ? props.width + 'rem' : undefined,
            xmlns: 'http://www.w3.org/2000/svg',
            version: '1.1',
        });
    };
}
