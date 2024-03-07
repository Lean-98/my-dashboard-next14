import { WidgetsGrid } from '../../components/dashboard/WidgetsGrid'
export const metadata = {
  title: 'Admin Dashboard',
  description: 'Dashboard Main',
}

export default function MainPage() {
  return (
    <div className='text-black p-2'>
      <h1 className='m-2 text-3xl'>Dashboard</h1>
      <span className='text-xl'>General Information</span>
      <WidgetsGrid />
    </div>
  )
}
