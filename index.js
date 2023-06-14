//Escutei o senhor no meio da prova e desisti de fazer html (senão iria fazer apenas 2 questões...)

function fatorial(num) {
    if(num === 1) {
        return 1
    } else {
        return fatorial(num - 1) * num
    }
}

console.log(fatorial(10))