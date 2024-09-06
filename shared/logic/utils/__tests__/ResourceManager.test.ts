import { beforeEach, describe, expect, test } from 'vitest';

import ResourceManager, {
    CapitalistMoneyResourceManager,
    MoneyResourceManager,
} from '../ResourceManager';

describe('ResourceManager', () => {
    let manager: ResourceManager;
    beforeEach(() => {
        manager = new ResourceManager({ name: 'test', value: 0 });
    });
    test('add', () => {
        expect(manager.add(10)).toBe(10);
        expect(manager.value).toBe(10);
        expect(manager.add(10)).toBe(20);
        expect(manager.value).toBe(20);
    });
    test('remove', () => {
        manager.add(10);
        expect(manager.remove(5)).toBe(5);
        expect(manager.value).toBe(5);
        expect(manager.remove(5)).toBe(0);
        expect(manager.value).toBe(0);
    });
});

describe('MoneyResourceManager', () => {
    let manager: MoneyResourceManager;
    beforeEach(() => {
        manager = new MoneyResourceManager({ name: 'test', value: 0 });
    });
    test('addLoans', () => {
        manager.addLoans(2);
        expect(manager.loans).toBe(2);
        manager.addLoans(1);
        expect(manager.loans).toBe(3);
    });
    test('removeLoans', () => {
        manager.addLoans(3);
        manager.removeLoans(1);
        expect(manager.loans).toBe(2);
        manager.removeLoans(2);
        expect(manager.loans).toBe(0);
    });
    test('remove', () => {
        manager.add(10);
        expect(manager.remove(5)).toBe(5);
        expect(manager.value).toBe(5);
        expect(manager.remove(2)).toBe(3);
        expect(manager.value).toBe(3);
    });
    test('remove - not enough - cannot take loans', () => {
        manager.add(10);
        expect(() => manager.remove(15)).toThrow('not enough money');
    });
    test('remove - with loans', () => {
        manager.add(10);
        expect(manager.remove(15, { canTakeLoans: true })).toBe(45);
        expect(manager.value).toBe(45);
        expect(manager.loans).toBe(1);
    });
});

describe('CapitalistMoneyResourceManager', () => {
    let manager: CapitalistMoneyResourceManager;
    beforeEach(() => {
        manager = new CapitalistMoneyResourceManager({ revenue: 0, capital: 0 });
    });
    test('add', () => {
        expect(manager.add(10)).toBe(10);
        expect(manager.value).toBe(10);
        expect(manager.add(5)).toBe(15);
        expect(manager.value).toBe(15);
        expect(manager.revenue).toBe(15);
        expect(manager.capital).toBe(0);

        expect(manager.add(10, { useCapital: true })).toBe(25);
        expect(manager.value).toBe(25);
        expect(manager.revenue).toBe(15);
        expect(manager.capital).toBe(10);

        expect(manager.add(10, { useCapital: true })).toBe(35);
        expect(manager.value).toBe(35);
        expect(manager.revenue).toBe(15);
        expect(manager.capital).toBe(20);
    });
    test('remove - just from revenue', () => {
        manager.add(10);
        expect(manager.remove(5)).toBe(5);
        expect(manager.value).toBe(5);
        expect(manager.revenue).toBe(5);
        expect(manager.capital).toBe(0);
        expect(manager.remove(2)).toBe(3);
        expect(manager.value).toBe(3);
        expect(manager.revenue).toBe(3);
        expect(manager.capital).toBe(0);
    });
    test('remove - useCapital=true', () => {
        manager.add(10, { useCapital: true });
        expect(manager.remove(5, { useCapital: true })).toBe(5);
        expect(manager.value).toBe(5);
        expect(manager.revenue).toBe(0);
        expect(manager.capital).toBe(5);
        expect(manager.remove(2, { useCapital: true })).toBe(3);
        expect(manager.value).toBe(3);
        expect(manager.revenue).toBe(0);
        expect(manager.capital).toBe(3);
    });
    test('remove - deplete revenue, go into capital', () => {
        manager.add(10, { useCapital: false });
        manager.add(10, { useCapital: true });
        manager.remove(5);
        expect(manager.revenue).toBe(5);
        expect(manager.capital).toBe(10);
        manager.remove(8);
        expect(manager.revenue).toBe(0);
        expect(manager.capital).toBe(7);
        manager.remove(2);
        expect(manager.revenue).toBe(0);
        expect(manager.capital).toBe(5);
    });
    test('remove - useCapital=true, deplete capital, go into revenue', () => {
        manager.add(10, { useCapital: true });
        manager.add(10, { useCapital: false });
        manager.remove(5, { useCapital: true });
        expect(manager.revenue).toBe(10);
        expect(manager.capital).toBe(5);
        manager.remove(8, { useCapital: true });
        expect(manager.capital).toBe(0);
        expect(manager.revenue).toBe(7);
    });
    test('remove - loans, canTakeLoans=false', () => {
        expect(() => manager.remove(10, { canTakeLoans: false })).toThrow('not enough money');
        expect(() => manager.remove(10, { useCapital: true, canTakeLoans: false })).toThrow(
            'not enough money',
        );
    });
    test('remove - loans, canTakeLoans=true', () => {
        manager.add(10, { useCapital: true });
        manager.add(10, { useCapital: false });
        manager.remove(45, { canTakeLoans: true });
        expect(manager.revenue).toBe(0);
        expect(manager.capital).toBe(25);
        expect(manager.loans).toBe(1);
    });
});
