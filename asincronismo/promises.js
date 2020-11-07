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

const personajes = new Promise ((resolve, reject) => {
  setTimeout(() => {
    resolve(data);
  }, 5000)
})

personajes.then((value)=>console.log(value))