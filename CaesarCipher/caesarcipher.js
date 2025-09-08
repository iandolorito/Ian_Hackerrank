function caesarCipher(s, k) {
    const rotate = k % 26; // Handle  greater than 26
    let result = '';    
    for (let char of s) {
        let code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) { // Uppercase letters
            code = ((code - 65 + rotate) % 26) + 65;
        }
        else if (code >= 97 && code <= 122) { // Lowercase letters
            code = ((code - 97 + rotate) % 26) + 97;
        }
        result += String.fromCharCode(code);
    }
    return result;  

}
