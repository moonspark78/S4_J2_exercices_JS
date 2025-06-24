function getUser() {
  fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(data => console.log(data.results))
    .catch(err => console.error(err));
}