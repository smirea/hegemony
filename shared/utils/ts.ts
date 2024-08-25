// Imported from https://github.com/sindresorhus/type-fest
// since I could not manage to import the actual module (ts commonjs error)

export type ObjectKeys<T extends object> = `${Exclude<keyof T, symbol>}`;

export const objectKeys = Object.keys as <Type extends object>(
    value: Type,
) => Array<ObjectKeys<Type>>;

export const objectEntries = Object.entries as <Type extends Record<PropertyKey, unknown>>(
    value: Type,
) => Array<[ObjectKeys<Type>, Required<Type>[ObjectKeys<Type>]]>;

export const objectFromEntries = Object.fromEntries as <
    Key extends PropertyKey,
    Entries extends ReadonlyArray<readonly [Key, unknown]>,
>(
    values: Entries,
) => {
    [K in Extract<Entries[number], readonly [Key, unknown]>[0]]: Extract<
        Entries[number],
        readonly [K, unknown]
    >[1];
};

const has = Object.prototype.hasOwnProperty;

export function objectHasOwn<ObjectType, Key extends PropertyKey>(
    object: ObjectType,
    key: Key,
): object is ObjectType & Record<Key, unknown> {
    return has.call(object, key);
}
