'use client'

import React from 'react'
import { SimpleWidget } from '..'
import { useAppSelector } from '@/app/store'
import { IoCart } from 'react-icons/io5'

export const WidgetsGrid = () => {
  const isCart = useAppSelector(state => state.counter.count)
  return (
    <div className='flex flex-wrap items-center justify-center p-2'>
      <SimpleWidget
        title={`${isCart}`}
        subtitle='Products added'
        label='Counter'
        icon={<IoCart size={70} className='text-emerald-600' />}
        href='/dashboard/counter'
      />
      {/* <SimpleWidget /> */}
    </div>
  )
}
