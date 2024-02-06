import { create } from 'zustand'
import { IProductSelected } from '../types/Product';
interface ICartStore {
    items:IProductSelected[]
    addItem: (item:IProductSelected) => void
    update: (items:IProductSelected[]) => void
    isModalVisible:boolean,
    toggleModal: (value:boolean)=> void
}

export const cartStore = create<ICartStore>((set) => ({
    items: [],
    isModalVisible: false,
    addItem: (item: IProductSelected) => set((state) => ({ items: [...state.items, item] })),
    update: (items:IProductSelected[]) => set(() => ({ items: items })),
    toggleModal: (value:boolean) => set(()=> ({isModalVisible: value}))
}));
