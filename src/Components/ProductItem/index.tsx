import { IProduct, IProductSelected } from "../../types/Product";
import Button from "../Button";
import Rating from '../Rating'
import { cartStore } from '../../Context/Index'
import { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";

const ProductItem = ({ image, title, rating, price, category, description, id, }: IProduct) => {
    const truncatedTitle: string = title.length > 20 ? title.substring(0, 20) + "..." : title;
    const cartContext = cartStore();
    const [qtd, setQtd] = useState(0)

    const addItensInCart = (product:IProductSelected)=>{
        const existingProductIndex = cartContext.items.findIndex(item => item.id === product.id);
        
        if(existingProductIndex == -1){
            cartContext.addItem(product)
        }else{
            const updatedCart = [...cartContext.items];
            updatedCart[existingProductIndex].quantity += qtd;
            cartContext.update(updatedCart);
        }
        console.log(cartContext.items)
    }
    function onChangeQtd(event: ChangeEvent<HTMLInputElement>) {
        // Certifique-se de converter o valor para o tipo desejado, por exemplo, número.
        const qtdValue: number = parseInt(event.target.value, 10);
        setQtd(qtdValue);
    }

    return (
        <li className="bg-white text-black w-96 shadow-xl border border-b-gray-600/10 rounded-lg">
            <div className="bg-red-500 w-full flex justify-center rounded-t-lg">
                <img src={image} alt="" className="w-full  rounded-t-lg" />
            </div>
            <div className="p-4">
                <h2 className="pt-10">{truncatedTitle}</h2>
                <Rating rate={rating.rate} count={rating.count} />
                <h3 className="text-4xl text-right">$ {price}</h3>
                <div className="flex justify-between">
                    <Button title="Buy" onClick={() => {
                        if(qtd == 0){
                            addItensInCart({ image, title, rating, price, category, description, id, quantity:1 })
                        }else{
                            addItensInCart({ image, title, rating, price, category, description, id, quantity:qtd })
                        }
                        toast('Item adicionado ao carrinho !', {autoClose:2000});
                    }} />
                    <input
                        type="number"
                        className="py-3 px-4 block w-32 border-green-200 rounded-lg text-sm focus:border-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-emerald-700 dark:border-green-700 dark:text-white dark:focus:ring-green-600"
                        placeholder="Quantidade" 
                        onChange={onChangeQtd}
                        value={qtd}
                    />
                </div>
            </div>
        </li>
    );

}
export default ProductItem; 
