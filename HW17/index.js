function generateKey(length, characters) {
    let result = '';

    while(length) {
        result += characters[Math.floor(Math.random() * characters.length)]
        --length;
    }

    return result;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

if(characters.length) {
    const key = generateKey(16, characters);
    console.log(key);
}