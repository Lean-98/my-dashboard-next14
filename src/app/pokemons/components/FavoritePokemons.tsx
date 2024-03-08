'use client'

import { IoHeartOutline } from 'react-icons/io5'
import { useAppSelector } from '@/app/store'
import { PokemonGrid } from '..'

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector(
    state => Object.values(state.pokemons.favorites) // Lo convierto a array
  )

  return (
    <>
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <PokemonGrid pokemons={favoritePokemons} />
      )}
    </>
  )
}

export const NoFavorites = () => {
  return (
    <div className='flex flex-col h-[50vh] items-center justify-center'>
      <IoHeartOutline size={100} className='text-red-500' />
      <span className='text-xl'>There are no favorites</span>
    </div>
  )
}
