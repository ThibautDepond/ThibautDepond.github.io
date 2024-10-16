/**
 * Creates a reducer function that adds a separator between each value in the array being reduced when the index is greater than 0.
 * @param {any} separator - The value to be used as separator.
 * @returns {function} A reducer function.
 */
const interperseReductor = (separator) => {
    return (acc, curr, i) => {
        if (i > 0) {
            acc.push(separator)
        }
        acc.push(curr)
        return acc
    }
}

export const interperseWith = (array, separrator) => {
    return array.reduce(interperseReductor(separrator), []) 
}