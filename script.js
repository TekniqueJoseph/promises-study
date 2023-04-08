// const promise = new Promise ((resolve, reject) => {
//     if (true) {
//         resolve('Brillient');
//     } else {
//         reject('Nah Sun!!')
//     }
// })

// const promise2 = new Promise ((resolve, reject) => {
//     setTimeout(resolve, 100, 'Peace Peace')
// })

// const promise3 = new Promise ((resolve, reject) => {
//     setTimeout(resolve, 1000, 'Sup Sun')
// })

// const promise4 = new Promise ((resolve, reject) => {
//     setTimeout(resolve, 3000, 'Got dem new Ckarks!!!')
// })

// Promise.all([promise, promise2, promise3, promise4])
//     .then(values => {
//         console.log(values)
//     })

// promise
// .then(result => result + '!')
// .then(result2 =>result2 + '?' )
// .catch(() => console.log('error'))
// .then(result3 => {
//     console.log(result3 +"!")
// })

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
    return fetch(url).then(resp=> resp.json())
})).then(results => {
    console.log(results)
})