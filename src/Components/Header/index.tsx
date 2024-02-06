import logo from '../../assets/imgs/logo/coffee-logo.png'
import Cart from '../Cart';
import Navigation from '../Navigation';
const Header = () => {  

    return (
        <div className='py-4 px-2 bg-slate-200 flex justify-between fixed w-full'>
            <div className='flex text-2xl w-3/12 gap-4 justify-center items-center text-black font-medium'>
                <img src={logo} alt=""  className='w-12'/>
                Gork Coffee
            </div>
            <Navigation />
            <Cart />
        </div>
    );  

}
export default Header; 
