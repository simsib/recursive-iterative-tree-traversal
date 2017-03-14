var exports = module.exports = {};
   
exports.FormatValue = function(value, level) {
    let tmp = "";
    for (let i = level; i > 0; i--) {
        tmp += "  ";
    }
    return `${tmp} - ${value}`;
}