
//const url = "https://pokeapi.co/api/v2/pokemon/10/"
const url ="http://api.tvmaze.com/search/shows?q=alf"


fetch(url)
.then((response)=> response.json())
.then((data)=>{
    console.log(data[0].score)
    console.log(data[0].show.id)
    console.log(data[0].show.name)
    let element =document.querySelector(".aqui");
    element.innerHTML=`
    <p>NOMBRE: ${data[0].show.name}</p>
    <p>IDIOMA: ${data[0].show.language}</p>
    <p>FECHA 1ER CAPITULO ${data[0].show.premiered}</p>
    <p>RESUMEN: ${data[0].show.summary}</p>
    <p>GENERO: ${data[0].show.genres}</p>
    <p>RATING PROMEDIO: ${data[0].show.rating.average}</p>
    <img src="${data[0].show.image.medium}"> </img>
    <br>

    `
}
    
)

/*
    <img src="${data[0].show.image[0]}"> </img>

fetch(url)
.then((response)=> response.json())
.then((data)=>{
    console.log(data)
    let element =document.querySelector(".aqui");
    element.innerHTML=`
    <img src="${data.sprites.front_default}"> </img>
    <p>NOMBRE: ${data.name}</p>
    <p>NRO DE ID: ${data.id}</p>
    <p>EXPERIENCIA: ${data.base_experience}</p>
    <p>ALTURA: ${data.height}</p>
    <p>PESO: ${data.weight}</p>
    <p>MOVIMIENTO: ${data.moves[2].move.name}</p>
    <p>STATS: ${data.stats[1].stat.name}</p>
    <br>
    `
})
*/