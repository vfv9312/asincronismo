const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)//if ternario
            ? setTimeout(() => resolve('Async resolved!'), 2000)//condicion positiva
            : reject(new Error('Error!'));//es un else si no
    });
}

const anotherFn = async () => {
    console.log('Ya la llamamos, ahora llamaremos fnAsync y esperaremos a que se resuelva')
    const something = await fnAsync();
    console.log(something);
    console.log('Listo, ya se resolvió el proceso asincrono');
}

console.log('Antes de llamar anotherFn');
anotherFn();
console.log('Holaaa, me llamaron y no tengo que esperar a que termine el proceso asincrono');
