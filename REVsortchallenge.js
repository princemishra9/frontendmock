function isSpecialMatrix(mat, n) {
    let isSpecial = true;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i !== j && mat[i][j] === 0) {
                return false
            } else if (i === j && mat[i][j] !== 0) {
                return false;
            }
        }
    }
    return true;
}