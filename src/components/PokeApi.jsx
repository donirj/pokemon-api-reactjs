// import React from 'react'
// import { useState, useEffect } from 'react'


// function PokeApi() {

//   const [pokemon, setPokemon] = useState(null)
//   const [id, setId] = useState(1)
//   console.log(id)

//     useEffect(() => {
//       fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//       // json parsea la info a javascript
//       .then((res) => res.json())
//       // resuelve promesa: data es el valor de resolucion del json de arriba
//       .then((data) => {
//           setPokemon(data)
//       })
//       .catch(err => console.log(err))
//   },[id])

//   const handleAnte = () => {
//     setId(id - 1)
//   }

//   const handleSig = () => {
//     setId(id + 1)
//   }

//   return (
//     <div className='container my-5' >

//         {
//             pokemon &&
//             <div>
//                 <h3>{pokemon.name}</h3>
//                 <img src={pokemon.sprites.front_default} alt={pokemon.name} />
//             </div>
//         }

//             <button onClick={handleAnte}>Anterior</button>
//             <button onClick={handleSig}>Siguiente</button>

//     </div>
//   )
// }

// export default PokeApi