console.log('до setTimeout')

setTimeout(() => {
    console.log('сработал таймер 3000')
}, 3000)

setTimeout(() => {
    console.log('внутри таймера на 500')
    setTimeout(() => {
        console.log('таймер на 5000')
    }, 5000)
    console.log('внутри таймера на 500 после срабатывания на 5000')
}, 500)

console.log('после setTimeout')

console.log('before setTimeout')

console.time('tmr')
for (let i = 1; i < 2000000000; i++) {
    let a = i / i;
}

console.timeEnd('tmr')
console.log('after setTimeout')