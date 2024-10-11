import colors from 'client/utils/colors';

import createSVGIcon from './createSVGIcon';

const InfluenceResourceIcon = createSVGIcon<object>(
    { color: colors.resource.influence },
    ({ color, ...props }) => (
        <svg {...props} viewBox='10.00 10.00 230.00 185.00'>
            <g fill={color}>
                <path
                    d='
  M 54.85 156.01
  A 0.63 0.62 -63.9 0 0 54.59 155.24
  Q 37.77 145.56 26.36 130.68
  Q 18.09 119.89 14.64 107.01
  C 7.26 79.38 20.55 52.81 42.32 36.06
  Q 57.35 24.49 74.85 18.40
  Q 115.98 4.08 159.70 13.92
  Q 178.87 18.23 196.18 28.34
  C 211.37 37.21 224.66 50.37 231.84 66.36
  C 241.32 87.48 237.89 111.45 224.18 129.96
  Q 216.57 140.24 206.73 147.71
  Q 192.46 158.53 175.64 164.54
  Q 140.39 177.12 102.20 171.51
  Q 99.39 171.09 97.14 170.92
  Q 96.63 170.88 96.21 171.16
  Q 69.43 189.38 39.32 193.62
  C 36.65 194.00 34.38 192.57 33.47 190.07
  Q 32.19 186.54 35.14 183.38
  C 44.60 173.26 50.57 166.65 54.85 156.01
  Z'
                />
            </g>
        </svg>
    ),
);

export default InfluenceResourceIcon;
