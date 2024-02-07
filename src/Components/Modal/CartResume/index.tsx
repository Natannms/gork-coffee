import { cartStore } from '../../../Context/Index'
import { FaWindowClose } from "react-icons/fa";
import Rating from '../../Rating';
import CheckoutForm from '../../CheckoutForm';
import Button from '../../Button';

const CartResume = () => {
    const cartContext = cartStore();
    function closeModal() {
        cartContext.toggleModal(!cartContext.isModalVisible)
    }

    function calculateTotalPrice(): number {
        const totalByItem: number[] = cartContext.items.map(item => {
            return item.price * item.quantity
        })

        const totalPrice: number = totalByItem.reduce((acc, curr) => acc + curr, 0);

        return totalPrice;
    }
    return (
        <div className=' bg-black/30 fixed z-50 w-full h-full justify-center lg:p-10 p-2'
            style={{ display: cartContext.isModalVisible ? 'flex' : 'none' }}>
            <div className='bg-white md:w-10/12 w-full rounded-lg overflow-auto'>
                <header className='flex justify-between p-8'>
                    <h1 className='text-green-900 font-medium text-3xl md:flex hidden'>Resumo de sua compra</h1>
                    <h1 className='text-green-900 font-medium text-1xl md:hidden flex'>Resumo de sua compra</h1>
                    <div className='cursor-pointer' onClick={() => { closeModal() }}>
                        <FaWindowClose size={30} color='red' className='md:flex hidden'/>
                        <FaWindowClose size={20} color='red' className='md:hidden flex'/>
                    </div>
                </header>
                {!cartContext.paymentStep &&
                    <section className='lg:p-8 p-4 lg:flex lg:flex-row gap-8 w-full'>
                        <ul className='w-full flex flex-col justify-center gap-8'>
                            {cartContext.items.map(item => (
                                <li className='text-black border border-black/30 lg:border-black/0 rounded-lg p-4 lg:p-2 flex flex-col lg:flex-row gap-4 lg:items-center '>
                                    <img src={item.image} className='lg:w-24 w-full' alt="" />
                                    <div className='flex flex-col gap-2'>
                                        <p className='text-green-800 font-bold uppercase'>{item.title}</p>
                                        <p className='max-w-80'>Description: {item.description}</p>
                                        <Rating rate={item.rating.rate} count={item.rating.count} />
                                        <p>Qtd: <strong>{item.quantity}</strong></p>
                                        <p>Price: <strong className='text-green-900 font-black'>${item.price * item.quantity}</strong></p>
                                    </div>
                                    <div className='lg:flex flex-col gap-2 hidden'>
                                        <p>Unit <strong>${item.price}</strong></p>
                                        <p>Qtd: <strong>{item.quantity}</strong></p>
                                        <p>Price: <strong className='text-green-900 font-black'>${item.price * item.quantity}</strong></p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className='text-black lg:w-3/12 w-full flex flex-col gap-10 lg:bg-white bg-green-100 rounded-xl p-4 md:mb-32 justify-center'>
                            <h2 className='text-3xl self-end'>Total: <strong className='font-black text-green-800 text-4xl'>$ {calculateTotalPrice()}</strong></h2>
                            <Button
                                styles='bg-[#046e2e] hover:bg-[#023116] cursor-pointer p-3 text-white rounded text-1xl w-46 transition'
                                title='Finalizar compra' onClick={() => { cartContext.activePaymentStep(!cartContext.paymentStep) }} />
                        </div>
                    </section>
                }

                {cartContext.paymentStep &&
                    <section>
                        <CheckoutForm />
                    </section>
                }
            </div>
        </div>
    );

}
export default CartResume; 
