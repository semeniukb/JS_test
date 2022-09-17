

fetch('https://jsonplaceholder.typicode.com/posts/1/comments', {
    method: 'POST',
    body: JSON.stringify({name: 'Alex', age: 15}),
    headers: {
        'Content-type': 'application/json'
    }
})

  .then(response => response.json())
  .then(json => console.log(json));