import { api } from '../../config.json';

async function getCard(id) {
  try {
    
  } catch (e) {
    console.error(e);
  }
}

function removeCard(id) {
  try {
    fetch(api.url + api.cardDeleteEp + id, { method: 'POST' }).then(res => res.json()).then(data => data);
  } catch (error) {
    console.error(error);
  }
}

export { removeCard }