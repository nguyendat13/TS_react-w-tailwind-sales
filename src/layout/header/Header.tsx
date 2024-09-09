import Logo from './Logo';
import Search from "./Search";
import MainMenu from './MainMenu';
import User from './account/index';
import Cart from './ShoppingCart';
function Header() {
  return (  
    <div className="bg-green-950 p-5 w-full grid grid-cols-5 ">
        <div className=''><Logo/></div>
        <div className=''><MainMenu/></div>
        <div className='user'><User/></div>
        <div className='cart'><Cart/></div>

        <div className='rounded-full col-start-8 '><Search/></div>
    </div>
  )
}

export default Header
