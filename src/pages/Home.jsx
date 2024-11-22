import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import axios from "axios"
import { Grid } from "@mui/material"
import { Container}  from '@mui/system'
import { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard/Card"
import { Skeletons } from "../components/Skeletons";
import Footer from '../components/Footer/Footer'


export const Home = ({ setPokemonData }) => {
  const [pokemons, setPokemons] = useState([]);
 

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    var getEndpoints = [];
    for (var i = 1; i < 25; i++) {
      getEndpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios.all(getEndpoints.map((endpoint) => axios.get(endpoint)))
    .then((res) => setPokemons(res))
    .catch((err)=> console.log(err))
  };

  const pokemonFilter = (name) => {
    var filteredPokemons = [];
    if (name === "") {
      getPokemons()
    }
    for (var i in pokemons) {
      if (pokemons[i].data.name.includes(name)) {
        filteredPokemons.push(pokemons[i])
      }
    }

    setPokemons(filteredPokemons)
  };

  return (
    <div>
      <Navbar pokemonFilter={pokemonFilter} />
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          {pokemons.length === 0 ? (
            <Skeletons />
          ) : (
            pokemons.map((pokemon, key) => (
              <Grid item xs={12} sm={6} md={3} key={key}>
               
                  <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types} />
              
              </Grid>
            ))
          )}
        </Grid>
      </Container>
      <Footer/>
    </div>
  );
};

// export const Home = () => {
//   const [pokemons, setPokemons] = useState ([])
//   useEffect(() =>{
//        getPokemons()   

//   })

//   const getPokemons = () => {
//     var getendpoints = []
//     for(var i = 1; i < 25; i++){
//       getendpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
//     }
    
//     axios.all(getendpoints.map((endpoint) => axios.get(endpoint))).then((res)=> setPokemons (res))
//     .catch((err)=> console.log(err))
  
//    }
//    const pokemonFilter = (name) => {
//     var filteredPokemons = [];
//     if (name === "") {
//       getPokemons();
//     }
//     for (var i in pokemons) {
//       if (pokemons[i].data.name.includes(name)) {
//         filteredPokemons.push(pokemons[i]);
//       }
//     }

//     setPokemons(filteredPokemons);
//   };


//   return (
//     <div>
//         <Navbar pokemonFilter={pokemonFilter} />
//         <Container maxWidth= "false">
//           <Grid container spacing={4}>
            
//           {pokemons.length === 0 ? (
//             <Skeletons />
//           ) : (
//             pokemons.map((pokemon, key) => (
//               <Grid item xs={12} sm={6} md={3} key={key}>
               
//                   <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types} />
              
//               </Grid>
//             ))
//           )}
            
//           </Grid>
//         </Container>
      
//     </div>
//   )
// }
