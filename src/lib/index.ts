export type A = (string | number)[];

export function wrong(arr: A) {
    const n: A = [];

    for (const i in arr) {
        const el = arr[i];
        const filtered = arr.filter((item) => item !== el && !n.includes(item));

        if (filtered.length === 0) return wrong(arr);

        const random = Math.floor(Math.random() * filtered.length);
        const selected = filtered[random];

        n.push(selected);
    }

    return n;
}

export const figures = ['blue', 'green', 'red', 'yellow', 'purple', 'orange', 'cyan', 'magenta'];
