import { Navigation } from './Navigation'
import Subscribe from './Subscribe'

function Header() {
  return (
    <div className='container px-0 lg:px-20'>
      <div className='py-3 flex items-center justify-between'>
        <div className='flex items-center gap-6'>
          <div id='logo' className='h-[42px] border-l rounded-lg max-h-[42px] flex items-center px-3 text-main cursor-pointer font-bold relative bg-white'>
            <a href='/'>فندورا</a>
          </div>
          <nav className='bg-white hidden lg:flex'>
            <Navigation />
          </nav>
        </div>
        <div className='h-[42px] max-h-[42px] bg-white'>
          <Subscribe />
        </div>
      </div>
    </div>
  )
}

export default Header