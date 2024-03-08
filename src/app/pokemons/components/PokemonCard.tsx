'use client'
import Link from 'next/link'
import Image from 'next/image'
import { SimplePokemon } from '../interfaces/simple-pokemon'
import { IoHeart, IoHeartOutline } from 'react-icons/io5'
import { useAppDispatch, useAppSelector } from '@/app/store'
import { toggleFavorite } from '@/app/store/pokemons/pokemons'

interface Props {
  pokemon: SimplePokemon
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon
  const isFavorite = useAppSelector(state => !!state.pokemons.favorites[id]) // !!lo trasforma a boolean
  const dispatch = useAppDispatch()

  const onToggle = () => {
    dispatch(toggleFavorite(pokemon))
  }

  return (
    <div className='mx-auto right-0 mt-2 min-w-60'>
      <div className='flex flex-col bg-white rounded overflow-hidden shadow-lg'>
        <div className='flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b'>
          <Image
            key={pokemon.id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            width={100}
            height={100}
            alt={pokemon.name}
            priority={false}
          />

          <p className='pt-2 text-lg font-semibold text-gray-50 capitalize'>
            {name}
          </p>
          <div className='mt-5'>
            <Link
              className='border rounded-full py-2 px-4 text-xs font-semibold text-gray-100  hover:bg-emerald-700'
              href={`/dashboard/pokemons/${name}`}>
              More info
            </Link>
          </div>
        </div>
        <div className='border-b'>
          <div
            onClick={onToggle}
            className='px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer'>
            <div className='text-red-600'>
              {isFavorite ? <IoHeart /> : <IoHeartOutline />}
            </div>
            <div className='pl-3'>
              <p className='text-sm font-medium text-gray-900 leading-none py-2'>
                {isFavorite ? 'Favorite' : 'Not favorite'}
              </p>
              <p className='text-xs text-gray-500'>Click to change</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
