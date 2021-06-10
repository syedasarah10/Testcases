
let cCipher = (str, shift) => {


    str = str.toLowerCase();
    let decipher = '';
    for(let i = 0 ; i < str.length; i++){
      decipher += String.fromCharCode((str.charCodeAt(i) + shift - 97)  % 26 + 97);
    }

    return decipher;
  }
 

  module.exports = cCipher;