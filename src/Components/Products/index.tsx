import { useState } from "react"
import { IProduct } from "../../types/Product"
import ProductItem from "../ProductItem"
import coffe1 from '../../assets/imgs/products/coffee1.jpg'
import coffe2 from '../../assets/imgs/products/coffee2.jpg'
import coffe3 from '../../assets/imgs/products/coffee3.jpg'
import coffe4 from '../../assets/imgs/products/coffe4.jpg'
import coffe5 from '../../assets/imgs/products/coffee5.jpg'
import coffe6 from '../../assets/imgs/products/coffee6.jpg'
const Products = () => {
    const [products] = useState<IProduct[]>([
        {
            id: 1,
            category: 'coffee',
            description: 'Special blend of Arabica beans, medium roast.',
            image: coffe1,
            price: 30,
            rating: { rate: 4, count: 120 },
            title: "Special Arabica Blend"
          },
          {
            id: 2,
            category: 'coffee',
            description: 'A rich and bold espresso blend for coffee enthusiasts.',
            image: coffe2,
            price: 35,
            rating: { rate: 4.5, count: 90 },
            title: "Bold Espresso Delight"
          },
          {
            id: 3,
            category: 'coffee',
            description: 'Smooth and creamy latte with a hint of caramel.',
            image: coffe3,
            price: 25,
            rating: { rate: 4.2, count: 150 },
            title: "Caramel Latte Bliss"
          },
          {
            id: 4,
            category: 'coffee',
            description: 'Light and refreshing iced coffee for hot summer days.',
            image: coffe4,
            price: 28,
            rating: { rate: 4.1, count: 110 },
            title: "Iced Coffee Chill"
          },
          {
            id: 5,
            category: 'coffee',
            description: 'A delightful mocha blend with a touch of cocoa.',
            image: coffe5,
            price: 32,
            rating: { rate: 4.3, count: 100 },
            title: "Mocha Cocoa Fusion"
          },
          {
            id: 6,
            category: 'coffee',
            description: 'Exotic and fruity Ethiopian coffee with a citrus twist.',
            image: coffe6,
            price: 38,
            rating: { rate: 4.7, count: 130 },
            title: "Ethiopian Citrus Delight"
          }
    ])
    
    return (
        <div className="py-20 flex flex-col justify-center  items-center text-black font-bold ">
            <h1 className="text-3xl font-normal  uppercase tracking-[20px] md:tracking-[40px]" >Products</h1>
            <ul className="w-full px-8 lg:pl-40 md:pl-40 py-20 flex gap-4 flex-wrap ">
                {products.map(product => (
                    <ProductItem
                        title={product.title}
                        price={product.price}
                        description={product.description}
                        id={product.id}
                        category={product.category}
                        image={product.image}
                        rating={product.rating}
                        key={product.id}
                    />))}
            </ul>
        </div>
    );

}
export default Products; 
