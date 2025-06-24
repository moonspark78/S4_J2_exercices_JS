function getUser() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => {
        document.getElementById("user").innerHTML = `<img src="${data.message}" style="max-width: 200px" alt="Dog Image">`;
    })
}