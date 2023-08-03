
const peopleSW = async () => {
	const response = await fetch("https://swapi.dev/api/people");
	const data = await response.json();
	console.log(data);
}

// peopleSW()

//Ejercicio 2 : Busca cómo conseguir hacer una petición para que te llegue sólo la información de Darth Vader, y muéstrala por consola.

const darthVader = async () => {
	const respuesta = await fetch("https://swapi.dev/api/people/4/");
	const dato = await respuesta.json();
	console.log(dato);
}

// darthVader()

//Ejercicio 3 : Muestra por consola la lista de películas en las que aparece el personaje de Luke Skywalker.

// const filmsSkyW = async () => {
// 	const resultado = await fetch("https://swapi.dev/api/people/1/");
// 	const datos = await resultado.json();
//     const onlyFilms = datos.film[i].forEach((indexOf[i],[i],) => console.log());;
//     // const resultFilms = await fetch(datos.films[0])
//     // const resultDatos = await resultFilms.json()
// 	// console.log(datos);
// }

// filmsSkyW()

//Ejercicio 4 : Busca el personaje de Leia Organa y consigue que se muestre por consola la información del planet aen el que vivie: Alderaan.


    

