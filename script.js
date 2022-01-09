// fetch('http://127.0.0.1:8000/')
//     .then(res => console.log(res))

// fetch('https://reqres.in/api/users')
//     .then(res => res.json())
//     .then(data => console.log(data))


// console.log(fetch('http://127.0.0.1:8000/'))
fetch('http://127.0.0.1:8000/')
    .then(res => res.json())
    .then(data => console.log(data))

