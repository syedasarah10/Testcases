const reverse = (string) => {
    if(string.length === 0){
        return '';
    } else {
        return string.split('').reverse().join('');
    }
}

export default reverse;