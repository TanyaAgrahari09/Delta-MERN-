module.exports.sum = (a, b) => a + b;
module.exports.mul = (a, b) => a * b;
module.exports.g = 9.8;
module.exports.PI = 3.14;

//or instead of module.exports., we can directly use exports. but we cant do like:    exports = 7;   cause it will consider exports as a variable then.


/*module.exports = {
    sum : sum,
    mul : mul,
    g: g,
    PI: PI,
};
*/

//module.exports = obj;
