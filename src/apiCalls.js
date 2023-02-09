import { Redirect } from "react-router-dom";

export default function fetchData(path) {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${path}`).then(response => {
    if (response.ok) {
      return response.json()
      } else {
        throw new Error(response.status)
      }
    })
}