import { MdShoppingCart } from "react-icons/md";

interface CartProps {
    Qtd: number;
  }

const Cart = ({Qtd}: CartProps) => {  

    return (
        <div className="bg-[#126d62] hover:bg-[#93b56f] flex justify-center items-center p-2 rounded cursor-pointer">
            <MdShoppingCart size={20} />
           {Qtd > 0 ?
             <sup className="bg-red-500 px-1 py-2 rounded-full">{Qtd}</sup>
             :
             ''
           }
        </div>
    );  

}
export default Cart; 
