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
        id: 'test',
        cost: 100,
        [ResourceEnum.food]: 10,
        [ResourceEnum.luxury]: 5,
        tariffs: [10, 5],
    },
];

export default businessDealCards;
