import { cartStore } from '../../../Context/Index'
import { FaWindowClose } from "react-icons/fa";
import Rating from '../../Rating';
const CartResume = () => {
    const cartContext = cartStore();
    function closeModal(){
        cartContext.toggleModal(!cartContext.isModalVisible)
    }

    function calculateTotalPrice(): number{
        const totalByItem:number[] = cartContext.items.map(item => {
            return item.price * item.quantity
        })

        const totalPrice: number = totalByItem.reduce((acc, curr) => acc + curr, 0);

        return totalPrice;
    }
    return (
        <div className=' bg-black/30 fixed z-50 w-full h-full justify-center p-10'
            style={{ display: cartContext.isModalVisible ? 'flex' : 'none' }}>
            <div className='bg-white w-10/12 rounded-lg'>
                <header className='flex justify-between p-8'>
                    <h1 className='text-green-900 font-medium text-3xl'>Resumo de sua compra</h1>
                    <div className='cursor-pointer' onClick={()=>{closeModal()}}>
                      <FaWindowClose size={30} color='red' />
                    </div>
                </header>
                <section className='p-8 flex gap-8'>
                    <ul className='w-8/12 '>
                        {cartContext.items.map(item => (
                            <li className='text-black border rounded-lg p-2 flex gap-10 items-center'>
                                <img src={item.image} className='w-24' alt="" />
                                <div className='flex flex-col gap-2'>
                                    <p className='text-green-800 font-bold uppercase'>{item.title}</p>
                                    <p className='max-w-80'>Description: {item.description}</p>
                                    <Rating rate={item.rating.rate} count={item.rating.count}/>
                                </div>
                                <div className='flex flex-col gap-2'>
                                  <p> Unit. <strong>${item.price}</strong></p>
                                  <p> Quantity. <strong>{item.quantity}</strong></p>
                                  <p> Price by Quantity. <strong className='text-green-900 font-black'>${item.price * item.quantity}</strong></p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className='text-black w-full flex flex-col'>
                        <h2 className='text-3xl self-end'>Total: <strong className='font-black text-green-800 text-4xl'>$ {calculateTotalPrice()}</strong></h2>
                    </div>
                </section>
            </div>
        </div>
    );

}
export default CartResume; 
