const promise = new Promise ((resolve, reject) => {
    if (true) {
        resolve('Brillient');
    } else {
        reject('Nah Sun!!')
    }
})

promise
.then(result => result + '!')
.then(result2 => {
    console.log(result2)
})