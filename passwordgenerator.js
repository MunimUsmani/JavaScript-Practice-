

function generatepassword(passwordlenght,  includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    const lowercaseChars = "äbcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const NumberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? NumberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";


    if (passwordlenght <= 0) {
        return '(password lenght must be atleast be 1 character)';
    }
    if (allowedChars.length === 0) {
        return '(atleast 1 set of character needs to be selected)';
    }
    for (let i = 0; i < passwordlenght; i++) {
        const randomindex = Math.floor(Math.random()*allowedChars.length);
        password += allowedChars[randomindex];
        
    }
    return password;
}

const passwordlenght = 13;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;


const password = generatepassword(passwordlenght,  includeLowercase, includeUppercase, includeNumbers, includeSymbols);

console.log('Generated password:',password);