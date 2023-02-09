export default function fetchMovieData(path) {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${path}`).then(response => {
    if (response.ok) {
      return response.json()
      } else {
        throw new Error(response.status)
      }
    })
}