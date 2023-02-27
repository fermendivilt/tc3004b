const print = (string) => {
    console.log(string);
}

const callback = (funcion) => {
    funcion();
}

const esperador1 = (timeout) => {
    setTimeout(() => {
        console.log('Hola asíncrono');
    }, timeout);
}

print('Hola 1');
esperador1(5000);
print('Hola 2');
callback(() => {console.log('Hola 3')})