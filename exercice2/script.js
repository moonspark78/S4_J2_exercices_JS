const button = document.querySelector('button');
const select = document.querySelector('select');
const box = document.querySelector('.box');

button.addEventListener('click', () => {
    let bread = select.value;
    let url;

    if(bread === "") {
        url = 'https://dog.ceo/api/breeds/image/random';
    } else {
        url = `https://dog.ceo/api/breed/${bread}/images/random`;
    }

    fetch(url)
    .then(response => response.json())
    .then(data => {
        box.innerHTML = `<img src="${data.message}" style="max-width: 100%; max-height: 100%; object-fit: contain; alt="Dog Image">`;
    })
})