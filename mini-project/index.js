// Programa que hace una peticion al la API de rick & morty y regresa un personañe aleatorio

async function personajeAleatorio() {
  const aleatorio = numeroAleatorio(1,500);
  // console.log(aleatorio)
  const respuesta = await fetch(`https://rickandmortyapi.com/api/character/${aleatorio}`);
  // console.log('1',respuesta)
  const miPersoanje = await respuesta.json();
  // console.log('2',miPersoanje) 
  return miPersoanje;
}

function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

window.guess.addEventListener('click', async () => {
  // console.log('Click')
  const personaje = await personajeAleatorio();
  // console.log(personaje.name)
  document.getElementById('prev').style.display = 'none';
  document.getElementById('next').style.display = 'flex';
  document.getElementById('name').innerText = `¡Eres ${personaje.name}!`;
  document.getElementById('image').src = personaje.image;

  const details = []

  Object.keys(personaje).map((value) => {
    if (['type', 'species', 'status', 'gender'].indexOf(value) > -1){
      if(personaje[value]){
        details.push(`<li><strong>${value}:</strong> ${personaje[value]}</li>`)
      }
    }
  })
  console.log(details)
  document.getElementById('details').innerHTML = details.join('')
})
