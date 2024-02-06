import { MdShoppingCart } from "react-icons/md";
import { cartStore } from '../../Context/Index'

const Cart = () => {  
  const cartContext = cartStore();

    return (
        <div className="bg-[#126d62] hover:bg-[#93b56f] flex justify-center items-center p-2 rounded cursor-pointer">
            <MdShoppingCart size={20} />
           {cartContext.items.length > 0 ?
             <sup className="bg-red-500 px-1 py-2 rounded-full">{cartContext.items.length}</sup>
             :
             ''
           }
        </div>
    );  

}
export default Cart; 
