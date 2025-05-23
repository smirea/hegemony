import colors from 'client/utils/colors';

import createSVGIcon from './createSVGIcon';

const StateIcon = createSVGIcon<object>({ color: colors.role.state }, ({ color, ...props }) => (
    <svg {...props} viewBox='15.00 10.00 132.00 178.00'>
        <g fill={color}>
            <path
                d='
                    M 69.14 45.59
                    Q 57.76 45.58 46.05 44.01
                    A 0.54 0.54 0.0 0 1 45.59 43.47
                    L 45.59 13.29
                    Q 45.59 10.39 48.48 10.18
                    L 51.64 9.95
                    Q 54.19 9.76 54.18 12.39
                    L 54.12 36.75
                    Q 54.12 39.73 57.72 40.21
                    Q 57.82 40.22 57.87 40.21
                    Q 60.96 39.34 60.97 36.75
                    L 61.01 11.48
                    Q 61.01 10.96 61.53 10.98
                    L 65.25 11.13
                    Q 65.74 11.14 65.74 11.63
                    Q 65.70 26.55 65.71 40.07
                    C 65.71 42.27 66.80 44.16 69.14 44.16
                    C 71.47 44.16 72.57 42.28 72.57 40.08
                    Q 72.60 26.56 72.59 11.64
                    Q 72.59 11.15 73.08 11.14
                    L 76.80 10.99
                    Q 77.32 10.97 77.32 11.49
                    L 77.32 36.76
                    Q 77.32 39.35 80.41 40.23
                    Q 80.46 40.24 80.56 40.23
                    Q 84.16 39.76 84.17 36.78
                    L 84.15 12.42
                    Q 84.14 9.79 86.69 9.98
                    L 89.85 10.21
                    Q 92.74 10.43 92.74 13.33
                    L 92.68 43.51
                    A 0.54 0.54 0.0 0 1 92.22 44.04
                    Q 80.52 45.60 69.14 45.59
                    Z'
            />
            <path
                d='
                    M 69.26 52.44
                    Q 84.12 52.44 96.27 50.44
                    Q 98.19 50.13 99.15 50.71
                    C 102.60 52.80 101.25 57.11 97.50 57.75
                    Q 82.57 60.30 69.26 60.30
                    Q 55.95 60.30 41.02 57.75
                    C 37.27 57.11 35.92 52.80 39.37 50.71
                    Q 40.33 50.13 42.25 50.44
                    Q 54.40 52.44 69.26 52.44
                    Z'
            />
            <path
                d='
                    M 69.48 67.17
                    Q 77.50 67.16 85.51 66.30
                    Q 91.94 65.61 92.60 65.55
                    Q 93.10 65.51 93.16 66.00
                    Q 93.53 68.76 92.35 77.93
                    Q 90.74 90.58 79.28 94.58
                    Q 75.34 95.95 69.51 95.96
                    Q 63.69 95.97 59.74 94.60
                    Q 48.28 90.63 46.64 77.98
                    Q 45.43 68.82 45.80 66.06
                    Q 45.86 65.57 46.36 65.60
                    Q 47.02 65.66 53.45 66.34
                    Q 61.46 67.18 69.48 67.17
                    Z
                    M 69.45 84.60
                    Q 70.29 84.62 70.53 84.58
                    Q 74.80 83.98 76.55 84.02
                    Q 77.02 84.03 77.42 84.29
                    C 80.66 86.35 87.12 89.51 88.93 84.51
                    Q 89.81 82.08 87.61 83.30
                    Q 86.66 83.82 85.83 82.03
                    Q 83.91 77.91 82.45 75.87
                    C 78.99 71.06 73.88 73.82 69.78 76.65
                    Q 69.72 76.69 69.65 76.69
                    Q 69.63 76.69 69.58 76.69
                    Q 69.53 76.69 69.51 76.69
                    Q 69.45 76.69 69.39 76.64
                    C 65.39 73.67 60.38 70.74 56.75 75.43
                    Q 55.22 77.41 53.16 81.47
                    Q 52.27 83.23 51.34 82.67
                    Q 49.18 81.38 49.98 83.84
                    C 51.61 88.90 58.18 85.96 61.49 84.01
                    Q 61.90 83.77 62.37 83.78
                    Q 64.12 83.80 68.37 84.55
                    Q 68.60 84.59 69.45 84.60
                    Z'
            />
            <path
                d='
                    M 103.33 121.37
                    A 0.41 0.41 0.0 0 0 102.88 121.73
                    L 100.66 140.95
                    Q 100.40 143.16 98.20 143.50
                    Q 97.46 143.61 96.27 144.15
                    A 1.59 1.58 80.8 0 1 94.04 142.53
                    Q 95.94 125.49 100.48 86.51
                    C 100.87 83.15 104.98 82.31 106.57 85.28
                    C 107.12 86.30 106.80 88.13 106.60 89.33
                    A 0.41 0.41 0.0 0 0 106.96 89.80
                    L 146.48 94.37
                    A 0.36 0.36 0.0 0 1 146.80 94.77
                    L 143.24 125.52
                    Q 143.19 125.98 142.73 125.93
                    L 103.33 121.37
                    Z
                    M 123.01 110.07
                    Q 123.84 110.17 125.23 110.43
                    Q 125.73 110.52 125.67 111.02
                    L 124.69 119.51
                    A 0.36 0.36 0.0 0 0 125.01 119.91
                    L 129.83 120.47
                    Q 130.17 120.51 130.21 120.17
                    L 132.57 99.74
                    Q 132.60 99.49 132.40 99.36
                    L 127.72 96.35
                    A 0.23 0.22 20.3 0 0 127.37 96.50
                    L 126.34 105.25
                    Q 126.28 105.74 125.71 105.70
                    Q 125.60 105.69 123.54 105.45
                    Q 121.48 105.21 121.37 105.19
                    Q 120.81 105.11 120.86 104.62
                    L 121.85 95.86
                    A 0.23 0.22 -7.1 0 0 121.55 95.64
                    L 116.30 97.50
                    Q 116.08 97.58 116.05 97.83
                    L 113.69 118.26
                    Q 113.65 118.60 113.99 118.64
                    L 118.81 119.19
                    A 0.36 0.36 0.0 0 0 119.21 118.88
                    L 120.20 110.39
                    Q 120.25 109.89 120.76 109.91
                    Q 122.17 109.98 123.01 110.07
                    Z'
            />
            <path
                d='
                    M 61.55 100.94
                    Q 69.93 102.26 77.22 100.95
                    A 0.27 0.27 0.0 0 1 77.53 101.27
                    L 70.36 137.43
                    Q 70.16 138.44 69.91 137.44
                    L 61.16 101.36
                    A 0.35 0.34 -2.7 0 1 61.55 100.94
                    Z'
            />
            <path
                d='
                    M 37.08 170.51
                    Q 45.36 168.41 66.23 162.95
                    Q 70.22 161.91 74.28 162.21
                    Q 80.11 162.65 81.80 168.19
                    C 83.26 173.02 77.98 176.50 74.19 178.17
                    Q 73.45 178.49 57.20 185.90
                    Q 56.75 186.10 56.27 186.04
                    Q 33.83 183.50 15.33 170.35
                    A 1.29 1.29 0.0 0 1 14.81 169.11
                    Q 21.23 126.19 22.85 115.32
                    Q 23.38 111.75 26.19 108.96
                    Q 27.85 107.31 32.24 105.77
                    Q 39.60 103.20 41.20 102.65
                    Q 41.72 102.47 42.03 102.08
                    L 42.50 101.50
                    Q 42.73 101.22 42.79 101.53
                    Q 42.80 101.60 42.86 101.65
                    Q 42.94 101.71 42.86 101.87
                    L 34.40 117.67
                    A 3.46 3.46 0.0 0 0 36.60 122.66
                    L 55.06 127.37
                    A 0.36 0.36 0.0 0 1 55.26 127.93
                    L 47.32 138.77
                    A 3.58 3.57 41.8 0 0 47.58 143.31
                    L 60.30 157.11
                    A 0.29 0.29 0.0 0 1 60.16 157.58
                    L 44.12 161.46
                    A 0.31 0.30 83.7 0 1 43.74 161.15
                    L 44.77 133.53
                    Q 44.89 130.36 41.57 130.13
                    Q 41.47 130.12 41.44 130.12
                    A 3.26 2.98 -84.1 0 0 37.93 133.25
                    L 36.51 170.04
                    Q 36.48 170.66 37.08 170.51
                    Z'
            />
            <path
                d='
                    M 116.88 141.59
                    Q 113.98 138.90 109.26 139.69
                    Q 108.62 139.80 108.62 139.15
                    L 108.62 129.63
                    Q 108.62 128.90 109.35 128.98
                    L 118.55 130.05
                    Q 119.04 130.10 119.23 130.56
                    L 132.33 160.98
                    A 0.71 0.70 56.0 0 1 132.18 161.77
                    Q 123.00 170.78 112.20 176.63
                    Q 110.84 177.36 110.77 175.95
                    L 110.36 168.32
                    Q 110.28 166.85 111.74 166.27
                    C 117.04 164.18 121.08 161.10 120.83 154.75
                    Q 120.76 152.86 119.63 147.88
                    Q 118.56 143.15 116.88 141.59
                    Z'
            />
            <path
                d='
                    M 91.70 151.68
                    Q 93.02 152.43 94.46 151.95
                    Q 102.48 149.26 111.05 146.37
                    A 0.88 0.88 0.0 0 1 112.19 147.00
                    L 114.12 154.95
                    A 2.83 2.82 69.4 0 1 112.69 158.12
                    L 95.30 167.24
                    A 3.75 3.75 0.0 0 1 90.81 166.47
                    L 84.92 160.07
                    A 4.12 4.12 0.0 0 1 83.86 156.78
                    Q 84.35 152.70 84.93 148.42
                    C 85.16 146.68 85.86 146.20 87.31 145.80
                    Q 87.87 145.64 88.15 146.16
                    L 90.26 150.19
                    Q 90.76 151.14 91.70 151.68
                    Z'
            />
            <path
                d='
                    M 88.87 173.48
                    Q 93.22 175.45 97.49 173.75
                    Q 99.86 172.80 102.19 171.27
                    Q 103.65 170.32 103.76 172.09
                    L 104.16 178.78
                    Q 104.25 180.40 102.60 181.02
                    Q 88.60 186.21 72.78 186.94
                    A 0.33 0.33 0.0 0 1 72.44 186.63
                    Q 72.43 186.36 72.55 186.32
                    C 79.26 183.87 85.88 180.24 88.40 173.67
                    A 0.35 0.35 0.0 0 1 88.87 173.48
                    Z'
            />
        </g>
    </svg>
));

export default StateIcon;
