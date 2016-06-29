

exports.getCounts = function () {

    const counts = [
        {
            id : 1,
            value : 1,
            name : 'Pints',
            increment : 1,
            units : 'pints'
        },
        {
            id : 2,
            value : 4,
            name : 'Coffees',
            increment : 1,
            units : 'cups'
        }
    ];

    return counts;

};

exports.incrementCount = function (id) {

    return id + 1;

};
