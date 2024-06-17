import { figures, wrong } from '$lib';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
    const correct = figures.sort(() => Math.random() - 0.5);
    const current = wrong(figures);

    return { correct, current };
};
