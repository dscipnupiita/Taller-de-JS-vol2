// Programa que hace una peticion al la API de rick & morty y regresa un personañe aleatorio

async function personajeAleatorio() {
  const aleatorio = numeroAleatorio(1,500);
  const respuesta = await fetch(`https://rickandmortyapi.com/api/character/${aleatorio}`);
  return await respuesta.json();
}

function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

window.guess.addEventListener('click', async () => {
  document.getElementById('prev').style.display = 'none';
  document.getElementById('load').style.display = 'flex'
  const personaje = await personajeAleatorio();
  document.getElementById('image').src = personaje.image;
  document.getElementById('load').style.display = 'none';
  document.getElementById('next').style.display = 'flex';
  document.getElementById('name').innerText = `¡Eres ${personaje.name}!`;
  
  const details = []
  
  Object.keys(personaje).map((value) => {
    if (['type', 'species', 'status', 'gender'].indexOf(value) > -1){
      if(personaje[value]){
        details.push(`<li><strong>${value}:</strong> ${personaje[value]}</li>`)
      }
    }
  })
  document.getElementById('details').innerHTML = details.join('')
})

window.return.addEventListener('click', async () => {
  document.getElementById('prev').style.display = 'flex';
  document.getElementById('next').style.display = 'none';
})
