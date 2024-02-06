import { create } from 'zustand'
import { IProductSelected } from '../types/Product';
interface ICartStore {
    items:IProductSelected[],
    addItem: (item:IProductSelected) => void
    update: (items:IProductSelected[]) => void
}

export const cartStore = create<ICartStore>((set) => ({
    items: [],
    addItem: (item: IProductSelected) => set((state) => ({ items: [...state.items, item] })),
    update: (items:IProductSelected[]) => set(() => ({ items: items })),
}));

// export const useModalAuthStore =  create((set)=> ({
//     isVisible: false,
//     form:'login',
//     toggleModal: (item, form)=> set(()=>({isVisible: !item, form:form})),
//     manualShowModal: (item, form)=> set(()=>({isVisible: item, form:form}))
// }));

// export const useUserStore = create((set) => ({
//     data: null,
//     updateUser: (item) => set(() => ({ data: item })),
// }));
