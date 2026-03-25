import { useLocation } from 'react-router-dom';
import { brainwave } from '../assets';
import { navigation } from '../constants/navigation';
import Button from './Button';
import MenuSvg from '../assets/svg/MenuSvg'
import { useState } from 'react';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

const Header = () => {

   const [openNavigation, setOpenNavigation] = useState(false);

   const toggleNavigation = () => {
      if(openNavigation) {
         setOpenNavigation(false);
         enablePageScroll()
      } else {
         setOpenNavigation(true);
         disablePageScroll()
      }
   }

   const handleClick = () => {
      if(!openNavigation) return;

      enablePageScroll();
      setOpenNavigation(false);
   }

   const pathname = useLocation();

  return (
    <div className={`fixed top-0 z-50 backdrop-blur-sm w-full lg:backdrop-blur-sm lg:py-2 ${openNavigation ? 'bg-primary' : 'bg-primary backdrop-blur-sm'}`}>
      <div className="flex items-center justify-between h-16 px-8 lg:px-8 lg-h-10 xl:h-12 xl:px-10 max-lg:py-4">

         <a href="#home" className="block w-48 xl:mr-8">
            <img src={brainwave} width={160} height={40} alt="Brainware" />
        </a>

         <nav className={` ${openNavigation ? 'flex' : 'hidden'} fixed top-16 left-0 right-0 h-[calc(100vh-4rem)] items-center justify-center lg:static lg:flex lg:mr-8 lg:bg-transparent`}>
            <div className="flex items-center bg-backgorund-prymary h-full w-full gap-2 flex-col justify-center lg:bg-transparent lg:h-auto lg:w-auto lg:flex-row">
               {navigation.map((data) => {
                  return (
                     <a key={data.id}
                     href={data.url}
                     onClick={handleClick}
                     className={`text-backgorund px-4 tracking-wider uppercase font-semibold text-[12px] transition-colors hover:text-brown-100
                        ${data.onlyMobile ? 'lg:hidden' : ''}
                        ${data.url === pathname.hash ? 'lg:text-font' : 'lg:text-font'}
                        px-4 py-2 md:py-3 lg:mr-px ${openNavigation ? 'my-4' : ''} `}
                        title={data.title}>{data.title}</a>
                  );
               })}
               </div>
         </nav>

         <div className='items-center lg:flex'>
            <a href='#signup' className='button hidden lg:block mr-8 transition-colors text-xs text-font hover:text-font/80'>
               New Account
            </a>
            <Button href='#login' className='button hidden lg:flex'>
               Sign In
            </Button>
         </div>

            <Button className='ml-auto z-50 lg:hidden' px="px-3" onClick={toggleNavigation}>
               <MenuSvg openNavigation={openNavigation}/>
            </Button>
      </div>
    </div>
  );
};

export default Header;
