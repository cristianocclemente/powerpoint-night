const getPermutations = (array) => {
    if (array.length === 1) return [array];
    else {
        const permutations = [];
        for (let index = 0; index <= array.length - 1; index++) {
            const currentElement = array[index];

            const arrayRest = [...array];
            arrayRest.splice(index, 1);

            const permutationsRest = getPermutations(arrayRest);

            for (let permutationRest of permutationsRest)
                permutations.push([currentElement, ...permutationRest]);
        }
        return permutations;
    }
};

const getDerangements = (array) => {
    const permutations = getPermutations(array);
    const derangements = permutations.filter((permutation) =>
        permutation.every((_, index) => array[index] !== permutation[index])
    );
    return derangements;
};

const getRandomElement = (array) =>
    array[Math.floor(Math.random() * array.length)];

const getRandomDerangement = (array) => {
    const derangements = getDerangements(array);
    const randomDerangement = getRandomElement(derangements);
    return randomDerangement;
};

export { getRandomDerangement }