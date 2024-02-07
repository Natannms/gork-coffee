import { create } from 'zustand'
import { IProductSelected } from '../types/Product';
import { IPurchaseData } from '../types/IPurchaseData';
interface ICartStore {
    items:IProductSelected[]
    addItem: (item:IProductSelected) => void
    update: (items:IProductSelected[]) => void
    isModalVisible:boolean
    isAlertVisible:boolean
    toggleModal: (value:boolean)=> void
    message:string
    toggleVisibleAlert: (value:boolean)=> void
    setAlertMessage: (message:string)=>void
    paymentStep: boolean
    activePaymentStep:(value:boolean)=>void
    purchase: (data:IPurchaseData)=>void
    purchaseData: IPurchaseData | null
}

export const cartStore = create<ICartStore>((set) => ({
    items: [],
    isModalVisible: false,
    isAlertVisible: false,
    message: '',
    paymentStep: false,
    purchaseData: null,
    activePaymentStep: (value:boolean) => set(()=> ({paymentStep: value})),
    addItem: (item: IProductSelected) => set((state) => ({ items: [...state.items, item] })),
    update: (items:IProductSelected[]) => set(() => ({ items: items })),
    toggleModal: (value:boolean) => set(()=> ({isModalVisible: value})),
    toggleVisibleAlert: (value:boolean) => set(()=> ({isAlertVisible: value})),
    setAlertMessage: (message: string) => set(() => ({ message: message })),
    purchase: (data:IPurchaseData)=> set(() => ({purchaseData:data}))
}));
