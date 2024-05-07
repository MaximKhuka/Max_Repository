// *** task4 ***

exports.filterFoodPrice = function(food, min, max) {
    return food.filter(element => element.price >= min && element.price <= max);
};