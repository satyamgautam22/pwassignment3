async function fetchMultipleData(urls) {
    const fetchPromises = urls.map(url => fetch(url).then(response => response.json()));
    return Promise.all(fetchPromises);
  }
  
  fetchMultipleData([
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2'
  ]).then(data => console.log(data));
  