import { PokemonGrid } from '@/app/pokemons'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Favorites',
  description: 'List of Favorites Pokemons',
}

export default async function FavoritesPage() {
  return (
    <div className='flex flex-col p-2 '>
      <span className='text-5xl my-2'>
        Favorites Pokemons:
        <small className='text-emerald-700'>Global State</small>
      </span>
      <PokemonGrid pokemons={[]} />
    </div>
  )
}
