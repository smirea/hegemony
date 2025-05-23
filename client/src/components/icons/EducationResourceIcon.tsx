import colors from 'client/utils/colors';

import createSVGIcon from './createSVGIcon';

const EducationResourceIcon = createSVGIcon<object>(
    { color: colors.resource.education },
    ({ color, ...props }) => (
        <svg {...props} viewBox='10.00 10.00 245.00 180.00'>
            <g fill={color}>
                <path
                    d='
  M 18.43 54.64
  L 130.15 15.07
  A 6.91 6.91 0.0 0 1 134.77 15.07
  L 246.49 54.64
  A 6.91 6.91 0.0 0 1 246.49 67.66
  L 134.77 107.23
  A 6.91 6.91 0.0 0 1 130.15 107.23
  L 18.43 67.66
  A 6.91 6.91 0.0 0 1 18.43 54.64
  Z'
                />
                <path
                    d='
  M 234.71 143.88
  A 0.74 0.73 -17.2 0 0 234.38 144.49
  Q 234.34 159.74 234.39 175.08
  Q 234.40 179.47 233.83 180.86
  C 231.99 185.27 226.57 186.52 222.89 183.44
  Q 220.55 181.48 220.55 176.75
  Q 220.53 165.68 220.55 144.66
  Q 220.55 144.14 220.12 143.85
  Q 215.42 140.67 214.02 135.55
  Q 213.89 135.06 214.05 134.58
  C 216.00 128.67 217.02 123.96 220.29 119.93
  A 1.13 1.10 -26.3 0 0 220.54 119.23
  L 220.54 92.06
  Q 220.54 91.62 220.95 91.48
  L 233.96 86.87
  A 0.31 0.31 0.0 0 1 234.37 87.16
  L 234.37 119.26
  Q 234.37 119.82 234.82 120.14
  C 243.48 126.11 243.62 138.05 234.71 143.88
  Z'
                />
                <path
                    d='
  M 132.44 127.14
  Q 135.86 127.14 137.75 126.48
  Q 163.14 117.59 201.75 103.80
  A 0.33 0.33 0.0 0 1 202.19 104.11
  Q 202.21 154.02 202.22 161.02
  Q 202.22 165.95 200.91 168.32
  Q 198.77 172.17 195.85 174.16
  Q 186.63 180.43 174.35 183.61
  Q 153.78 188.95 132.43 188.95
  Q 111.08 188.94 90.51 183.60
  Q 78.23 180.41 69.02 174.13
  Q 66.10 172.14 63.96 168.29
  Q 62.65 165.92 62.65 160.99
  Q 62.67 153.99 62.71 104.08
  A 0.33 0.33 0.0 0 1 63.15 103.77
  Q 101.75 117.58 127.14 126.48
  Q 129.03 127.14 132.44 127.14
  Z'
                />
            </g>
        </svg>
    ),
);

export default EducationResourceIcon;
