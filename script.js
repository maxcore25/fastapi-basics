let apiData = null
const divConsole = document.querySelector('.console')

fetch('http://127.0.0.1:8000/items/3?q=any')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        apiData = data
    })
    .then(res => {
        // divConsole.innerHTML += apiData
    })
    .then(res => {
        let printObj = function (obj) {
            let string = '';

            for (let prop in obj) {
                if (typeof obj[prop] == 'string') {
                    string += prop + ': ' + obj[prop] + '; </br>';
                } else {
                    string += prop + ': { </br>' + obj[prop] + '}';
                }
            }

            return string;
        }
        // divConsole.innerHTML += printObj(apiData)
        divConsole.innerHTML = JSON.stringify(apiData);
    })
    .catch(error => console.log('Fetch1: ' + error))


fetch('http://127.0.0.1:8000', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({name: 'User 1'})
})
    .then(res => {
        return res.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log('Fetch2: ' + error))