import coffe from '../../assets/imgs/banners/feature-img2.png'
import { FaCircleCheck } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";

const FeaturedProduct = () => {  

    return (
        <div className="bg-white py-20 px-20 flex">
           <div>
                <img src={coffe} alt="" className='w-300'/>
           </div>
           <div>
                <h1 className='text-black'>Choice of various types of coffes</h1>
                <p className='text-black'>
                    We provide a wide of selection of coffe types, for you and your family and are free to choose a coffe.
                </p>
                <ul>
                    <li><FaCircleCheck /></li>
                    <li><FaLock /></li>
                    <li><FaRegCreditCard /></li>
                </ul>
           </div>
        </div>
    );  

}
export default FeaturedProduct; 
