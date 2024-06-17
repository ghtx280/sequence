<script lang="ts">
    import type { A } from '$lib';
    import type { PageData } from './$types';

    export let data: PageData;

    console.log(data);

    const sequence = data;

    console.log(data);

    function getCorrectCount(correct: A, current: A) {
        return correct.filter((figure, i) => figure === current[i]).length;
    }

    $: correct = getCorrectCount(sequence.current, sequence.correct);

    let selected = -1;

    function checkWin(arr: A) {
        if (correct === arr.length) {
            alert('Ти виграв!');
        }
    }

    $: checkWin(sequence.current);

    // function choose(figure) {
    //     correct++;
    // }

    function swapElements(array: A, index1: number, index2: number) {
        [array[index1], array[index2]] = [array[index2], array[index1]];
        return array;
    }
</script>

<div class="flex-center flex-col gap-50 h-screen">
    <h3>Правильно: {correct}</h3>

    <div class="gap-10 flex-wrap jc-c">
        {#each sequence.current as figure, i (i)}
            <button
                class=" {i === selected ? 'outline-2+solid' : ''} bg-none round"
                on:click={() => {
                    if (selected == -1) {
                        selected = i;
                    } else {
                        sequence.current = swapElements(sequence.current, selected, i);
                        selected = -1;
                    }
                }}
            >
                <div class="sq-50 md:sq-60 round op-60 bg-{figure}"></div></button
            >
        {/each}
    </div>
</div>
