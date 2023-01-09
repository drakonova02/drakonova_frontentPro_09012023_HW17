function generateKey(length, array) {
    let result = '';

    while(length) {
        result += array[Math.floor(Math.random() * array.length)]
        --length;
    }

    return result;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

if(characters.length) {
    const key = generateKey(16, characters);
    console.log(key);
}