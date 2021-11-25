import {writable} from 'svelte/store'

export const apiData = writable([])
let herokuUrl = "https://tayanexavier.herokuapp.com/list"
let localUrl = "http://localhost:8080/list";

async function getList() {
  fetch(herokuUrl)
    .then((response) => response.json())
    .then((data) => {
      apiData.set(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

getList()