import { Menu } from 'lucide-react'
import { useState } from 'react'
import { Navigation } from './Navigation'
import Subscribe from './Subscribe'
import NavigationPhoneScreen from './NavigationPhoneScreen';

function Header() {
  const [showSideMenu, setShowSideMenu] = useState<boolean>(false);
  const handleNavigation = () => {
    setShowSideMenu(!showSideMenu);
  }
  return (
    <div className='container px-0 lg:px-20 relative'>
      <div className='py-3 flex items-center justify-between'>
        <div className='flex items-center gap-6'>
          <div id='logo' className='h-[42px] border-l rounded-lg max-h-[42px] flex items-center px-3 text-main cursor-pointer font-bold relative bg-white'>
            <a href='/'>فندورا</a>
          </div>
          <nav className='bg-white hidden lg:flex'>
            <Navigation />
          </nav>
          <nav className='absolute top-[66px] w-full lg:hidden'>
            <NavigationPhoneScreen sideMenu={showSideMenu} />
          </nav>
        </div>
        <div className='h-[42px] max-h-[42px] bg-white hidden lg:flex'>
          <Subscribe />
        </div>
        <div className='lg:hidden flex items-center text-sm border rounded-lg px-2 h-[42px] max-h-[42px] ml-3 cursor-pointer text-font shadow-sm gap-1 hover:bg-hoverFont' onClick={handleNavigation}>
          <Menu size={16} strokeWidth={2} />
          <span className='text-sm'>القائمة الرئيسية</span>
        </div>
      </div>
    </div>
  )
}

export default Header