export const objSortComparer = (a, b, direction, by) => {
    const firtObj = direction === "DES" ? a : b;
    const secondObj = direction === "DES" ? b : a;

    const firstVale = typeof firtObj[by] === "string" ? firtObj[by].toUpperCase() : firtObj[by];
    const secondVal = typeof secondObj[by] === "string" ? secondObj[by].toUpperCase() : secondObj[by];
    if (firstVale < secondVal) {
        return -1;
    }
    if (firstVale > secondVal) {
        return 1;
    }

    return 0;
}