const data = {
  "results" : [
    {
      "name": "Luke Skywalker",
      "height": "172",
      "mass": "77",
      "birth_year": "19BBY",
      "gender": "male",
    },
    {
      "name": "C-3PO",
      "height": "167",
      "mass": "75",
      "birth_year": "112BBY",
      "gender": "n/a",
    },
    {
      "name": "R2-D2",
      "height": "96",
      "mass": "32",
      "birth_year": "33BBY",
      "gender": "n/a",
    },
    {
      "name": "Darth Vader",
      "height": "202",
      "mass": "136",
      "birth_year": "41.9BBY",
      "gender": "male",
    }
  ]
}

function getData(callback) {
  setTimeout(()=>{
    callback(data);
  }, 5000)
}

function showDta(data){
  console.log(data);
}

const personajes = getData(showDta);

// Pedazo de codigo para explicar los callbacks

// function saludar(nombre, callback){
//   console.log('Hola')
//   callback(nombre)
// }

// function diElNombre(nombre){
//   console.log(nombre)
// }

// console.log(saludar('Luis', diElNombre));