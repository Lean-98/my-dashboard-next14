import { PokemonGrid, PokemonsResponse, SimplePokemon } from '@/app/pokemons'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'List of Pokemons',
  description: 'Simple List of Pokemons',
}

const getAllPokemons = async (
  limit = 30,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then(res => res.json())
  const pokemons = data.results.map(pokemon => ({
    id: pokemon.url.split('/').at(-2)!, // Not null operator
    name: pokemon.name,
  }))

  // throw new Error('Este es un error que no debería de suceder')
  return pokemons
}

export default async function PokemonsPage() {
  const pokemons = await getAllPokemons(151)

  return (
    <div className='flex flex-col p-2 '>
      <span className='text-5xl my-2'>
        List of Pokemons: <small>Static</small>
      </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  )
}
