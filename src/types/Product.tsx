import { IRating } from "./Rating"

export interface IProduct {
    category: string
    description: string
    id: number
    price: number
    rating: IRating
    title:string
    image:string
}

export interface IProductSelected {
    category: string
    description: string
    id: number
    price: number
    rating: IRating
    title:string
    image:string
    quantity:number
}

