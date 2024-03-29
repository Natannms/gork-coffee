import { MdShoppingCart } from "react-icons/md";
import { cartStore } from '../../Context/Index'
import { toast } from 'react-toastify';

const Cart = () => {
  const cartContext = cartStore();
  const showModal = () => {
    if(cartContext.items.length > 0){
      cartContext.toggleModal(!cartContext.isModalVisible)
    }else{
     toast('Não existem produtos em seu carrinho !',{autoClose:3000});
    }
  }

  function calculateQuantityItens(): number {
    const group: number[] = cartContext.items.map(item => {
      return item.quantity
    })

    const total: number = group.reduce((acc, curr) => acc + curr, 0);

    return total;
  }
  
  return (
    <div onClick={() => { showModal() }} className="bg-[#126d62] hover:bg-[#93b56f] flex justify-center items-center p-2 rounded cursor-pointer">
      <MdShoppingCart size={20} />
      {cartContext.items.length > 0 ?
        <sup className="bg-red-500 px-1 py-2 rounded-full">{calculateQuantityItens()}</sup>
        :
        ''
      }
    </div>
  );

}
export default Cart; 
