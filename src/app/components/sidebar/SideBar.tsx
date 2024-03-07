import Image from 'next/image'
import {
  IoBrowsersOutline,
  IoCalculator,
  IoFootball,
  IoHeartOutline,
  IoLogoReact,
} from 'react-icons/io5'
import SideBarMenuItem from './SideBarMenuItem'

const menuItems = [
  {
    path: '/dashboard/main',
    icon: <IoBrowsersOutline size={40} />,
    title: 'Dashboard',
    subtitle: 'Visualization',
  },
  {
    path: '/dashboard/counter',
    icon: <IoCalculator size={40} />,
    title: 'Counter',
    subtitle: 'Counter Client Side',
  },
  {
    path: '/dashboard/pokemons',
    icon: <IoFootball size={40} />,
    title: 'Pokemons',
    subtitle: 'Static Generation',
  },
  {
    path: '/dashboard/favorites',
    icon: <IoHeartOutline size={40} />,
    title: 'Favorites',
    subtitle: 'Global State',
  },
]

export const SideBar = () => {
  return (
    <div
      id='menu'
      style={{ width: '400px' }}
      className='bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll'>
      <div id='logo' className='my-4 px-6'>
        <h1 className='flex items-center text-lg md:text-2xl font-bold text-white'>
          <IoLogoReact className='mr-2' />
          <span>Dash</span>
          <span className='text-emerald-300'>777</span>
        </h1>
        <p className='text-slate-500 text-sm'>
          Manage your actions and activities
        </p>
      </div>
      <div id='profile' className='px-6 py-10'>
        <p className='text-slate-500 mb-2'>Welcome back,</p>
        <a href='#' className='inline-flex space-x-2 items-center'>
          <span>
            <Image
              className='rounded-full'
              src='https://avatars.githubusercontent.com/u/104113851?v=4'
              alt='User Avatar'
              width={70}
              height={70}
              priority
            />
          </span>
          <span className='text-sm md:text-base font-bold'>Leandro Bazan</span>
        </a>
      </div>

      <div id='nav' className='w-full px-6'>
        {menuItems.map(item => (
          <SideBarMenuItem key={item.path} {...item} />
        ))}
      </div>
    </div>
  )
}
