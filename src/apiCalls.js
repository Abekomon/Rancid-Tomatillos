export default function fetchData(path) {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${path}`).then(response => response.json()).catch(error => console.log(error))
}