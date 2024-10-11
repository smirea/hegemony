import colors from 'client/utils/colors';

import createSVGIcon from './createSVGIcon';

const LuxuryResourceIcon = createSVGIcon<object>(
    { color: colors.resource.luxury },
    ({ color, ...props }) => (
        <svg {...props} viewBox='25.00 15.00 135.00 225.00'>
            <g fill={color}>
                <path
                    d='
  M 158.63 227.34
  A 12.04 12.04 0.0 0 1 146.59 239.38
  L 36.57 239.38
  A 12.04 12.04 0.0 0 1 24.53 227.34
  L 24.53 28.50
  A 12.04 12.04 0.0 0 1 36.57 16.46
  L 146.59 16.46
  A 12.04 12.04 0.0 0 1 158.63 28.50
  L 158.63 227.34
  Z
  M 139.62 48.42
  A 12.18 12.18 0.0 0 0 127.44 36.24
  L 54.96 36.24
  A 12.18 12.18 0.0 0 0 42.78 48.42
  L 42.78 193.26
  A 12.18 12.18 0.0 0 0 54.96 205.44
  L 127.44 205.44
  A 12.18 12.18 0.0 0 0 139.62 193.26
  L 139.62 48.42
  Z
  M 101.21 222.40
  A 9.63 9.63 0.0 0 0 91.58 212.77
  A 9.63 9.63 0.0 0 0 81.95 222.40
  A 9.63 9.63 0.0 0 0 91.58 232.03
  A 9.63 9.63 0.0 0 0 101.21 222.40
  Z'
                />
            </g>
        </svg>
    ),
);

export default LuxuryResourceIcon;
