// *** task3 ***

function circleLength(radius) {
    return parseFloat((2 * Math.PI * radius).toFixed(1));
};
    
function circleArea(radius) {
    return Math.PI * radius ** 2;
};

module.exports = {
    circleLength,
    circleArea
};