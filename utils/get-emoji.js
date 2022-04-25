const EMOJIS = {
    0: '😭',
    5: '🙁',
    10: '😐',
    15: '😏',
    20: '😮',
    25: '🥳',
    30: '😨',
    35: '😱',
};

export function getEmoji(size) {
    const sizeSteps = Object.keys(EMOJIS);
    let result;

    sizeSteps.forEach((step) => {
        if (step < size) {
            result = EMOJIS[step];
        }
    });

    return result;
}
