// const promise = new Promise ((resolve, reject) => {
//     if (true) {
//         resolve('Brillient');
//     } else {
//         reject('Nah Sun!!')
//     }
// })
// promise.then(result => console.log(result))

// promise
// .then(result => result + '!')
// .then(result2 => {
//   console.log(result2)
// })

// promise
// .then(result => result + '!!')
// .then(result2 => {
//   throw Error
//   console.log(result2)
// }).catch(() => console.log('error'))

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

// const urls = [
//     'https://jsonplaceholder.typicode.com/users',
//     'https://jsonplaceholder.typicode.com/posts',
//     'https://jsonplaceholder.typicode.com/albums'
// ]

// Promise.all(urls.map(url => {
//     return fetch(url).then(resp=> resp.json())
// })).then(results => {
//     console.log(results[0])
//     console.log(results[1])
//     console.log(results[2])
// }).catch(() => console.log('error'))

// const fetchStarWars = fetch('http://swapi.dev/api/people/2')
//     .then(resp => resp.json())
//     .then(console.log)

// const fetchPromise = fetch("http://swapi.dev/api/people/1");
//     fetchPromise.then(resp => resp.json())
//     .then(console.log);

  
// const fetchPromise = fetch("http://swapi.dev/api/people/1");
//   fetchPromise.then(response => {
//   console.log(response);
// });

// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
// const promiseEx = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("success");
//   }, 4000
// )}).then(console.log)

// #2) Run the above promise and make it console.log "success"
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("success");
//   }, 4000
// )}).then(console.log)


// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"

// const promise = Promise.resolve(
//     setTimeout(() => {
//       console.log("Suuuuuuu");
//     }, 6000)
//   );

// #4) Catch this error and console log 'Ooops something went wrong'
// const promise3 = Promise.reject(('failed'),
//     setTimeout(() => {
//       throw Error
//       console.log("Suuuuuuu");
//     }, 6000)
//   ).catch(console.log('Ooops something went wrong'));


// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
// const urels = [
//   'http://swapi.dev/api/people/1',
//   'http://swapi.dev/api/people/2',
//   'http://swapi.dev/api/people/3',
//   'http://swapi.dev/api/people/4'
// ]

// Promise.all(urels.map(url => {
//     return fetch(url).then(resp=> resp.json())
// })).then(results => {
//     console.log(results)
// }).catch(() => console.log('error'))

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle i