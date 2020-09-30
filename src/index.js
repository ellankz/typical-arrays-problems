exports.min = function min(array = []) {
    return array.reduce((least, current) => {
        return current < least ? current : least;
    }, 0);
};

exports.max = function max(array = []) {
    return array.reduce((most, current) => {
        return current > most ? current : most;
    }, 0);
};

exports.avg = function avg(array = []) {
    const sum = array.reduce((total, current) => {
        return total + current;
    }, 0);
    return array.length > 0 ? sum / array.length : 0;
};
