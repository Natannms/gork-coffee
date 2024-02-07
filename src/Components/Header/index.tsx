import logo from '../../assets/imgs/logo/coffee-logo.png'
import Cart from '../Cart';
import Navigation from '../Navigation';
import 'react-toastify/dist/ReactToastify.css';
const Header = () => {  
    return (
        <div className='py-4 px-2 bg-slate-200 flex flex-row justify-between fixed w-full'>
            <div className='flex text-2xl lg:w-3/12 gap-4 justify-center items-center text-black font-medium'>
                <img src={logo} alt=""  className='w-12'/>
                <p className='w-full'>Gork Coffee</p>
            </div>
            <Navigation />
            <Cart />
        </div>
    );  

}
export default Header; 
