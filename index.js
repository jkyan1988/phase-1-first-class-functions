function receivesAFunction(callback) {
    return callback()
}
function callback() {
    return returnsANamedFunction()
}
function returnsANamedFunction() {
    return function pie() {
        console.log('pie')
}
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log('hello')
    }
}
