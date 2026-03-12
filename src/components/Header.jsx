import { useLocation } from 'react-router-dom';
import { brainwave } from '../assets';
import { navigation } from '../constants/navigation';
import Button from './Button';

const Header = () => {

   const pathname = useLocation();

  return (
    <div className="fixed top-0 z-50 backdrop-blur-sm border-b w-full border-b-gray-600 lg:backdrop-blur-sm lg:py-4">
      <div className="flex items-center justify-between px-5 lg:px-7 xl:px-10 max-lg:py-4">

         <a href="#home" className="block w-48 xl:mr-8">
            <img src={brainwave} width={160} height={40} alt="Brainware" />
        </a>

        <nav className="hidden fixed top-20 left-10 right-0 bottom-0 lg:static lg:flex lg:mr-8 lg:bg-transparent text-primary">
          <div className="relative z-2 flex items-center flex-col justify-center  lg:flex-row">
            {navigation.map((data) => {
              return (
                  <a key={data.id} href={data.url} className={`text-backgorund px-4 tracking-wider uppercase font-medium text-[12px] transition-colors hover:text-purple-400 ${data.onlyMobile ? 'lg:hidden' : ''} ${data.url === pathname.hash ? 'z-2 lg:text-white' : 'lg:text-gray-200'} px-6 py-6 md:py-3 lg:mr-px`}>{data.title}</a>
              );
            })}
          </div>
         </nav>

         <div className='hidden items-center lg:flex'>
            <a href='#signup' className='button mr-8 transition-colors text-secondary hover:text-purple-400'>
               New Account
            </a>
            <Button href='#login' className='button hidden lg:flex'>
               Sign In
            </Button>
         </div>
      </div>
    </div>
  );
};

export default Header;
