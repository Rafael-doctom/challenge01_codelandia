let URL = 'https://6201763afdf5090017249a1f.mockapi.io/posts';

async function getData() {
    fetch(URL)
        .then(response => response.json())
        .then(data => console.log(data))
        // .then(data => console.log(data[0].title))
        .catch(error => console.log(error));
};

getData();


