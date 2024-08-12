export function promiseDefer<T>() {
    let resolve: (value: T) => void = () => null;
    let reject: (reason?: any) => void = () => null;

    const promise = new Promise<T>((res, rej) => {
        resolve = res;
        reject = rej;
    });

    return { promise, resolve, reject };
}
