import { IProduct } from "../../types/Product";
import Button from "../Button";
import Rating from '../Rating'

const ProductItem = ({ image, title, rating, price}:IProduct) => {  
    const truncatedTitle: string = title.length > 20 ? title.substring(0, 20) + "..." : title;

    return (
        <li className="bg-white text-black w-96 shadow-xl border border-b-gray-600/10 rounded-lg">
            <div className="bg-red-500 w-full flex justify-center rounded-t-lg">
                <img src={image} alt=""  className="w-full  rounded-t-lg"/>
            </div>
            <div className="p-4">
                <h2 className="pt-10">{truncatedTitle}</h2>
                <Rating rate={rating.rate} count={rating.count}/>
                <h3 className="text-4xl text-right">$ {price}</h3>
                <Button title="Buy" />
            </div>
        </li>
    );  

}
export default ProductItem; 
