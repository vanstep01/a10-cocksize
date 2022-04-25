import { getRandomPerDateDickSize } from './get-random-per-date-dick-size';

export const getCockSizeMessage = (userId) => {
    const size = getRandomPerDateDickSize(
        userId,
        new Date(),
        MIN_SIZE,
        MAX_SIZE,
    );

    return `My cock size is *${size}cm* ${getEmoji(size)}`;
};
