import {writable} from 'svelte/store'

export const apiData = writable([])

let url = "https://tayanexavier.herokuapp.com/list";

async function getList() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0]);
      apiData.set(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

getList()