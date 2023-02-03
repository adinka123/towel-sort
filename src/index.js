


module.exports = function towelSort (matrix) {
 
        let result = [];
        let isForward = true;
        for (let i = 0; i < matrix.length; i++) {
            if (isForward) {
                for (let j = 0; j < matrix[i].length; j++) {
                    result.push(matrix[i][j]);
                }
                isForward = false;
            } else {
                for (let j = matrix[i].length - 1; j >= 0; j--) {
                    result.push(matrix[i][j]);
                }
                isForward = true;
            }
        }
        return result;
    }
