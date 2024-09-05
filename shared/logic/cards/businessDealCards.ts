import { ResourceEnum } from '../types';

export interface BusinessDealCard {
    id: string;
    cost: number;
    [ResourceEnum.food]?: number;
    [ResourceEnum.luxury]?: number;
    tariffs: [number, number];
}

const businessDealCards: BusinessDealCard[] = [
    {
        id: 'test-1',
        cost: 100,
        [ResourceEnum.food]: 10,
        [ResourceEnum.luxury]: 5,
        tariffs: [10, 5],
    },
    {
        id: 'test-2',
        cost: 100,
        [ResourceEnum.food]: 3,
        [ResourceEnum.luxury]: 7,
        tariffs: [10, 5],
    },
];

export default businessDealCards;
