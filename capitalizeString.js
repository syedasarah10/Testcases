const capitalize = (string) => {
    
    if (string.length === 0){
        return '';
    } else {
    string = string.toLowerCase();
    return string[0].toUpperCase() + string.slice(1);
    }
}

module.exports = capitalize;